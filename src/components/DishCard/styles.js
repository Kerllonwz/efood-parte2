import styled from 'styled-components'

export const Card = styled.article`
  background-color: var(--red);
  color: var(--beige);
  padding: 8px;
  width: 320px;
`

export const Image = styled.img`
  height: 167px;
  object-fit: cover;
  width: 304px;
`

export const Title = styled.h2`
  color: var(--beige);
  font-size: 16px;
  font-weight: 900;
  line-height: 19px;
  margin-top: 8px;
`

export const Description = styled.p`
  color: var(--beige);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 8px;
  min-height: 88px;
`

export const Portion = styled.p`
  color: var(--beige);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-top: 8px;
`

export const Price = styled.p`
  color: var(--beige);
  font-size: 12px;
  font-weight: 900;
  line-height: 16px;
  margin: 4px 0 8px;
`

export const AddButton = styled.button`
  background-color: var(--beige);
  border: 0;
  color: var(--red);
  font-size: 14px;
  font-weight: 900;
  height: 24px;
  line-height: 16px;
  width: 304px;
`
