import { Link } from 'react-router-dom'
import * as S from './styles'

interface HeaderProps {
  variant?: 'hero' | 'simple'
}

const UtensilsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
  </svg>
)

const Header = ({ variant = 'hero' }: HeaderProps) => {
  if (variant === 'hero') {
    return (
      <S.HeroHeader>
        <div className="container">
          <S.Logo>
            efood <UtensilsIcon />
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
          <S.Logo $white>
            efood <UtensilsIcon />
          </S.Logo>
          <span>0 produtos no carrinho</span>
        </S.Nav>
      </div>
    </S.SimpleHeader>
  )
}

export default Header
