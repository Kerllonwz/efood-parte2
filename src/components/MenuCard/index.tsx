import { MenuItem } from '../../types'
import * as S from './styles'

interface Props {
  item: MenuItem
  onAddToCart?: (item: MenuItem) => void
}

const MenuCard = ({ item, onAddToCart }: Props) => {
  const formatPrice = (price: number) => price.toFixed(2).replace('.', ',')

  return (
    <S.Card>
      <S.Image src={item.foto} alt={item.nome} />
      <S.Info>
        <S.Title>{item.nome}</S.Title>
        <S.Description>{item.descricao}</S.Description>
      </S.Info>
      <S.Footer>
        <S.Button onClick={() => onAddToCart?.(item)}>
          Adicionar ao carrinho
        </S.Button>
        <S.Price>R$ {formatPrice(item.preco)}</S.Price>
      </S.Footer>
    </S.Card>
  )
}

export default MenuCard
