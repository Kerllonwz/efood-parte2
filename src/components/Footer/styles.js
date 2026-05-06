import styled from 'styled-components'

export const FooterBar = styled.footer`
  align-items: center;
  background-color: var(--beige);
  display: flex;
  flex-direction: column;
  padding: 40px 0;
`

export const Logo = styled.img`
  height: 58px;
  width: 125px;
`

export const SocialList = styled.ul`
  display: flex;
  gap: 8px;
  list-style: none;
  margin-top: 32px;
`

export const SocialIcon = styled.img`
  height: 24px;
  width: 24px;
`

export const LegalText = styled.p`
  color: var(--red);
  font-size: 10px;
  line-height: 12px;
  margin-top: 80px;
  max-width: 480px;
  text-align: center;
`
