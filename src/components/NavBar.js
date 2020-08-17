import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  MenuItem,
  Hidden,
  ListItemIcon,
  Popper,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
} from "@material-ui/core"
import { Menu as MenuIcon, ArrowDropDown } from "@material-ui/icons"

import { animateScroll, scroller, Link } from "react-scroll"
import NavLink from "./NavLink"

import navigation from "../navigation"
import { setMobileNav } from "../state/actions"

const NavBar = ({ dispatch }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = e => {
    const { id } = e.currentTarget
    switch (id) {
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

  const handleScroll = (id = null) => {
    if (id) {
      scroller.scrollTo(`${id}-section`, {
        activeClass: "Mui-selected",
        spy: true,
        smooth: true,
      })
    } else {
      animateScroll.scrollToTop()
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
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <AppBar
      color={atTop ? "transparent" : "primary"}
      style={{ transition: "all .2s" }}
    >
      <Toolbar
        variant={atTop ? "regular" : "dense"}
        style={{ transition: "all .2s" }}
      >
        <Typography
          variant="h6"
          id="logo"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        >
          {data.site.siteMetadata.title.toLowerCase()}
        </Typography>
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
                  {({ TransitionProps, placement }) => (
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
                activeClass="MASSIVECOCK"
                to={`${i.href}-section`}
                smooth={true}
                spy={true}
                id={i.href}
              >
                {i.label}
              </NavLink>
            )
          )}
        </Hidden>
      </Toolbar>
    </AppBar>
  )
}

export default connect()(NavBar)
