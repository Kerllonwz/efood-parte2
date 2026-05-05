import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 160px;
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
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;
  padding: 4px 6px;
  letter-spacing: 0;
`

export const Content = styled.div`
  padding: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding-top: 4px;
`

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 900;
  color: ${colors.primary};
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.primary};

  span {
    font-size: 15px;
  }
`

export const Description = styled.p`
  display: -webkit-box;
  font-size: 11px;
  line-height: 1.55;
  color: ${colors.primary};
  margin-bottom: 10px;
  overflow: hidden;
  flex: 1;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`

export const Button = styled.button`
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 10px;
  font-weight: 700;
  padding: 5px 8px;
  border: none;
  cursor: pointer;
  align-self: flex-start;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.primaryDark};
  }
`
