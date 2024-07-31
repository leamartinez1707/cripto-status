import axios from "axios"
import { CriptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/cripto.schema"
import { Pair } from "../types"


export const getCryptos = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
    const { data: { Data } } = await axios(url)
    const result = CriptoCurrenciesResponseSchema.safeParse(Data)
    if (result.success) {
        return result.data
    }
}

export const getCurrentCryptoPrice = async (pair: Pair) => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.cryptocurrency}&tsyms=${pair.currency}`
    const { data: { DISPLAY } } = await axios(url)

    const result = CryptoPriceSchema.safeParse(DISPLAY[pair.cryptocurrency][pair.currency])
    if (result.success) {
        return result.data
    }
}