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
        This covers ongoing priority support for updates and urgent enquiries.
        If you need new content/functionality such as a new page, that is not
        considered maintenance so we will agree a fair price separately for the
        work involved.
      </Question>
      <Question question="Do I have to pay the maintenance subscription?">
        No, but I charge 20€ per hour (a minimum charge of 20€ will be
        applicable for each request) and I promise priority to those who pay the
        subscription. It is your decision as to whether you think you will need
        more than 5 hours of maintenance to your website per year and/or if you
        will need the priority support.
      </Question>
      <Question question="Is there a minimum subscription period for either the maintenance or hosting?">
        Not at all. You can cancel at any time. Bear in mind that although you
        own the underlying code and assets of your website, your site will no
        longer be accessible online if you cancel the hosting subscription.
      </Question>
      <Question question="How am I protected?">
        For our mutual protection, we both sign a contract with plain wording
        detailing the terms of our agreement.
      </Question>
      <Question question="How long will it take to build my site?">
        This depends on how busy I am at the time. However, I operate on a
        'first come, first served' basis. For a typical portfolio site, it
        should take approximately a week to build. This can take longer
        depending on your specifications (additional features). I will advise
        you of a more accurate timeframe before commencing work and keep you
        updated along the way!
      </Question>
      <Question question="When is payment for the site due?">
        Before I begin work on your site, I kindly request a deposit of 40% of
        the total price. Unless work cannot be completed because of a (highly
        unlikely) issue at my end, this is non-refundable. You (and I!) will of
        course be protected by the contract we sign. The remaining balance is
        due upon completion (and your satisfaction of course!). I accept payment
        in cash or by bank transfer.
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
