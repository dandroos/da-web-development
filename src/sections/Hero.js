import React from "react"
import { Box, Typography, Button, Container, Grid } from "@material-ui/core"
import { Info } from "@material-ui/icons"

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
        backgroundImage:
          "url('https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=968&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1901')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        bgcolor="common.black"
        style={{ opacity: 0.6 }}
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
