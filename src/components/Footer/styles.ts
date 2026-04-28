import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.footer`
  background-color: ${colors.cream};
  padding: 40px 0;
  text-align: center;
  margin-top: 80px;
`

export const LogoWrapper = styled.div`
  display: inline-block;
  margin-bottom: 24px;

  img {
    display: block;
    height: 40px;
    width: auto;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Description = styled.p`
  font-size: 10px;
  color: ${colors.primary};
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.8;
`
