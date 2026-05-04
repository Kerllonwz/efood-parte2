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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='48' height='48' fill='%23F5C8B8'%3E%3Cpath d='M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 48px 48px;
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
