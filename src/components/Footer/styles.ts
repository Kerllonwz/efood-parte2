import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.footer`
  background-color: ${colors.cream};
  padding: 40px 0;
  text-align: center;
  margin-top: 80px;
`

export const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid ${colors.primary};
  color: ${colors.primary};
  font-size: 18px;
  font-weight: 700;
  width: 125px;
  height: 57.5px;
  letter-spacing: -0.5px;
  margin-bottom: 24px;
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
