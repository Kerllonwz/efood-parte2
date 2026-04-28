import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.primary};
  padding: 8px;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const Image = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  display: block;
`

export const Info = styled.div`
  flex: 1;
  padding: 8px 0;
`

export const Title = styled.h4`
  font-size: 18px;
  font-weight: 900;
  margin: 8px 0;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.75;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`

export const Price = styled.span`
  font-size: 14px;
  font-weight: 700;
`

export const Button = styled.button`
  background-color: ${colors.cream};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  padding: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.white};
  }
`
