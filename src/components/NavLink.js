import React from "react"
import { Button } from "@material-ui/core"
import { ScrollLink } from "react-scroll"

const NavLink = props => {
  const { children, isEnd, endIcon, id } = props
  console.log(props)
  return (
    <Button
      {...props}
      endIcon={endIcon ? endIcon : null}
      style={{ textTransform: "lowercase", marginRight: isEnd ? 0 : 20 }}
    >
      {children}
    </Button>
  )
}
export default ScrollLink(NavLink)
