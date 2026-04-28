import styled from 'styled-components'
import { colors } from '../../styles'

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const BannerContent = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 calc((100% - 1024px) / 2 + 16px) 32px;
  gap: 8px;
`

export const Category = styled.p`
  font-size: 16px;
  font-weight: 100;
  color: ${colors.white};
`

export const Name = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
`
