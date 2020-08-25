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
  const loadAssets = () => {
    const font = new FontFaceObserver("Overpass")

    font.load().then(() => {
      const svg = new Image()
      svg.src = bgImg
      svg.onload = () => {
        dispatch(setSiteIsReady(true))
      }
    }, loadAssets)
  }

  useEffect(() => {
    loadAssets()
    //eslint-disable-next-line
  }, [])

  return (
    <>
      <Head />
      {siteIsReady ? (
        <>
          <NavBar />
          <Dialogs />
          {children}
          <Footer />
          <BottomNav />
        </>
      ) : null}
    </>
  )
}

const mapStateToProps = state => ({
  siteIsReady: state.siteIsReady,
})

export default connect(mapStateToProps)(Layout)
