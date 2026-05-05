import { Restaurant } from '../types'

const BASE_URL = 'https://api-ebac.vercel.app/api/efood'

const normalizeAssetUrl = (url: string) =>
  url.replace('api-ebac.vercel.app/efood/', 'api-ebac.vercel.app/efood/').replace(/([^:])\/{2,}/g, '$1/')

const normalizeRestaurant = (restaurant: Restaurant): Restaurant => ({
  ...restaurant,
  capa: normalizeAssetUrl(restaurant.capa),
  cardapio: restaurant.cardapio.map((item) => ({
    ...item,
    foto: normalizeAssetUrl(item.foto),
  })),
})

export const fetchRestaurants = async (): Promise<Restaurant[]> => {
  const response = await fetch(`${BASE_URL}/restaurantes`)
  if (!response.ok) throw new Error('Erro ao buscar restaurantes')
  const restaurants: Restaurant[] = await response.json()
  return restaurants.map(normalizeRestaurant)
}

export const fetchRestaurantById = async (id: number): Promise<Restaurant | undefined> => {
  const response = await fetch(`${BASE_URL}/restaurantes/${id}`)
  if (!response.ok) throw new Error('Erro ao buscar restaurante')
  const restaurant: Restaurant = await response.json()
  return normalizeRestaurant(restaurant)
}
