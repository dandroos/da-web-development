import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Tooltip,
  Typography,
  Grid,
  IconButton,
  Box,
  Divider,
} from "@material-ui/core"
import Section from "../components/Section"
import Img from "gatsby-image"
import externalLinks from "../externals"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "dave" }) {
        childImageSharp {
          fluid(quality: 65) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section
      id="about"
      title="About"
      color="primary"
      shade="main"
      elevation={2}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} md={3}>
          <Box
            p={1}
            bgcolor="common.white"
            style={{ boxShadow: "0 2rem 1rem inset" }}
          >
            <Img fluid={data.file.childImageSharp.fluid} />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="subtitle1" paragraph>
            Hello! My name is Dave and I set up{" "}
            <strong>prospr web development</strong> in 2020. I have been
            building websites and applications with code for years.
          </Typography>
          <Typography paragraph>
            I am a skilled web developer with a comprehensive knowledge of{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong> (including <strong>React</strong> and{" "}
            <strong>Gatsby</strong>) and <strong>NodeJS</strong>. I also have
            experience with using <strong>PHP</strong>,{" "}
            <strong>Wordpress</strong>, <strong>Python</strong>,{" "}
            <strong>Laravel</strong> and <strong>Django</strong> among other
            languages/technologies.
          </Typography>
          <Typography paragraph>
            I originally hail from England, but I have lived on the island of
            Fuerteventura in the Canary Islands for the last few years. Besides
            my work, I also enjoy mountain-biking, playing the piano and
            volunteering at my local dog rescue centre.
          </Typography>
          <Box my={2}>
            <Divider variant="middle" />
          </Box>
          <Box align="center">
            <Typography variant="h5">Elsewhere on the web</Typography>
            {externalLinks.map(i => (
              <Tooltip title={i.label.toLowerCase()}>
                <IconButton onClick={() => window.open(i.link, "_blank")}>
                  <i.icon />
                </IconButton>
              </Tooltip>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}

export default About
