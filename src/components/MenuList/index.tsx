import { MenuItem } from '../../types'
import MenuCard from '../MenuCard'
import * as S from './styles'

interface Props {
  items: MenuItem[]
  onItemClick?: (item: MenuItem) => void
}

const MenuList = ({ items, onItemClick }: Props) => {
  return (
    <S.Grid>
      {items.map((item) => (
        <MenuCard key={item.id} item={item} onAddToCart={onItemClick} />
      ))}
    </S.Grid>
  )
}

export default MenuList
