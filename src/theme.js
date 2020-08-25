import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"
import { primary, secondary } from "./colors"

const theme = createMuiTheme({
  palette: {
    primary: { main: primary },
    secondary: { main: secondary },
  },
  typography: {
    fontFamily: "Overpass",
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  spacing: 12,
  shape: { borderRadius: 1 },
  overrides: {
    MuiAppBar: {
      colorTransparent: {
        boxShadow: "none",
      },
    },
    MuiListSubheader: {
      root: { textAlign: "center" },
    },
    MuiTableCell: {
      head: { fontWeight: 600 },
    },
  },
})

export default responsiveFontSizes(theme)
