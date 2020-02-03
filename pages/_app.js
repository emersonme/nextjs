import App from "next/app"
import React from "react"
import { ThemeProvider } from "styled-components"
import theme from "../themes/default"

const _app = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default _app
