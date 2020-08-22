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
  ListItemIcon,
} from "@material-ui/core"
import { Send, Phone, Email, WhatsApp } from "@material-ui/icons"
import Section from "../components/Section"

const Contact = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
        setFields({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
        //set message})
      })
      .catch(error => console.log(error))
  }
  const contactDetails = {
    phone: {
      display: "(+34) 658 858 572",
      data: "34658858572",
    },
    email: "enquiries@prospr.dev",
  }

  return (
    <Section id="contact" title="Contact" color="secondary" shade="dark">
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Contact Hours</Typography>
          <Typography variant="caption">(All times are GMT)</Typography>
          <Typography paragraph>
            Weekdays: 8am - 8pm
            <br />
            Saturday: 10am - 1pm
          </Typography>
          <Typography variant="h5">Out of hours</Typography>
          <Typography variant="" paragraph>
            For urgent enquiries you can phone me at any time. For non-urgent
            enquiries, please call during the above hours. Thank you.
          </Typography>
          <List>
            <ContactMethod
              Icon={Phone}
              primaryText="Phone"
              secondaryText={contactDetails.phone.display}
              link={`tel:+${contactDetails.phone.data}`}
            />
            <ContactMethod
              Icon={WhatsApp}
              primaryText="WhatsApp"
              secondaryText={contactDetails.phone.display}
              link={`https://wa.me/${contactDetails.phone.data}`}
            />
            <ContactMethod
              Icon={Email}
              primaryText="Email"
              secondaryText={contactDetails.email}
              link={`mailto:${contactDetails.email}`}
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
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <TextField
              variant="outlined"
              margin="dense"
              label="name"
              onChange={handleChange}
              value={fields.name}
              id="name"
              name="name"
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              type="email"
              margin="dense"
              label="email"
              onChange={handleChange}
              value={fields.email}
              id="email"
              name="email"
              required
              fullWidth
            />
            <TextField
              variant="outlined"
              margin="dense"
              label="phone"
              placeholder="optional"
              onChange={handleChange}
              value={fields.phone}
              id="phone"
              name="phone"
              fullWidth
            />
            <TextField
              multiline
              margin="dense"
              variant="outlined"
              label="message"
              onChange={handleChange}
              value={fields.message}
              id="message"
              name="message"
              required
              rows={4}
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
  )
}

const ContactMethod = ({
  Icon,
  primaryText,
  secondaryText,
  link,
  noDivider,
}) => (
  <ListItem
    button
    divider={!noDivider}
    onClick={() => window.open(link, "blank")}
  >
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={primaryText} secondary={secondaryText} />
  </ListItem>
)

export default Contact
