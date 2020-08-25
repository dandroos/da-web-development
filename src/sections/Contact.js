import React, { useState } from "react"
import {
  Box,
  Grid,
  TextField,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Snackbar,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core"
import { Alert } from "@material-ui/lab"
import { Send, Phone, Email, WhatsApp } from "@material-ui/icons"
import Section from "../components/Section"

const Contact = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [toast, setToast] = useState({
    open: false,
    msg: "",
    severity: "success",
  })

  const handleChange = e => {
    setFields({
      ...fields,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const encode = data => {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&")
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...fields,
      }),
    })
      .then(() => {
        setToast({
          open: true,
          msg: "Thank you. Your message was sent successfully.",
          severity: "success",
        })
        setFields({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        //set message})
      })
      .catch(() =>
        setToast({
          open: true,
          msg:
            "Sorry. There was a problem sending your message. Please try again in a few moments or use an alternative contact method.",
          severity: "error",
        })
      )
  }
  const contactDetails = {
    phone: {
      display: "(+34) 658 858 572",
      data: "34658858572",
    },
    email: "enquiries@prospr.dev",
  }

  return (
    <>
      <Section id="contact" title="Contact" color="secondary" shade="light">
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">Contact hours</Typography>
            <Typography variant="caption">(All times are GMT)</Typography>
            <Typography paragraph>
              Weekdays: 8am - 8pm
              <br />
              Saturday: 10am - 1pm
            </Typography>
            <Typography variant="h5">Out of hours</Typography>
            <Typography paragraph>
              For urgent enquiries you can phone me at any time. For non-urgent
              enquiries, please call during the above hours. Thank you.
            </Typography>
            <List>
              <ContactMethod
                Icon={Phone}
                primaryText="Phone"
                secondaryText={contactDetails.phone.display}
                link={`tel:+${contactDetails.phone.data}`}
                action="Call us"
              />
              <ContactMethod
                Icon={WhatsApp}
                primaryText="WhatsApp"
                secondaryText={contactDetails.phone.display}
                link={`https://wa.me/${contactDetails.phone.data}`}
                action="Call/Message us"
              />
              <ContactMethod
                Icon={Email}
                primaryText="Email"
                secondaryText={contactDetails.email}
                link={`mailto:${contactDetails.email}`}
                action="Email us"
                noDivider
              />
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              You can send me a message using the below form...
            </Typography>
            <form
              name="contact"
              action="#"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <TextField
                color="secondary"
                InputProps={{ style: { color: "white" } }}
                margin="dense"
                label="Name"
                onChange={handleChange}
                value={fields.name}
                id="name"
                name="name"
                required
                fullWidth
              />
              <TextField
                InputProps={{ style: { color: "white" } }}
                type="email"
                margin="dense"
                label="Email"
                onChange={handleChange}
                value={fields.email}
                id="email"
                name="email"
                required
                fullWidth
              />
              <TextField
                InputProps={{ style: { color: "white" } }}
                margin="dense"
                label="Phone"
                placeholder="optional"
                onChange={handleChange}
                value={fields.phone}
                id="phone"
                name="phone"
                fullWidth
              />
              <TextField
                InputProps={{ style: { color: "white" } }}
                multiline
                margin="dense"
                label="Message"
                onChange={handleChange}
                value={fields.message}
                id="message"
                name="message"
                required
                fullWidth
              />
              <Box align="right">
                <Button
                  startIcon={<Send />}
                  type="submit"
                  color="primary"
                  variant="contained"
                  size="large"
                >
                  send
                </Button>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Section>
      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={() => setToast({ open: false, msg: "", severity: "success" })}
      >
        <Alert variant="filled" severity={toast.severity}>
          {toast.msg}
        </Alert>
      </Snackbar>
    </>
  )
}

const ContactMethod = ({
  Icon,
  primaryText,
  secondaryText,
  link,
  noDivider,
}) => {
  const handleClick = () => {
    window.open(link, "_blank")
  }
  return (
    <ListItem button divider={!noDivider} onClick={handleClick}>
      <ListItemText
        primary={primaryText}
        secondary={secondaryText}
        secondaryTypographyProps={{ color: "grey.200" }}
      />
      <ListItemSecondaryAction>
        <IconButton color="inherit" onClick={handleClick}>
          <Icon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default Contact
