import {
  SET_MOBILE_NAV,
  SET_DO_I_NEED_A_SITE,
  SET_SITE_IS_READY,
} from "./types"

export const setSiteIsReady = payload => ({
  type: SET_SITE_IS_READY,
  payload,
})

export const setMobileNav = payload => ({
  type: SET_MOBILE_NAV,
  payload,
})

export const setDoINeedASite = payload => ({
  type: SET_DO_I_NEED_A_SITE,
  payload,
})
