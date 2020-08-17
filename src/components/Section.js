import React from "react"
import { Box } from "@material-ui/core"
import Anchor from "./Anchor"

const Section = ({ children, id, color }) => {
  return (
    <Box id={id} minHeight="100vh" bgcolor={color} position="relative">
      {children}
    </Box>
  )
}

export default Section
