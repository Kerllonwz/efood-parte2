import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi'
import * as S from './styles'

const Footer = () => (
  <S.FooterBar>
    <div className="container">
      <S.Logo>
        <span>efood</span>
        <GiKnifeFork aria-hidden="true" />
      </S.Logo>
      <S.SocialLinks>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter />
        </a>
      </S.SocialLinks>
      <S.Description>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Description>
    </div>
  </S.FooterBar>
)

export default Footer
