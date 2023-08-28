export const MARCAS = [
  { id: 1, nombre: 'Ford' },
  { id: 2, nombre: 'Renault' },
  { id: 3, nombre: 'Chevrolet' },
  { id: 4, nombre: 'Peugeot' },
  { id: 5, nombre: 'Honda' },
  { id: 6, nombre: 'Nissan' },
  { id: 7, nombre: 'Kia' },
  { id: 8, nombre: 'Suzuki' }
]
const YEARMAX = new Date().getFullYear()
export const YEARS = Array.from(
  new Array(20),
  (valor, index) => YEARMAX - index
)

export const PLANES = [
  { id: 1, nombre: 'Básico' },
  { id: 2, nombre: 'Completo' }
]
