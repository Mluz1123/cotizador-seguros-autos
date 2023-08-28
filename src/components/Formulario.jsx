import { Fragment } from 'react'
import { MARCAS, YEARS, PLANES } from '../constants'
import useCotizador from '../hooks/useCotizador'
import Error from './Error'
const Formulario = () => {
  const { datos, handleChangeDatos, error, setError, cotizarSeguro } =
    useCotizador()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (Object.values(datos).includes('')) {
      setError('Todos los campos son obligatorios')
      return
    }
    setError('')
    cotizarSeguro()
  }

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className='my-5'>
          <label
            htmlFor='marca'
            className='block mb-3 font-bold text-gray-400 uppercase'
          >
            Marca
          </label>
          <select
            name='marca'
            id='marca'
            className='w-full p-3 bg-white border border-gray-200'
            onChange={(e) => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option value=''>--Selecciona una marca--</option>
            {MARCAS.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className='my-5'>
          <label
            htmlFor='marca'
            className='block mb-3 font-bold text-gray-400 uppercase'
          >
            Año
          </label>
          <select
            name='year'
            id='year'
            className='w-full p-3 bg-white border border-gray-200'
            onChange={(e) => handleChangeDatos(e)}
            value={datos.year}
          >
            <option value=''>--Selecciona un Año--</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className='my-5'>
          <label
            htmlFor='marca'
            className='block mb-3 font-bold text-gray-400 uppercase'
          >
            Elige un Plan
          </label>
          <div className='flex gap-3 items-center'>
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type='radio'
                  name='plan'
                  value={plan.id}
                  onChange={(e) => handleChangeDatos(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type='submit'
          value='Cotizar'
          className='w-full bg-slate-600 p-3 text-white uppercase font-bold cursor-pointer hover:bg-slate-700 transition-colors mb-5 rounded-md'
        />
      </form>
    </>
  )
}

export default Formulario
