import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  primaryDark: '#C44545',
  background: '#FFF8F2',
  white: '#FFFFFF',
  cream: '#FFEBD9',
  darkText: '#4B4B4B',
  lightText: '#FFEBD9',
  shadow: 'rgba(230, 103, 103, 0.15)',
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.darkText};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 0 16px;
  }

  button {
    font-family: 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }
`
