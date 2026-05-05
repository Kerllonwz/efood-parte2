import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#E66767',
  primaryDark: '#D85A5A',
  background: '#FFF8F2',
  white: '#FFFFFF',
  cream: '#FFEBD9',
  darkText: '#4B4B4B',
  cartDark: '#2F2F2F',
}

export const utensilsPattern =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg transform='translate(10 8)' fill='%23E66767' fill-opacity='0.08'%3E%3Cpath d='M4 0h1.6v8h1.6V0h1.6v8h1.6V0H12v9.4c0 2.1-1.42 3.86-3.4 4.4V24H7.4V13.8C5.42 13.26 4 11.5 4 9.4V0zm15 0c2.76 0 5 2.24 5 5v10h-3v9h-2V0z'/%3E%3C/g%3E%3C/svg%3E\")"

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
