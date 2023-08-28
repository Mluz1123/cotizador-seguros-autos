import { useState, createContext } from 'react'
import { obtenerDiferenciaYear } from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: ''
  })
  const [error, setError] = useState('')

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
    console.log(diferencia)

    //Cada año de diferencia hay que restar 3%
    //Hay que restar el 3% por cada año
    //Ford 30%
    //Renault 20%
    //Chevrolet 20%
    //Peugeot 10%
    //Honda 20%
    //Nissan 30%
    //Kia 25%
    //Suzuki 25%
    //Basico 20%
    //Completo 50%
  }

  return (
    <CotizadorContext.Provider
      value={{ datos, handleChangeDatos, error, setError, cotizarSeguro }}
    >
      {children}
    </CotizadorContext.Provider>
  )
}

export { CotizadorProvider }
export default CotizadorContext
