import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #E66767;
    --cream: #FFF8F2;
    --beige: #FFEBD9;
    --white: #FFFFFF;
    --dark-overlay: rgba(0, 0, 0, 0.8);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--cream);
    color: var(--red);
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button,
  a,
  input {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
  }

  @media (max-width: 1056px) {
    .container {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
`
