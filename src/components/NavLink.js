import React from "react"
import { Button } from "@material-ui/core"
import { ScrollLink } from "react-scroll"

const NavLink = props => {
  const { children, isEnd, endIcon } = props
  return (
    <Button
      {...props}
      endIcon={endIcon ? endIcon : null}
      style={{ marginRight: isEnd ? 0 : 20 }}
    >
      {children}
    </Button>
  )
}
export default ScrollLink(NavLink)
