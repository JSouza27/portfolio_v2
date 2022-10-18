import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
      font-size: 62.5%;
    }

  body {
    background-color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.sizes.medium};
    font-weight: ${theme.font.light};
  }

  //------------SCROOLL------------//
  ::-webkit-scrollbar {
      width: 0.8rem;
      height: 0.8rem;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.colors.lightGray};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.darkBlue};
    border-radius: 1rem;
  }

`

export default GlobalStyles
