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
      logo: file(name: { eq: "logo" }) {
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
        style={{ position: "fixed", top: 15, right: 15 }}
      >
        <Close />
      </Fab>
      <Box
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Img
          style={{ maxWidth: 350, width: "60%", marginBottom: "1rem" }}
          fluid={data.logo.childImageSharp.fluid}
        />
        <List disablePadding>
          {navigation.map((i, indA) =>
            i.dropdown ? (
              <ListItem key={indA}>
                {i.links.map((link, indB) => (
                  <Tooltip title={link.label} key={indB}>
                    <IconButton
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
