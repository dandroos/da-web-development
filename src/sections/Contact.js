import React from "react"
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
  const handleChange = e => {}

  return (
    <Section id="contact" title="Contact" color="secondary.dark">
      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5">Hours</Typography>
          <Typography variant="caption">(All times are GMT)</Typography>
          <Typography paragraph>
            Weekdays: 8am - 6pm
            <br />
            Saturday: 8am - 1pm
          </Typography>
          <Typography variant="h5">Out of hours</Typography>
          <Typography variant="" paragraph>
            For urgent enquiries you can phone me at any time. For non-urgent
            enquiries, please call during my working hours. Thank you.
          </Typography>
          <List>
            <ContactMethod
              Icon={Phone}
              primaryText="Phone"
              secondaryText="123 456 789"
            />
            <ContactMethod
              Icon={WhatsApp}
              primaryText="WhatsApp"
              secondaryText="123 456 789"
            />
            <ContactMethod
              Icon={Email}
              primaryText="Email"
              secondaryText="david@dawebdev.com"
              noDivider
            />
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography>
            You can send me a message using the below form...
          </Typography>
          <TextField
            variant="outlined"
            margin="dense"
            label="name"
            onChange={handleChange}
            id="name"
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            label="email"
            onChange={handleChange}
            id="email"
            fullWidth
          />
          <TextField
            variant="outlined"
            margin="dense"
            label="phone"
            placeholder="optional"
            onChange={handleChange}
            id="email"
            fullWidth
          />
          <TextField
            multiline
            margin="dense"
            variant="outlined"
            label="message"
            onChange={handleChange}
            id="message"
            rows={4}
            fullWidth
          />
          <Box align="right">
            <Button
              startIcon={<Send />}
              color="primary"
              variant="contained"
              size="large"
            >
              send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Section>
  )
}

const ContactMethod = ({ Icon, primaryText, secondaryText, noDivider }) => (
  <ListItem button divider={!noDivider}>
    <ListItemIcon>
      <Icon />
    </ListItemIcon>
    <ListItemText primary={primaryText} secondary={secondaryText} />
  </ListItem>
)

export default Contact
