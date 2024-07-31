import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { CryptoCurrency, CryptoPrice, Pair } from "../types";
import { getCryptos, getCurrentCryptoPrice } from "../services/CryptoService";

type CryptoStore = {
    cryptoCurrencies: CryptoCurrency[],
    dataResult: CryptoPrice,
    fetchCriptos: () => Promise<void>,
    fetchData: (pair: Pair) => Promise<void>
}



export const useCryptoStore = create<CryptoStore>()(devtools((set) => ({

    cryptoCurrencies: [],
    dataResult: {} as CryptoPrice,
    fetchCriptos: async () => {
        const cryptoCurrencies = await getCryptos()
        set(() => ({
            cryptoCurrencies
        }))
    },
    fetchData: async (pair) => {
        const result = await getCurrentCryptoPrice(pair)
        set(() => ({
            dataResult: result
        }))
    }
})));