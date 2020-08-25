import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  Dialog,
  Box,
  List,
  ListItem,
  Fab,
  useTheme,
  IconButton,
  Tooltip,
  makeStyles,
} from "@material-ui/core"
import MobileNavLink from "../MobileNavLink"
import { Close } from "@material-ui/icons"

import navigation from "../../navigation"
import { setMobileNav } from "../../state/actions"

const useStyles = makeStyles({
  button: {
    "&.active": {
      fontWeight: "bold",
    },
  },
})

const MobileMenu = ({ dispatch, isOpen }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    {
      logo: file(name: { eq: "logo_mobmenu" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  const theme = useTheme()

  const handleClose = () => {
    dispatch(setMobileNav(false))
  }

  return (
    <Dialog
      fullScreen
      PaperProps={{ style: { background: theme.palette.primary.main } }}
      open={isOpen}
      onClose={handleClose}
    >
      <Fab
        onClick={handleClose}
        color="secondary"
        style={{ position: "fixed", top: 15, right: 15, zIndex: 50 }}
      >
        <Close />
      </Fab>
      <Box
        position="fixed"
        display="flex"
        alignItems="center"
        justifyItems="center"
        top={0}
        right={0}
        bottom={0}
        left={0}
      >
        <Img
          style={{
            opacity: 0.1,
            maxWidth: 350,
            width: "60%",
            margin: "auto",
          }}
          fluid={data.logo.childImageSharp.fluid}
        />
      </Box>
      <Box
        minHeight="100vh"
        display="flex"
        color={theme.palette.primary.contrastText}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <List disablePadding>
          {navigation.map((i, indA) =>
            i.dropdown ? (
              <ListItem key={indA}>
                {i.links.map((link, indB) => (
                  <Tooltip title={link.label} key={indB}>
                    <IconButton
                      color="inherit"
                      onClick={() => {
                        window.open(link.href, "_blank")
                        dispatch(setMobileNav(false))
                      }}
                      id={link.label.toLowerCase()}
                    >
                      <link.icon />
                    </IconButton>
                  </Tooltip>
                ))}
              </ListItem>
            ) : (
              <MobileNavLink
                activeClass="active"
                to={i.href}
                key={indA}
                offset={i.label === "Home" ? 0 : -48}
                smooth={true}
                spy={true}
                hashSpy={true}
                className={classes.button}
                label={i.label}
                onClick={handleClose}
              />
            )
          )}
        </List>
      </Box>
    </Dialog>
  )
}

const mapStateToProps = state => ({
  isOpen: state.mobileNav,
})

export default connect(mapStateToProps)(MobileMenu)
