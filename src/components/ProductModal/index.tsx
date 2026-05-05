import { MenuItem } from '../../types'
import * as S from './styles'

interface Props {
  item: MenuItem | null
  onClose: () => void
  onAddToCart: (item: MenuItem) => void
}

const ProductModal = ({ item, onClose, onAddToCart }: Props) => {
  if (!item) return null

  const formatPrice = (price: number) => price.toFixed(2).replace('.', ',')

  const handleAdd = () => {
    onAddToCart(item)
    onClose()
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(event) => event.stopPropagation()}>
        <S.CloseButton onClick={onClose} aria-label="Fechar modal">
          x
        </S.CloseButton>
        <S.ProductImage src={item.foto} alt={item.nome} />
        <S.ProductInfo>
          <S.ProductTitle>{item.nome}</S.ProductTitle>
          <S.ProductDescription>{item.descricao}</S.ProductDescription>
          <S.ProductPortion>Porção: {item.porcao}</S.ProductPortion>
          <S.Price>R$ {formatPrice(item.preco)}</S.Price>
          <S.AddButton onClick={handleAdd}>Adicionar ao carrinho</S.AddButton>
        </S.ProductInfo>
      </S.Modal>
    </S.Overlay>
  )
}

export default ProductModal
