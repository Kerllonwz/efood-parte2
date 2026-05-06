import logo from '../../assets/images/logo.png'
import { BannerText, CartText, HeaderBar, HomeContent, LogoImage, LogoLink, NavContent, NavText } from './styles'

const Header = ({ variant = 'home' }) => (
  <HeaderBar $variant={variant}>
    {variant === 'home' ? (
      <HomeContent className="container">
        <LogoLink to="/" aria-label="efood">
          <LogoImage src={logo} alt="efood" />
        </LogoLink>

        <BannerText>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </BannerText>
      </HomeContent>
    ) : (
      <NavContent className="container">
        <NavText to="/">Restaurantes</NavText>
        <LogoLink to="/" aria-label="efood">
          <LogoImage src={logo} alt="efood" />
        </LogoLink>
        <CartText>0 produto(s) no carrinho</CartText>
      </NavContent>
    )}
  </HeaderBar>
)

export default Header
