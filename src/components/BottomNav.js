import React, { useEffect, useState } from "react"
import {
  BottomNavigation,
  BottomNavigationAction,
  Hidden,
} from "@material-ui/core"
import { Call, WhatsApp, Email } from "@material-ui/icons"

const BottomNav = () => {
  const [atTop, setAtTop] = useState(true)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setAtTop(window.scrollY === 0)
    })
  })

  const handleClick = e => {
    switch (e.currentTarget.id) {
      case "phone-mob-nav":
        window.open("tel:+34658858572", "_blank")
        break
      case "whatsapp-mob-nav":
        window.open("https://wa.me/34658858572", "_blank")
        break
      case "email-mob-nav":
        window.open("mailto:enquiries@prospr.dev", "_blank")
        break
      default:
        break
    }
  }

  return (
    <Hidden smUp>
      <BottomNavigation
        showLabels
        style={{
          transition: "all .25s",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: atTop ? "100%" : 0,
          overflow: "hidden",
        }}
      >
        <BottomNavigationAction
          id="phone-mob-nav"
          label="Phone"
          icon={<Call />}
          onClick={handleClick}
        />
        <BottomNavigationAction
          id="whatsapp-mob-nav"
          label="WhatsApp"
          icon={<WhatsApp />}
          onClick={handleClick}
        />
        <BottomNavigationAction
          id="email-mob-nav"
          label="Email"
          icon={<Email />}
          onClick={handleClick}
        />
      </BottomNavigation>
    </Hidden>
  )
}

export default BottomNav
