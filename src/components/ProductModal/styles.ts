import styled from 'styled-components'
import { colors } from '../../styles'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 16px;
`

export const Modal = styled.div`
  background-color: ${colors.primary};
  color: ${colors.cream};
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  max-width: 660px;
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
  color: ${colors.cream};
  font-size: 18px;
  font-weight: 900;
  cursor: pointer;
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  display: block;
  margin-bottom: 0;
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
  color: ${colors.cream};
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
  background-color: ${colors.cream};
  border: none;
  color: ${colors.primary};
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 6px 10px;
  width: fit-content;
`
