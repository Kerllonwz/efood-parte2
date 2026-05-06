import { formatPrice } from '../../utils/api'
import { AddButton, CloseButton, Content, Description, Image, ModalBox, Overlay, Portion, Title } from './styles'

const DishModal = ({ dish, onClose }) => {
  if (!dish) return null

  return (
    <Overlay onClick={onClose}>
      <ModalBox role="dialog" aria-modal="true" aria-labelledby="dish-modal-title" onClick={(event) => event.stopPropagation()}>
        <CloseButton type="button" aria-label="Fechar modal" onClick={onClose}>
          ×
        </CloseButton>
        <Image src={dish.foto} alt={dish.nome} />
        <Content>
          <Title id="dish-modal-title">{dish.nome}</Title>
          <Description>{dish.descricao}</Description>
          {dish.porcao && <Portion>Serve: {dish.porcao}</Portion>}
          <AddButton type="button" onClick={onClose}>
            Adicionar ao carrinho - {formatPrice(dish.preco)}
          </AddButton>
        </Content>
      </ModalBox>
    </Overlay>
  )
}

export default DishModal
