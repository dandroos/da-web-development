/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Head from "./Head"
import NavBar from "./NavBar"
import Dialogs from "./Dialogs"

const Layout = ({ children }) => {
  return (
    <>
      <Head />
      <NavBar />
      <Dialogs />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
