import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <form
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
        method="post"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
      </form>
    </>
  )
}

export default Head
