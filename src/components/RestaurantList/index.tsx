import { Restaurant } from '../../types'
import RestaurantCard from '../RestaurantCard'
import * as S from './styles'

interface Props {
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => {
  return (
    <S.Grid>
      {restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </S.Grid>
  )
}

export default RestaurantList
