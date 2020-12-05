import React, { useEffect } from "react"
import { useMediaQuery, useTheme } from "@material-ui/core"
import { connect } from "react-redux"
import FontFaceObserver from "fontfaceobserver"
import Head from "./Head"
import NavBar from "./NavBar"
import Dialogs from "./Dialogs"
import Footer from "../sections/Footer"
import BottomNav from "./BottomNav"
import { setSiteIsReady, setShowSvgCutout } from "../state/actions"
import bgImg from "../images/hero.svg"

const Layout = ({ children, dispatch, siteIsReady }) => {
  const theme = useTheme()

  const hideCutout = useMediaQuery(
    theme.breakpoints.down("md"),
    `(min-device-width : 1366px) and (max-device-width : 1366px) and (min-device-height : 1024px) and (max-device-height : 1024px) and (min-width: 1366px) and (max-width: 1366px)`
  )

  useEffect(() => {
    console.log(!hideCutout)
    dispatch(setShowSvgCutout(!hideCutout))
    //eslint-disable-next-line
  }, [hideCutout])

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
