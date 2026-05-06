export const API_URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

export const capitalize = (value = '') => value.charAt(0).toUpperCase() + value.slice(1)

export const shortText = (text = '', limit = 150) => {
  if (text.length <= limit) return text

  return `${text.slice(0, limit).trim()}...`
}
