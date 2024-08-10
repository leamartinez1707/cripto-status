import { useMemo } from "react"
import { useCryptoStore } from "../store/store"
import { Spinner } from "./Spinner"
export const CriptoPrice = () => {

    const dataResult = useCryptoStore((state) => state.dataResult)
    const loading = useCryptoStore((state) => state.loading)
    const hasValues = useMemo(() => !Object.values(dataResult).includes(''), [dataResult])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasValues && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img src={`https://cryptocompare.com/${dataResult.IMAGEURL}`} alt="Imagen de la criptomoneda" />
                        <div>
                            <p>El precio es de: <span>{dataResult.PRICE}</span></p>
                            <p>El precio más alto fue: <span>{dataResult.HIGHDAY}</span></p>
                            <p>El precio más bajo fue de: <span>{dataResult.LOWDAY}</span></p>
                            <p>Variación 24hrs: <span>{dataResult.CHANGEPCT24HOUR}</span></p>
                            <p>Ultima actualización: <span>{dataResult.LASTUPDATE}</span></p>

                        </div>
                    </div>
                </>
            )
            }

        </div>
    )
}
