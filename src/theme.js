import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

const primary = "#6b9684"
const secondary = "#966b7d"

const theme = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
    type: "dark",
  },
  typography: {
    h1: { fontFamily: "Montserrat", fontWeight: 600 },
    h2: { fontFamily: "Montserrat", fontWeight: 600 },
    h3: { fontFamily: "Montserrat", fontWeight: 600 },
    h4: { fontFamily: "Montserrat", fontWeight: 600 },
    h5: { fontFamily: "Montserrat", fontWeight: 600 },
    h6: { fontFamily: "Montserrat", fontWeight: 600 },
    subtitle1: { fontFamily: "Poppins" },
    subtitle2: { fontFamily: "Poppins" },
    body1: { fontFamily: "Poppins" },
    body2: { fontFamily: "Poppins" },
    button: { fontFamily: "Poppins" },
    overline: { fontFamily: "Poppins" },
    caption: { fontFamily: "Poppins" },
  },
  spacing: 12,
  shape: { borderRadius: 1 },
  overrides: {
    MuiAppBar: {
      colorTransparent: {
        boxShadow: "none",
      },
    },
  },
})

export default responsiveFontSizes(theme)
