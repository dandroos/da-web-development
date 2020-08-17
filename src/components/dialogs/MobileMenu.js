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
} from "@material-ui/core"
import { Close, ExpandLess, ExpandMore } from "@material-ui/icons"

import { animateScroll, scroller } from "react-scroll"
import navigation from "../../navigation"
import { setMobileNav } from "../../state/actions"

const MobileMenu = ({ dispatch, isOpen }) => {
  const [expanded, setExpanded] = useState(false)
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
      case "about":
      case "pricing":
      case "contact":
        handleScroll(id)
        break
      case "home":
      case "logo":
        handleScroll()
        break
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

  const handleScroll = (id = null) => {
    if (id) {
      scroller.scrollTo(`${id}-section`, { smooth: true })
    } else {
      animateScroll.scrollToTop()
    }
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
              <ListItem button onClick={handleClick} id={i.label.toLowerCase()}>
                <ListItemText
                  primary={i.label.toLowerCase()}
                  primaryTypographyProps={{ align: "center" }}
                />
              </ListItem>
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
