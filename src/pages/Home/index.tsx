import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import { fetchRestaurants } from '../../services/api'
import { Restaurant } from '../../types'

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchRestaurants()
      .then(setRestaurants)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      <Header variant="hero" />
      <div className="container">
        {loading && (
          <p style={{ textAlign: 'center', padding: '80px 0', color: '#E66767' }}>
            Carregando restaurantes...
          </p>
        )}
        {error && (
          <p style={{ textAlign: 'center', padding: '80px 0', color: '#E66767' }}>
            Erro ao carregar restaurantes. Tente novamente.
          </p>
        )}
        {!loading && !error && <RestaurantList restaurants={restaurants} />}
      </div>
      <Footer />
    </>
  )
}

export default Home
