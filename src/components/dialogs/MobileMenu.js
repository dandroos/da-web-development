import React, { useState } from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import {
  Dialog,
  Box,
  List,
  ListItem,
  ListItemText,
  Fab,
  Typography,
  useTheme,
  IconButton,
  Tooltip,
  makeStyles,
} from "@material-ui/core"
import MobileNavLink from "../MobileNavLink"
import { Close, ExpandLess, ExpandMore } from "@material-ui/icons"

import { animateScroll, scroller } from "react-scroll"
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
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = useTheme()

  const handleClose = () => {
    dispatch(setMobileNav(false))
  }

  const handleClick = e => {
    const { id } = e.currentTarget
    switch (id) {
      case "facebook":
        window.open(`https://facebook.com`, "_blank")
        break
      case "instagram":
        window.open(`https://instagram.com`, "_blank")
        break
      case "github":
        window.open(`https://github.com`, "_blank")
      default:
        break
    }
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
        <Typography variant="h3" paragraph>
          {data.site.siteMetadata.title.toLowerCase()}
        </Typography>
        <List disablePadding>
          {navigation.map(i =>
            i.dropdown ? (
              <ListItem>
                {i.links.map(link => (
                  <Tooltip title={link.label}>
                    <IconButton
                      onClick={handleClick}
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
