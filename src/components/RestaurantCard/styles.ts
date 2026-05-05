import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: none;
  box-shadow: 0 8px 24px rgba(76, 46, 36, 0.08);
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
`

export const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;
  padding: 5px 8px;
  letter-spacing: 0;
`

export const Content = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-top: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.primary};

  span {
    font-size: 21px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${colors.darkText};
  margin-bottom: 16px;
  flex: 1;
`

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 14px;
  font-weight: 700;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`
