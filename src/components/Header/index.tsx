import { Link } from 'react-router-dom'
import * as S from './styles'

interface HeaderProps {
  variant?: 'hero' | 'simple'
}

const Header = ({ variant = 'hero' }: HeaderProps) => {
  if (variant === 'hero') {
    return (
      <S.HeroHeader>
        <div className="container">
          <S.LogoWrapper>
            <img src="/logo.svg" alt="efood" />
          </S.LogoWrapper>
          <S.Tagline>
            Viva experiências gastronômicas no conforto da sua casa
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
          <S.LogoWrapper>
            <img src="/logo.svg" alt="efood" />
          </S.LogoWrapper>
          <span>0 produtos no carrinho</span>
        </S.Nav>
      </div>
    </S.SimpleHeader>
  )
}

export default Header
