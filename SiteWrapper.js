import React from "react"
import { Provider } from "react-redux"
import store from "./src/store"
import { ThemeProvider, CssBaseline } from "@material-ui/core"
import theme from "./src/theme"

export default ({ element }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {element}
      </ThemeProvider>
    </Provider>
  )
}
