import { Restaurant } from '../types'

const BASE_URL = 'https://api-ebac.vercel.app/api/efood'

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(`${BASE_URL}/restaurantes`)
  if (!response.ok) throw new Error('Erro ao buscar restaurantes')
  return response.json()
}

export const fetchRestaurantById = async (id: number): Promise<Restaurant | undefined> => {
  const response = await fetch(`${BASE_URL}/restaurantes/${id}`)
  if (!response.ok) throw new Error('Erro ao buscar restaurante')
  return response.json()
}
