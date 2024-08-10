import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, CryptoPrice, Pair } from "../types";
import { getCryptos, getCurrentCryptoPrice } from "../services/CryptoService";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[],
    dataResult: CryptoPrice,
    loading: boolean,
    fetchCriptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}



export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({

    cryptoCurrencies: [],
    dataResult: {
        CHANGE24HOUR: '',
        CHANGEPCT24HOUR: '',
        HIGHDAY: '',    
        LASTUPDATE: '',
        LOWDAY: '',
        PRICE: '',
        VOLUME24HOUR: '',
        VOLUME24HOURTO: '',
        IMAGEURL: ''
    },
    loading: false,
    fetchCriptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await getCurrentCryptoPrice(pair)
        set(() => ({
            dataResult: result,
            loading: false
        }))
    }
})));