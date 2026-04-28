import { Link } from 'react-router-dom'
import { Restaurant } from '../../types'
import * as S from './styles'

interface Props {
  restaurant: Restaurant
}

const RestaurantCard = ({ restaurant }: Props) => {
  return (
    <S.Card>
      <S.ImageContainer>
        <img src={restaurant.capa} alt={restaurant.titulo} />
        <S.Tags>
          {restaurant.destacado && <S.Tag>Destaque da semana</S.Tag>}
          <S.Tag>{restaurant.tipo}</S.Tag>
        </S.Tags>
      </S.ImageContainer>
      <S.Content>
        <S.TitleRow>
          <S.Title>{restaurant.titulo}</S.Title>
          <S.Rating>
            {restaurant.avaliacao}
            <span>⭐</span>
          </S.Rating>
        </S.TitleRow>
        <S.Description>{restaurant.descricao}</S.Description>
        <Link to={`/restaurante/${restaurant.id}`}>
          <S.Button>Saiba mais</S.Button>
        </Link>
      </S.Content>
    </S.Card>
  )
}

export default RestaurantCard
