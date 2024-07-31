import { currencies } from "../data"

export const CriptoForm = () => {
    return (
        <form
            className="form"
            action="
        ">

            <div className="field">
                <label
                    htmlFor="currency">Moneda: </label>
                <select name="currency" id="currency">
                    <option value="">-- Seleccionar --</option>
                    {currencies.map(curr => (
                        <option key={curr.code} value={curr.code}>{curr.name}</option>
                    ))}
                </select>
            </div>
            <div className="field">
                <label
                    htmlFor="criptocurrency">Moneda: </label>
                <select name="criptocurrency" id="currency">
                    <option value="">-- Seleccionar --</option>
                    {currencies.map(curr => (
                        <option key={curr.code} value={curr.code}>{curr.name}</option>
                    ))}
                </select>
            </div>
            <input type="submit" value={'Cotizar'} />
        </form>
    )
}
