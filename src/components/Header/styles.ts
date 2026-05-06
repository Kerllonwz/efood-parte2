import styled from 'styled-components'
import { colors, utensilsPattern } from '../../styles'

export const HeroHeader = styled.header`
  background-color: ${colors.cream};
  background-image: ${utensilsPattern};
  background-repeat: repeat;
  background-size: 40px 40px;
  padding: 36px 0 34px;
  text-align: center;
`

export const SimpleHeader = styled.header`
  background-color: ${colors.cream};
  background-image: ${utensilsPattern};
  background-repeat: repeat;
  background-size: 40px 40px;
`

export const Logo = styled.div<{ $inverse?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${colors.white};
  border: 3px solid currentColor;
  border-radius: 0;
  color: ${colors.primary};
  font-size: 24px;
  font-weight: 900;
  line-height: 1;
  padding: 6px 8px;

  &::after {
    content: '';
    width: 20px;
    height: 20px;
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

export const Tagline = styled.p`
  color: ${colors.primary};
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 1.15;
  margin: 102px auto 0;
  text-align: center;
`

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 168px;
  padding: 0;

  a,
  > span {
    color: ${colors.primary};
    font-size: 18px;
    font-weight: 900;
    text-decoration: none;
  }

  > span {
    justify-self: end;
  }
`
