import React, { useEffect } from "react"
import { connect } from "react-redux"
import FontFaceObserver from "fontfaceobserver"
import Head from "./Head"
import NavBar from "./NavBar"
import Dialogs from "./Dialogs"
import Footer from "../sections/Footer"
import BottomNav from "./BottomNav"
import { setSiteIsReady } from "../state/actions"
import bgImg from "../images/hero.svg"

const Layout = ({ children, dispatch, siteIsReady }) => {
  useEffect(() => {
    const headerFont = new FontFaceObserver("Montserrat")
    const bodyFont = new FontFaceObserver("Poppins")

    Promise.all([headerFont.load(), bodyFont.load()]).then(() => {
      const svg = new Image()
      svg.src = bgImg
      svg.onload = () => {
        dispatch(setSiteIsReady(true))
      }
    })
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Head />
      <NavBar />
      <Dialogs />
      {children}
      <Footer />
      <BottomNav />
    </>
  )
}

const mapStateToProps = state => ({
  siteIsReady: state.siteIsReady,
})

export default connect(mapStateToProps)(Layout)
