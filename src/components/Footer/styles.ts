import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterBar = styled.footer`
  background-color: ${colors.background};
  padding: 40px 0;
  text-align: center;
  margin-top: 80px;
`

export const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${colors.primary};
  border: 1px solid ${colors.primary};
  font-size: 30px;
  font-weight: 900;
  line-height: 1;
  padding: 8px 12px;
  margin-bottom: 24px;

  &::after {
    content: '';
    width: 30px;
    height: 30px;
    background-color: currentColor;
    display: block;
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M6 2h2v9h2V2h2v9h2V2h2v10.5c0 2.5-1.68 4.6-4 5.25V30H10V17.75c-2.32-.65-4-2.75-4-5.25V2zm17 0c3.31 0 6 2.69 6 6v11h-4v11h-3V2h1z'/%3E%3C/svg%3E");
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
  }

  svg {
    display: none;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;

  a {
    color: ${colors.primary};
    display: flex;
    font-size: 24px;
  }
`

export const Description = styled.p`
  font-size: 10px;
  color: ${colors.primary};
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.8;
`
