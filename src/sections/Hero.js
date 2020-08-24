import React from "react"
import { connect } from "react-redux"
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useMediaQuery,
} from "@material-ui/core"
import { Info, Help } from "@material-ui/icons"
import { scroller } from "react-scroll"
import svg from "../images/hero.svg"
import { setDoINeedASite } from "../state/actions"
import Reveal from "../components/Reveal"

const Hero = ({ dispatch }) => {
  const isMobile = useMediaQuery(`(max-width:420px)`)
  return (
    <Reveal order={0}>
      <Box
        id="home"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        position="relative"
        style={{
          backgroundImage: `url('${svg}')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center 17.5%",
        }}
      >
        <Box
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          bgcolor="secondary.dark"
          style={{ opacity: 0.7 }}
        />
        <Container>
          <Box
            mb={isMobile ? 2 : 8}
            position="relative"
            borderRadius="borderRadius"
          >
            <Reveal order={1} left>
              <Typography variant="h2">
                Maximize your online potential!
              </Typography>
            </Reveal>
            <Reveal order={2} left>
              <Typography variant="subtitle1" paragraph>
                Don't rely on social media alone to promote yourself. A
                professional website gives you <strong>authenticity</strong>,{" "}
                <strong>credibility</strong>, <strong>complete control</strong>{" "}
                over your brand and <strong>maximum client reach</strong>.
              </Typography>
            </Reveal>
            <Reveal order={3} left>
              <Box mt={2} align="inherit">
                <Grid container spacing={1} justify="flex-start">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<Info />}
                      onClick={() =>
                        scroller.scrollTo("pricing", {
                          smooth: true,
                          offset: -48,
                          hashSpy: true,
                        })
                      }
                    >
                      View pricing plans
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      startIcon={<Help />}
                      onClick={() => dispatch(setDoINeedASite(true))}
                    >
                      Do I need a website?
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Reveal>
          </Box>
        </Container>
      </Box>
    </Reveal>
  )
}

export default connect()(Hero)
