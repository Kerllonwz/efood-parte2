import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import fundo from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  background-image: url(${fundo});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  ${({ $variant }) =>
    $variant === 'home'
      ? css`
          padding: 40px 0;
        `
      : css`
          padding: 64px 0;
        `}
`

export const HomeContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 138px;
`

export const NavContent = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`

export const LogoLink = styled(Link)`
  display: block;
  height: 58px;
  width: 125px;
`

export const LogoImage = styled.img`
  height: 58px;
  width: 125px;
`

export const BannerText = styled.h1`
  color: var(--red);
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  text-align: center;
`

export const NavText = styled(Link)`
  color: var(--red);
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
`

export const CartText = styled.span`
  color: var(--red);
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  text-align: right;
`
