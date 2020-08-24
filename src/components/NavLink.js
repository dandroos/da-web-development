import React from "react"
import { Button } from "@material-ui/core"
import { ScrollLink } from "react-scroll"

const NavLink = props => {
  const { children, endIcon } = props
  return (
    <Button
      {...props}
      endIcon={endIcon ? endIcon : null}
      style={{ marginRight: 20 }}
    >
      {children}
    </Button>
  )
}
export default ScrollLink(NavLink)
