import React from "react"
import { connect } from "react-redux"
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import { Info, Help } from "@material-ui/icons"
import { scroller } from "react-scroll"
import svg from "../images/hero.svg"
import cutout from "../images/hero-cutout.svg"
import { setDoINeedASite } from "../state/actions"
import Reveal from "../components/Reveal"

const Hero = ({ dispatch, showCutout }) => {
  const isMobile = useMediaQuery(`(max-width:420px), (max-height:415px)`)
  const hideOverlay = useMediaQuery(
    `(min-height: 812px) and (orientation: portrait) and (max-width: 1366px) and (max-aspect-ratio: 85/100), (min-width: 1360px) and (max-height: 970px) and (orientation: landscape)`
  )
  const isPortrait = useMediaQuery(`(orientation: portrait)`)
  const restrictTextWidth = useMediaQuery(
    `(min-width:700px) and (orientation: portrait)`
  )
  const theme = useTheme()
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
          backgroundImage: `${
            hideOverlay
              ? ""
              : `linear-gradient(${theme.palette.background.default}dd, ${theme.palette.background.default}dd),`
          }
        url('${svg}')
        `,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: `${isMobile ? "center" : "97.5%"} 17.5%`,
        }}
      >
        {showCutout ? (
          <Box
            position="absolute"
            top={0}
            right={0}
            bottom={0}
            left={0}
            style={{ background: `url(${cutout})`, backgroundSize: "cover" }}
          />
        ) : null}
        <Container maxWidth="xl">
          <Box
            mb={isMobile ? 2 : isPortrait ? 2 : 8}
            position="relative"
            borderRadius="borderRadius"
          >
            <Reveal order={1} left>
              <Typography variant="h2">"Do you have a website?"</Typography>
            </Reveal>
            <Reveal order={2} left>
              <Box maxWidth={restrictTextWidth ? "auto" : 700}>
                <Typography variant="subtitle1" paragraph>
                  Don't rely on social media alone to promote yourself. A
                  professional website gives you <strong>authenticity</strong>,{" "}
                  <strong>credibility</strong>,{" "}
                  <strong>complete control</strong> over your brand and{" "}
                  <strong>maximum client reach</strong>.
                </Typography>
              </Box>
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
                        scroller.scrollTo("about", {
                          smooth: true,
                          offset: -48,
                          hashSpy: true,
                        })
                      }
                    >
                      Who is Prospr?
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

const mapStateToProps = state => ({
  showCutout: state.showSvgCutout,
})

export default connect(mapStateToProps)(Hero)
