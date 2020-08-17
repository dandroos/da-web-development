import React from "react"
import { Box, Container, Typography } from "@material-ui/core"
import Anchor from "./Anchor"

const Section = ({ children, id, title, color }) => {
  return (
    <Box
      id={id}
      minHeight="calc(100vh - 48px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={color}
      position="relative"
      py={3}
    >
      <Container>
        <Typography variant="h2">{title}</Typography>
        {children}
      </Container>
    </Box>
  )
}

export default Section
