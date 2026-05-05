import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
`

export const Modal = styled.div`
  background-color: ${colors.white};
  color: ${colors.primary};
  max-width: 640px;
  width: 100%;
  padding: 24px;
  position: relative;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  background: none;
  border: none;
  color: ${colors.primary};
  font-size: 24px;
  font-weight: 900;
  cursor: pointer;
`

export const ProductImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  margin-bottom: 16px;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 12px;
`

export const ProductDescription = styled.p`
  color: ${colors.darkText};
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 12px;
`

export const ProductPortion = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`

export const Price = styled.strong`
  font-size: 16px;
  margin-bottom: 16px;
`

export const AddButton = styled.button`
  background-color: ${colors.primary};
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 12px;
  width: 100%;
`
