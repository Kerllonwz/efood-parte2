import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import RestaurantCard from '../../components/RestaurantCard'
import { API_URL } from '../../utils/api'
import { Feedback, Main, RestaurantGrid } from './styles'

const Home = () => {
  const [restaurants, setRestaurants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível carregar os restaurantes.')
        }

        return response.json()
      })
      .then((data) => setRestaurants(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Header />
      <Main>
        {loading && <Feedback className="container">Carregando restaurantes...</Feedback>}
        {error && <Feedback className="container">{error}</Feedback>}
        {!loading && !error && (
          <RestaurantGrid className="container">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </RestaurantGrid>
        )}
      </Main>
    </>
  )
}

export default Home
