import React from "react"
import { Box } from "@material-ui/core"
import Anchor from "./Anchor"

const Section = ({ children, id, color }) => {
  return (
    <Box minHeight="100vh" bgcolor={color} position="relative">
      <Anchor id={id} />
      {children}
    </Box>
  )
}

export default Section
