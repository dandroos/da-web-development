import React from "react"
import { Fade } from "react-reveal"

const Reveal = ({ children, order = 0, left }) => {
  const delay = order * 500

  return (
    <Fade fraction={0.1} left={left} delay={delay}>
      {children}
    </Fade>
  )
}

export default Reveal
