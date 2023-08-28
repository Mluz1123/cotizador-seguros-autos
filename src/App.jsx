import { CotizadorProvider } from './context/CotizadorProvider'
import AppSeguro from './components/AppSeguro'
function App() {
  return (
    <div>
      <CotizadorProvider>
        <AppSeguro />
      </CotizadorProvider>
    </div>
  )
}

export default App
