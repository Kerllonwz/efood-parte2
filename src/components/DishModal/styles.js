import styled from 'styled-components'

export const Overlay = styled.div`
  align-items: center;
  background-color: var(--dark-overlay);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 24px;
  position: fixed;
  z-index: 10;
`

export const ModalBox = styled.div`
  background-color: var(--red);
  color: var(--beige);
  display: grid;
  gap: 24px;
  grid-template-columns: 280px 1fr;
  max-width: 1024px;
  min-height: 344px;
  padding: 32px;
  position: relative;
  width: 100%;
`

export const CloseButton = styled.button`
  background: transparent;
  border: 0;
  color: var(--beige);
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Image = styled.img`
  height: 280px;
  object-fit: cover;
  width: 280px;
`

export const Content = styled.div`
  color: var(--beige);
`

export const Title = styled.h2`
  color: var(--beige);
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
`

export const Description = styled.p`
  color: var(--beige);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 16px;
`

export const Portion = styled.p`
  color: var(--beige);
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
`

export const AddButton = styled.button`
  background-color: var(--beige);
  border: 0;
  color: var(--red);
  display: inline-block;
  font-size: 14px;
  font-weight: 900;
  line-height: 16px;
  margin-top: 16px;
  padding: 4px 8px;
`
