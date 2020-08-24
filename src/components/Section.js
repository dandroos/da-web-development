import React from "react"
import { Box, Container, Typography } from "@material-ui/core"
import Reveal from "./Reveal"

const Section = ({ children, id, title, color, shade, elevation }) => {
  return (
    <Reveal>
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
        boxShadow={elevation}
      >
        <Container>
          <Reveal left order={0}>
            <Typography variant="h2" paragraph>
              {title}
            </Typography>
          </Reveal>
          <Reveal order={1}>{children}</Reveal>
        </Container>
      </Box>
    </Reveal>
  )
}

export default Section
