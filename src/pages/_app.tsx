import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from 'styles/global'
import { MenuProvider } from 'hooks/use-menu'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <MenuProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </MenuProvider>
    </ThemeProvider>
  )
}

export default App
