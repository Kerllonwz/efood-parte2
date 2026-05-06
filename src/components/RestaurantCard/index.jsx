import estrela from '../../assets/images/estrela.png'
import { capitalize } from '../../utils/api'
import { Button, Card, Content, Cover, Description, Rating, Star, Tag, Tags, Title, TitleLine } from './styles'

const RestaurantCard = ({ restaurant }) => {
  const tags = restaurant.destacado ? ['Destaque da semana', capitalize(restaurant.tipo)] : [capitalize(restaurant.tipo)]

  return (
    <Card>
      <Cover src={restaurant.capa} alt={restaurant.titulo} />

      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <Content>
        <TitleLine>
          <Title>{restaurant.titulo}</Title>
          <Rating>
            {restaurant.avaliacao.toFixed(1)}
            <Star src={estrela} alt="estrela" />
          </Rating>
        </TitleLine>

        <Description>{restaurant.descricao}</Description>

        <Button to={`/perfil/${restaurant.id}`}>Saiba mais</Button>
      </Content>
    </Card>
  )
}

export default RestaurantCard
