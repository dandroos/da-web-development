import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Typography,
  Grid,
  Avatar,
  IconButton,
  Box,
  Divider,
} from "@material-ui/core"
import { Facebook, Instagram, GitHub } from "@material-ui/icons"
import Section from "../components/Section"
import Img from "gatsby-image"
import dave from "../images/dave.jpg"

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
    <Section id="about" title="About" color="primary" shade="light">
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} md={3}>
          <Box p={1} bgcolor="common.white">
            <Img fluid={data.file.childImageSharp.fluid} />
          </Box>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="subtitle1" paragraph>
            Hello! My name is Dave and I have been building digital solutions
            with code for the last 5 years.
          </Typography>
          <Typography paragraph>
            I am a skilled web developer with a comprehensive knowledge of{" "}
            <strong>HTML</strong>, <strong>CSS</strong>,{" "}
            <strong>JavaScript</strong> (including <strong>React</strong> and{" "}
            <strong>Gatsby</strong>) and <strong>NodeJS</strong>.
          </Typography>
          <Typography paragraph>
            I originally hail from England, but have lived in Fuerteventura for
            the last few years. Besides my work, I also enjoy mountain-biking,
            playing the piano and volunteering at my local dog rescue centre.
          </Typography>
          <Box my={3}>
            <Divider />
          </Box>
          <Box align="center">
            <Typography variant="h5">Elsewhere on the web</Typography>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <GitHub />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}

export default About
