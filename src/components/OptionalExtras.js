import React from "react"
import {
  Box,
  Grid,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core"
import {
  Database,
  AccountKey,
  Chat,
  CommentTextMultiple,
  Cart,
  HomeEdit,
  Phone,
} from "mdi-material-ui"
import extrasSvg from "../images/extras.svg"
import { scroller } from "react-scroll"

const OptionalExtras = () => {
  return (
    <Box my={3}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={5}>
          <img src={extrasSvg} />
          <Box align="center" mt={2}>
            <Typography>
              Confused and/or unsure of what price plan and additional features
              you will need for your website? Don't worry...
            </Typography>
            <Box my={2}>
              <Button
                startIcon={<Phone />}
                onClick={() => {
                  scroller.scrollTo("contact", {
                    smooth: true,
                    offset: -48,
                    hashSpy: true,
                  })
                }}
                variant="contained"
                size="large"
              >
                Contact me
              </Button>
            </Box>
            <Typography>...and we can work it out together! :o)</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Card>
            <CardHeader title="Optional Extras" />
            <CardContent>
              <Typography>
                This is not an exhaustive list, but it includes some of the main
                additional features requested by site owners.
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HomeEdit />
                  </ListItemIcon>
                  <ListItemText
                    primary="CMS (Content Management System)"
                    secondary="A CMS gives you the ability to easily add/update your site content via an admin control panel"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <AccountKey />
                  </ListItemIcon>
                  <ListItemText
                    primary="Authentication"
                    secondary="Add authentication (Login/Register) functionality to provide password-restricted content and/or build a client community"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Cart />
                  </ListItemIcon>
                  <ListItemText
                    primary="E-commerce"
                    secondary="Accept credit/debit card payments on your site. I use either PayPal or Stripe for this, depending on your requirements."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Database />
                  </ListItemIcon>
                  <ListItemText
                    primary="Database"
                    secondary="If you want your visitors to be able to store data like user profiles, you will need a database"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Chat />
                  </ListItemIcon>
                  <ListItemText
                    primary="Live chat"
                    secondary="Never miss a lead! Allow your visitors to chat with you directly from your site"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CommentTextMultiple />
                  </ListItemIcon>
                  <ListItemText
                    primary="Comments"
                    secondary="To increase visitor interactions on your site, add the ability to leave comments"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default OptionalExtras
