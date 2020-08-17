import React from "react"
import { Box, Container, Typography } from "@material-ui/core"
import Anchor from "./Anchor"

const Section = ({ children, id, title, color, shade }) => {
  return (
    <Box
      id={id}
      minHeight="calc(100vh - 48px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor={`${color}.${shade}`}
      color={`${color}.contrastText`}
      position="relative"
      py={3}
    >
      <Container>
        <Typography variant="h2" paragraph>
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  )
}

export default Section
