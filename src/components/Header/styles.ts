import styled from 'styled-components'
import { colors } from '../../styles'

export const HeroHeader = styled.header`
  background-color: ${colors.background};
  padding: 80px 0;
  text-align: center;
`

export const SimpleHeader = styled.header`
  background-color: ${colors.primary};
`

export const Logo = styled.div<{ $inverse?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ $inverse }) => ($inverse ? 'transparent' : colors.white)};
  border: 2px solid ${({ $inverse }) => ($inverse ? colors.white : colors.primary)};
  border-radius: 0;
  color: ${({ $inverse }) => ($inverse ? colors.white : colors.primary)};
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  padding: 8px 16px;

  svg {
    width: 32px;
    height: 32px;
  }
`

export const Tagline = styled.p`
  color: ${colors.primary};
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 100%;
  margin: 80px auto 0;
  text-align: center;
`

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 24px 0;

  a,
  > span {
    color: ${colors.white};
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
  }

  > span {
    justify-self: end;
  }
`
