import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import DishCard from '../../components/DishCard'
import DishModal from '../../components/DishModal'
import Header from '../../components/Header'
import { API_URL, capitalize } from '../../utils/api'
import {
  Description,
  Feedback,
  Hero,
  HeroContent,
  Menu,
  ProductGrid,
  RestaurantName,
  SectionTitle,
  Type,
} from './styles'

const Profile = () => {
  const { id } = useParams()
  const [restaurants, setRestaurants] = useState([])
  const [selectedDish, setSelectedDish] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível carregar o restaurante.')
        }

        return response.json()
      })
      .then((data) => setRestaurants(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const restaurant = useMemo(() => restaurants.find((item) => String(item.id) === id), [id, restaurants])

  return (
    <>
      <Header variant="restaurant" />

      {loading && <Feedback className="container">Carregando restaurante...</Feedback>}
      {error && <Feedback className="container">{error}</Feedback>}
      {!loading && !error && !restaurant && <Feedback className="container">Restaurante não encontrado.</Feedback>}
      {restaurant && (
        <>
          <Hero $image={restaurant.capa}>
            <HeroContent className="container">
              <Type>{capitalize(restaurant.tipo)}</Type>
              <RestaurantName>{restaurant.titulo}</RestaurantName>
            </HeroContent>
          </Hero>

          <Menu>
            <div className="container">
              <Description>{restaurant.descricao}</Description>
              <SectionTitle>Cardápio</SectionTitle>
              <ProductGrid>
                {restaurant.cardapio.map((dish) => (
                  <DishCard key={dish.id} dish={dish} onSelect={setSelectedDish} />
                ))}
              </ProductGrid>
            </div>
          </Menu>
        </>
      )}

      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </>
  )
}

export default Profile
