import { useState, createContext } from 'react'
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero
} from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })
  const [error, setError] = useState('')
  const [resultado, setResultado] = useState(0)
  const [cargando, setCargando] = useState(false)

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }

  const cotizarSeguro = () => {
    //Una base
    let resultado = 2000

    //Obtener diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year)

    //Cada año de diferencia hay que restar 3%
    resultado -= (diferencia * 3 * resultado) / 100

    //Ford 30%
    //Renault 20%
    //Chevrolet 20%
    //Peugeot 10%
    //Honda 20%
    //Nissan 30%
    //Kia 25%
    //Suzuki 25%
    resultado *= calcularMarca(datos.marca)
    //Basico 20%
    //Completo 50%
    resultado *= calcularPlan(datos.plan)
    //Formatear moneda
    resultado = formatearDinero(resultado)

    setCargando(true)
    setTimeout(() => {
      setResultado(resultado)
      setCargando(false)
    }, 3000)
  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando
      }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export { CotizadorProvider }
export default CotizadorContext
