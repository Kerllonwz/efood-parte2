import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.footer`
  background-color: ${colors.primary};
  padding: 40px 0;
  text-align: center;
  margin-top: 80px;
`

export const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${colors.white};
  border: 2px solid ${colors.white};
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  padding: 8px 16px;
  margin-bottom: 24px;

  svg {
    width: 32px;
    height: 32px;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;

  a {
    color: ${colors.white};
    display: flex;
    font-size: 24px;
  }
`

export const Description = styled.p`
  font-size: 10px;
  color: ${colors.white};
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.8;
`
