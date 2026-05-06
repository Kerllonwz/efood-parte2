import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter.png'
import { FooterBar, LegalText, Logo, SocialIcon, SocialList } from './styles'

const Footer = () => (
  <FooterBar>
    <Logo src={logo} alt="efood" />

    <SocialList aria-label="Redes sociais">
      <li>
        <a href="https://www.instagram.com" aria-label="Instagram">
          <SocialIcon src={instagram} alt="" />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com" aria-label="Facebook">
          <SocialIcon src={facebook} alt="" />
        </a>
      </li>
      <li>
        <a href="https://www.twitter.com" aria-label="Twitter">
          <SocialIcon src={twitter} alt="" />
        </a>
      </li>
    </SocialList>

    <LegalText>
      A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega,
      qualidade dos produtos é toda do estabelecimento contratado.
    </LegalText>
  </FooterBar>
)

export default Footer
