import React from "react"
import { ListItem, ListItemText } from "@material-ui/core"
import { ScrollLink } from "react-scroll"

const MobileNavLink = props => {
  const { label } = props
  return (
    <ListItem {...props} button id={label.toLowerCase()}>
      <ListItemText
        primary={label.toUpperCase()}
        primaryTypographyProps={{
          color: "inherit",
          style: { textAlign: "center", fontWeight: "inherit" },
        }}
      />
    </ListItem>
  )
}

export default ScrollLink(MobileNavLink)
