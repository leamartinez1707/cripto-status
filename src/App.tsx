import { useEffect } from "react"
import { CriptoForm } from "./components/CriptoForm"
import { useCryptoStore } from "./store/store"
import { CriptoPrice } from "./components/CriptoPrice"

function App() {


  const fetchCriptos = useCryptoStore(state => state.fetchCriptos)

  useEffect(() => {
    fetchCriptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>

        <div className="content">

          <CriptoForm />
          <CriptoPrice />
        </div>

      </div>
    </>
  )
}

export default App
