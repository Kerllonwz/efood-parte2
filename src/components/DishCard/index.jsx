import { shortText } from '../../utils/api'
import { AddButton, Card, Description, Image, Portion, Price, Title } from './styles'

const DishCard = ({ dish, onSelect }) => (
  <Card onClick={() => onSelect(dish)}>
    <Image src={dish.foto} alt={dish.nome} />
    <Title>{dish.nome}</Title>
    <Description>{shortText(dish.descricao, 142)}</Description>
    {dish.porcao && <Portion>Serve: {dish.porcao}</Portion>}
    <Price>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(dish.preco)}</Price>
    <AddButton
      type="button"
      onClick={(event) => {
        event.stopPropagation()
        onSelect(dish)
      }}
    >
      Adicionar ao carrinho
    </AddButton>
  </Card>
)

export default DishCard
