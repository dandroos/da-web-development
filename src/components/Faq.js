import React from "react"
import { Typography, Link } from "@material-ui/core"
import { scroller } from "react-scroll"

const Faq = () => {
  return (
    <>
      <Typography variant="h4" paragraph>
        FAQ
      </Typography>
      <Question question="What does the maintenance fee cover?">
        This covers hosting and domain costs as well as ongoing support for
        updates and urgent enquiries. If you need new content/functionality such
        as a new page, that is not considered maintenance so we will agree a
        fair price separately for the work involved.
      </Question>
      <Question question="Is there a minimum subscription period?">
        Not at all. You can cancel at any time. Bear in mind that although you
        own the underlying code and assets of your website, it will no longer be
        accessible online.
      </Question>
      <Question question="How am I protected?">
        For our mutual protection, we both sign a contract detailing the terms
        of our agreement.
      </Question>
      <Question question="How long will it take to build my site?">
        This depends on how much work I have on at the time. However, I operate
        on a 'first come, first served' basis. For a typical standard site, it
        should take approximately 3-4 days to build. This can take longer
        depending on your specifications. I will advise you of a more accurate
        timeframe before commencing work and keep you updated along the way!
      </Question>
      <Question question="When is payment for the site due?">
        Before I begin work on your site, I kindly request a deposit of 40%
        (120€ for standard and 200€ for premium). Unless work cannot be
        completed because of a (highly unlikely) issue at my end, this is
        non-refundable. The remaining balance is due upon completion (and your
        satisfaction of course!). I accept payment in cash or by bank transfer.
      </Question>
      <Question question="My question is not answered here...">
        No problem!{" "}
        <strong>
          <Link
            color="inherit"
            style={{ cursor: "pointer" }}
            onClick={() =>
              scroller.scrollTo("contact", {
                smooth: true,
                offset: -48,
                hashSpy: true,
              })
            }
          >
            Contact me
          </Link>
        </strong>{" "}
        and I'll answer it for you!
      </Question>
    </>
  )
}

const Question = ({ question, children }) => (
  <>
    <Typography variant="h6">{question}</Typography>
    <Typography paragraph>{children}</Typography>
  </>
)

export default Faq
