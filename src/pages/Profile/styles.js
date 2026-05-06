import styled from 'styled-components'

export const Hero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${({ $image }) => $image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--white);
  height: 280px;
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 32px;
  padding-top: 24px;
`

export const Type = styled.span`
  color: var(--white);
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
`

export const RestaurantName = styled.h1`
  color: var(--white);
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
`

export const Menu = styled.main`
  background-color: var(--cream);
  padding: 40px 0 120px;
`

export const Description = styled.p`
  color: var(--red);
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 24px;
`

export const SectionTitle = styled.h2`
  color: var(--red);
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  margin-bottom: 24px;
`

export const ProductGrid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, 320px);

  @media (max-width: 1023px) {
    grid-template-columns: 320px;
    justify-content: center;
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
