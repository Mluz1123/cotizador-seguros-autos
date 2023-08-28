import useCotizador from '../hooks/useCotizador'
const Error = () => {
  const { error } = useCotizador()
  if (!error) return null

  console.log(error)

  return (
    <div className='border text-center border-red-400 bg-red-100 py-3 text-red-700 rounded-xl'>
      <p>{error}</p>
    </div>
  )
}

export default Error
