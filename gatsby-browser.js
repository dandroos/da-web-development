import React from "react"
import { Provider } from "react-redux"
import store from "./src/store"
import { ThemeProvider, CssBaseline } from "@material-ui/core"
import theme from "./src/theme"
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </Provider>
  )
}
