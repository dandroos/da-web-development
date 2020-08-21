import React from "react"
import { connect } from "react-redux"
import {
  Dialog,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Divider,
  useTheme,
} from "@material-ui/core"
import { setDoINeedASite } from "../../state/actions"

const DoINeedASite = ({ dispatch, isOpen }) => {
  const theme = useTheme()

  const handleClose = () => {
    dispatch(setDoINeedASite(false))
  }
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{ style: { backgroundColor: theme.palette.primary.dark } }}
      maxWidth="md"
      fullWidth
    >
      <DialogContent>
        <Box align="center">
          <Typography variant="h4">
            "I already have a Facebook page, do I need a website?"
          </Typography>
          <Typography variant="subtitle1">
            The short answer is ‘yes’. Social media is a necessity for any
            business to help you build an audience and get to know who they are.
            That being said, it should not be a replacement for your company
            site. Your website should be the foundation of your online presence
            on which social media platforms build upon. Of course my opinion is
            biased, so I will give you some good reasons for my opinion...
          </Typography>
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        <Reason header="Understanding the relationship">
          Let social media support, not replace, your website. Ideally, you want
          clients to find you on social media and then be directed to your
          website where they can discover more about your services/products and
          why you are awesome! You have the final say on how your clients view
          your company on your website, which brings me onto the next point...
        </Reason>
        <Reason header="Control">
          Social media companies change their terms and conditions at the drop
          of a hat these days. If you’re not happy with a particular aspect of
          these changes, you only have one alternative open to you....leave.
          Your website is not at the mercy of a third party’s terms and
          conditions. You have complete control.
        </Reason>
        <Reason header="Credibility">
          Can you remember a time when you were interested in buying something
          or hiring a service from a company, but they didn’t have a website?
          How comfortable were you about it? Of course, a company can be
          credible without a site, but a lot of your potential clients won’t see
          it that way. They may see you as untrustworthy or simply not worthy of
          their business. Your website is a fantastic way to develop trust with
          your clients.
        </Reason>
        <Reason header="Marketing">
          Your website should be the core of your marketing campaign. The
          purpose of social media is to hook potential clients in and then bring
          them to your website where you convert them into actual clients! A
          website where you have total control of the content and branding
          (typography, colours and photography) is a much better environment to
          begin and maintain relationships with clients.
        </Reason>
        <Reason header="Competition">
          Your competitors most probably use social media too. You have to
          compete with their adverts. You also have to compete with the content
          of the friends of your potential clients. Your potential customer is
          bombarded with content and can easily be distracted from your
          delightful advertisement post. With a website, the distractions are
          eliminated. You have some work to do to bring them to it, but when
          that’s done, no longer will you be ignored!
        </Reason>
        <Reason header="Not everyone is on social media">
          There is a significant percentage of people who are not social media
          users. Don't slam the door in their face! Keep it open so that they
          too can become valued clients.
        </Reason>
        <Box my={2}>
          <Divider />
        </Box>
        <Typography align="center" variant="body2">
          Still not convinced? Google ‘do I need a website?’. You’ll find an
          overwhelming response to the question!
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary" variant="contained">
          Back to site
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const Reason = props => (
  <Box mb={2}>
    <Typography variant="h6">{props.header}</Typography>
    <Typography>{props.children}</Typography>
  </Box>
)

const mapStateToProps = state => ({
  isOpen: state.doINeedASite,
})

export default connect(mapStateToProps)(DoINeedASite)
