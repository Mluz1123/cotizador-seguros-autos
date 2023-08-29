export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year
}

export function calcularMarca(marca) {
  let incremento
  switch (marca) {
    case '1':
      incremento = 1.3
      break
    case '2':
      incremento = 1.2
      break
    case '3':
      incremento = 1.2
      break
    case '4':
      incremento = 1.1
      break
    case '5':
      incremento = 1.2
      break
    case '6':
      incremento = 1.3
      break
    case '7':
      incremento = 1.25
      break
    case '8':
      incremento = 1.25
      break
    default:
      break
  }
  return incremento
}

export function calcularPlan(plan) {
  return plan === '1' ? 1.2 : 1.5
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}
