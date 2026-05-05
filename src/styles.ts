import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E55A4E',
  primaryDark: '#C9483E',
  background: '#FFF8F2',
  white: '#FFFFFF',
  cream: '#FFEBD9',
  darkText: '#4B4B4B',
  cartDark: '#2F2F2F',
}

export const utensilsPattern =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cg transform='translate(12 10)' fill='%23E55A4E' fill-opacity='0.12'%3E%3Cpath d='M5 0h2v9h2V0h2v9h2V0h2v10.5c0 2.78-2.03 5.08-4.69 5.5V28H8.69V16C6.03 15.58 4 13.28 4 10.5V0h1zm17 0c3.31 0 6 2.69 6 6v11h-3.5v11H21V0h1z'/%3E%3C/g%3E%3C/svg%3E\")"

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
    max-width: 1366px;
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
