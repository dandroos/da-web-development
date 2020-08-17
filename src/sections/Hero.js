import React from "react"
import { Box, Typography, Button, Container, Grid } from "@material-ui/core"
import { Info } from "@material-ui/icons"
import svg from "../images/hero.svg"

const Hero = () => {
  return (
    <Box
      id="home"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      position="relative"
      style={{
        backgroundImage: `url('${svg}')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >
      <Box
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        bgcolor="secondary.dark"
        style={{ opacity: 0.8 }}
      />
      <Container>
        <Box mb={8} position="relative" borderRadius="borderRadius">
          <Typography variant="h2">Maximize your online potential!</Typography>
          <Typography variant="subtitle1" paragraph>
            Don't rely on social media alone to promote your services. A
            professional website gives you authenticity, credibility, complete
            control over your brand and maximum client reach.
          </Typography>
          <Box mt={2} align="inherit">
            <Grid container spacing={1} justify="flex-start">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<Info />}
                >
                  More info
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Hero
