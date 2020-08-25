import React from "react"
import { Box, Typography, Link, Hidden } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Reveal from "../components/Reveal"

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(name: { eq: "logo_blue" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const getCopyrightYear = () => {
    const currentDate = new Date()
    if (currentDate.getFullYear() !== 2020) {
      return `2020-${currentDate.getFullYear()}`
    } else {
      return "2020"
    }
  }
  return (
    <Reveal>
      <Box my={3} align="center">
        <Img
          style={{ width: "30%", maxWidth: 200 }}
          fluid={data.logo.childImageSharp.fluid}
        />
        <Box mt={2}>
          <Typography variant="caption" display="block" paragraph>
            All content &copy; {getCopyrightYear()} prospr web development
          </Typography>
          <Typography variant="caption" display="block" paragraph>
            Illustrations courtesy of{" "}
            <Link href="https://www.freepik.com" target="_blank">
              Freepik
            </Link>
            .
          </Typography>
          <Typography display="block" variant="caption">
            Problems viewing the site? Please{" "}
            <Link href="mailto:maintenance@prospr.dev">Report it</Link>.
          </Typography>
        </Box>
        <Hidden smUp>
          <Box height={56} />
        </Hidden>
      </Box>
    </Reveal>
  )
}

export default Footer
