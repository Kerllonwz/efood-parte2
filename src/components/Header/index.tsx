import { Link } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'
import * as S from './styles'

interface HeaderProps {
  variant?: 'hero' | 'simple'
}

const Header = ({ variant = 'hero' }: HeaderProps) => {
  if (variant === 'hero') {
    return (
      <S.HeroHeader>
        <div className="container">
          <S.Logo>
            <span>efood</span>
            <GiKnifeFork aria-hidden="true" />
          </S.Logo>
          <S.Tagline>
            Viva experiências gastronômicas
            <br />
            no conforto da sua casa
          </S.Tagline>
        </div>
      </S.HeroHeader>
    )
  }

  return (
    <S.SimpleHeader>
      <div className="container">
        <S.Nav>
          <Link to="/">Restaurantes</Link>
          <S.Logo $inverse>
            <span>efood</span>
            <GiKnifeFork aria-hidden="true" />
          </S.Logo>
          <span>0 produtos no carrinho</span>
        </S.Nav>
      </div>
    </S.SimpleHeader>
  )
}

export default Header
