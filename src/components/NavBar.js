import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  MenuItem,
  Hidden,
  ListItemIcon,
  Popper,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
  makeStyles,
} from "@material-ui/core"
import { Menu as MenuIcon, ArrowDropDown } from "@material-ui/icons"

import NavLink from "./NavLink"

import navigation from "../navigation"
import { setMobileNav } from "../state/actions"
import { animateScroll } from "react-scroll"

import Reveal from "./Reveal"

const useStyles = makeStyles({
  button: {
    "&.active": {
      fontWeight: "bold",
    },
  },
})

const NavBar = ({ dispatch }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = e => {
    const { id } = e.currentTarget
    switch (id) {
      case "logo":
        animateScroll.scrollToTop()
        break
      case "external":
        setAnchorEl(e.currentTarget)
        break
      case "mob-menu":
        dispatch(setMobileNav(true))
        break
      case "facebook":
        window.open(`https://facebook.com`, "_blank")
        break
      case "instagram":
        window.open(`https://instagram.com`, "_blank")
        break
      case "github":
        window.open(`https://github.com`, "_blank")
        break
      default:
        break
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [atTop, setAtTop] = useState(window.scrollY === 0)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setAtTop(window.scrollY === 0)
    })
  }, [])

  const data = useStaticQuery(graphql`
    {
      notAtTop: file(name: { eq: "logo" }) {
        childImageSharp {
          fixed(width: 125, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      atTop: file(name: { eq: "logo" }) {
        childImageSharp {
          fixed(height: 55, quality: 100) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
  `)

  return (
    <AppBar
      color={atTop ? "transparent" : "primary"}
      style={{ transition: "all .2s" }}
    >
      <Reveal order={0}>
        <Toolbar
          variant={atTop ? "regular" : "dense"}
          style={{ transition: "all .2s" }}
        >
          {atTop ? (
            <Img
              fixed={data.atTop.childImageSharp.fixed}
              style={{
                marginTop: "1.5rem",
              }}
            />
          ) : (
            <Box id="logo" onClick={handleClick}>
              <Img
                style={{ display: "block", cursor: "pointer" }}
                fixed={data.notAtTop.childImageSharp.fixed}
              />
            </Box>
          )}
          <Box flexGrow={1} />
          <Hidden mdUp>
            <IconButton edge="end" id="mob-menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden smDown>
            {navigation.map((i, ind) =>
              i.dropdown ? (
                <>
                  {ind === navigation.length - 1 ? (
                    <NavLink
                      id={i.label.toLowerCase()}
                      isEnd
                      onClick={handleClick}
                      endIcon={
                        <ArrowDropDown id={`${i.label.toLowerCase()}-arrow`} />
                      }
                    >
                      {i.label}
                    </NavLink>
                  ) : (
                    <NavLink
                      id={i.label.toLowerCase()}
                      onClick={handleClick}
                      endIcon={
                        <ArrowDropDown id={`${i.label.toLowerCase()}-arrow`} />
                      }
                    >
                      {i.label}
                    </NavLink>
                  )}
                  <Popper
                    open={Boolean(anchorEl)}
                    anchorEl={anchorEl}
                    transition
                    disablePortal
                    placement="bottom-end"
                  >
                    {({ TransitionProps }) => (
                      <Grow {...TransitionProps}>
                        <Paper variant="outlined">
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList disablePadding>
                              {i.links.map(link => (
                                <MenuItem
                                  dense
                                  id={link.label.toLowerCase()}
                                  onClick={handleClick}
                                >
                                  <ListItemIcon>
                                    <link.icon />
                                  </ListItemIcon>
                                  {link.label.toLowerCase()}
                                </MenuItem>
                              ))}
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </>
              ) : ind === navigation.length - 1 ? (
                <NavLink onClick={handleClick} isEnd={true} id={i.href}>
                  {i.label}
                </NavLink>
              ) : (
                <NavLink
                  activeClass="active"
                  to={i.href}
                  offset={-48}
                  smooth={true}
                  spy={true}
                  hashSpy={true}
                  className={classes.button}
                >
                  {i.label}
                </NavLink>
              )
            )}
          </Hidden>
        </Toolbar>
      </Reveal>
    </AppBar>
  )
}

export default connect()(NavBar)
