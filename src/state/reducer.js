import { SET_MOBILE_NAV } from "./types"

const initialState = {
  mobileNav: false,
}

export default (state = initialState, { type, payload }) => {
  const newState = Object.assign({}, state)
  switch (type) {
    case SET_MOBILE_NAV:
      newState.mobileNav = payload
      break
    default:
      break
  }

  return newState
}
