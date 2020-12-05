import {
  SET_MOBILE_NAV,
  SET_DO_I_NEED_A_SITE,
  SET_SHOW_SVG_CUTOUT,
  SET_SITE_IS_READY,
} from "./types"

const initialState = {
  siteIsReady: false,
  mobileNav: false,
  doINeedASite: false,
  showSvgCutout: false,
}

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)
  switch (type) {
    case SET_SITE_IS_READY:
      newState.siteIsReady = payload
      break
    case SET_SHOW_SVG_CUTOUT:
      newState.showSvgCutout = payload
      break
    case SET_MOBILE_NAV:
      newState.mobileNav = payload
      break
    case SET_DO_I_NEED_A_SITE:
      newState.doINeedASite = payload
      break
    default:
      break
  }

  return newState
}
