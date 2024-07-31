import { CriptoForm } from "./components/CriptoForm"

function App() {

  return (
    <>
      <div className="container">
        <h1 className="app-title">Cotizador de <span>Criptomonedas</span></h1>

        <div className="content">

          <CriptoForm />
        </div>

      </div>
    </>
  )
}

export default App
