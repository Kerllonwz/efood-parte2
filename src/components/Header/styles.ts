import styled from 'styled-components'
import { colors } from '../../styles'

export const HeroHeader = styled.header`
  background: transparent;
  padding: 64px 0 72px;
  text-align: center;
`

export const SimpleHeader = styled.header`
  background-color: ${colors.primary};
`

export const Logo = styled.div<{ $white?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: 2px solid ${({ $white }) => ($white ? colors.white : colors.primary)};
  color: ${({ $white }) => ($white ? colors.white : colors.primary)};
  font-size: 18px;
  font-weight: 700;
  width: 125px;
  height: 57.5px;
  flex-shrink: 0;
  letter-spacing: -0.5px;
`

export const Tagline = styled.p`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.primary};
  margin: 40px auto 0;
  line-height: 36px;
  letter-spacing: 0;
  text-align: center;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;

  a,
  span {
    font-size: 18px;
    font-weight: 900;
    color: ${colors.white};
    text-decoration: none;
  }
`
