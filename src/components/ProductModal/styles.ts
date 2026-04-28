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
  background-color: ${colors.primary};
  max-width: 960px;
  width: 100%;
  display: flex;
  position: relative;
  color: ${colors.white};
  padding: 32px;
  gap: 24px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: -36px;
  right: 0;
  background: none;
  border: none;
  color: ${colors.white};
  font-size: 32px;
  cursor: pointer;
  line-height: 1;
  padding: 0;
`

export const ProductImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  flex-shrink: 0;
`

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  margin-bottom: 16px;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 1.75;
  flex: 1;
  margin-bottom: 16px;
`

export const ProductPortion = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`

export const AddButton = styled.button`
  background-color: ${colors.cream};
  color: ${colors.primary};
  font-size: 14px;
  font-weight: 700;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.white};
  }
`
