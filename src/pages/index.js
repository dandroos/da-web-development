import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../sections/Hero"
import Pricing from "../sections/Pricing"
import About from "../sections/About"
import Contact from "../sections/Contact"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <About />
    <Pricing />
    <Contact />
  </Layout>
)

export default IndexPage
