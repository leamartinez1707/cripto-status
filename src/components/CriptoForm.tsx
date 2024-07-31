import { ChangeEvent, FormEvent, useState } from "react"
import { currencies } from "../data"
import { useCryptoStore } from "../store/store"
import { Pair } from "../types"
import { ErrorMessage } from "./ErrorMessage"

export const CriptoForm = () => {

    const cryptoCurrencies = useCryptoStore(state => state.cryptoCurrencies)
    const fetchData = useCryptoStore(state => state.fetchData)

    const [pair, setPair] = useState<Pair>({
        currency: '',
        cryptocurrency: ''
    })
    const [error, setError] = useState('')


    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPair({
            ...pair,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(pair).includes('')) {
            setError('Todos los campos son obligatorios')
            return;
        }
        setError('')
        fetchData(pair)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="form"
        >
            <ErrorMessage>{error}</ErrorMessage>
            <div className="field">
                <label
                    htmlFor="currency">Moneda: </label>
                <select
                    onChange={handleChange}
                    name="currency" id="currency"
                    value={pair.currency}
                >
                    <option value="">-- Seleccionar --</option>
                    {currencies.map(curr => (
                        <option key={curr.code} value={curr.code}>{curr.name}</option>
                    ))}
                </select>
            </div>
            <div className="field">
                <label
                    htmlFor="cryptocurrency">Moneda: </label>
                <select
                    onChange={handleChange}
                    name="cryptocurrency" id="cryptocurrency"
                    value={pair.cryptocurrency}>

                    <option value="">-- Seleccionar --</option>
                    {cryptoCurrencies.map(curr => (
                        <option key={curr.CoinInfo.Name} value={curr.CoinInfo.Name}>{curr.CoinInfo.FullName}</option>
                    ))}
                </select>
            </div>
            <input type="submit" value={'Cotizar'} />
        </form>
    )
}
