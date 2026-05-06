import styled from 'styled-components'

export const Main = styled.main`
  background-color: var(--cream);
`

export const RestaurantGrid = styled.div`
  display: grid;
  gap: 80px;
  grid-template-columns: repeat(2, 472px);
  padding: 80px 0 120px;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`

export const Feedback = styled.p`
  color: var(--red);
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
  padding: 80px 0 120px;
  text-align: center;
`
