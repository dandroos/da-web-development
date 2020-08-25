import React from "react"
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardContent,
  ListItemIcon,
  Button,
  Typography,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  useTheme,
} from "@material-ui/core"
import {
  Devices,
  Speed,
  BrandingWatermark,
  Web,
  Translate,
  Lock,
  Storage,
  Add,
  Create,
  WebAsset,
  Call,
} from "@material-ui/icons"
import Section from "../components/Section"
import HostingAndMaintenance from "../components/HostingAndMaintenance"
import Faq from "../components/Faq"
import { scroller } from "react-scroll"
import svg from "../images/pricing.svg"

const handleClick = () => {
  scroller.scrollTo("contact", { smooth: true, offset: -48, hashSpy: true })
}

const Pricing = () => {
  return (
    <Section
      id="pricing"
      title="Pricing"
      color="primary"
      shade="main"
      elevation={1}
    >
      <Box align="center">
        <img style={{ maxWidth: 550 }} src={svg} />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Tier
            title="Standard"
            btnColor="secondary"
            price={300}
            normalPrice={400}
          >
            <Typography align="center">
              Ideal for <strong>small businesses</strong> and{" "}
              <strong>startups</strong>.
            </Typography>
            <List>
              <ListSubheader>What's included?</ListSubheader>
              <SellingPoint
                icon={WebAsset}
                primary="Domain name"
                secondary="To access your site, you'll need a domain name e.g. google.com. Choose from a range including .com, .org and .net. "
              />
              <SellingPoint
                icon={Devices}
                primary="Responsive Layouts"
                secondary="Your site will look fantastic on mobiles, tablets and desktop computers alike!"
              />
              <SellingPoint
                icon={Speed}
                primary="Fast and reliable hosting"
                secondary="I use renowned and reliable hosting and optimize all content to minimize loading times"
              />
              <SellingPoint
                icon={BrandingWatermark}
                primary="Branding Assistance"
                secondary="Optional logo, colours and typography advice for your brand"
              />
              <SellingPoint
                icon={Web}
                primary="Up to five pages of static content"
                secondary="Static content is content that you won't need to update often. e.g. About, Services, Contact"
              />
              <SellingPoint
                icon={Translate}
                primary="Up to two site languages"
                secondary="Provide us with the translations and we'll make your site bilingual!"
                noDivider
              />
            </List>
          </Tier>
        </Grid>
        <Grid item xs={12} md={6}>
          <Tier
            title="Premium"
            price={500}
            btnColor="primary"
            normalPrice={600}
          >
            <Typography align="center">
              Ideal for those who want to build an online{" "}
              <strong>client community</strong> and have{" "}
              <strong>more immediate control</strong> over site content.
            </Typography>
            <List>
              <ListSubheader>What's included?</ListSubheader>
              <SellingPoint
                icon={Add}
                primary="Everything in the 'standard' package and more!..."
              />
              <SellingPoint
                icon={Lock}
                primary="Authentication"
                secondary="Site visitors will be able to register and login to access special features, restricted content, etc. This helps you to build a community and understand more about your clients."
              />
              <SellingPoint
                icon={Create}
                primary="Content Management System (CMS)"
                secondary="A CMS will allow you to independently update the text/media on all your pages."
                noDivider
              />
            </List>
          </Tier>
          <Box align="center" mt={2}>
            <Typography>
              If these pricing plans are not suitable for your needs or you
              would like something more bespoke...
            </Typography>
            <Box my={2}>
              <Button
                startIcon={<Call />}
                onClick={handleClick}
                variant="contained"
                size="large"
              >
                Contact us
              </Button>
            </Box>
            <Typography>...and we can work it out! :o)</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <HostingAndMaintenance />
          <Faq />
        </Grid>
      </Grid>
    </Section>
  )
}

const Tier = props => (
  <Card>
    <CardHeader
      titleTypographyProps={{ variant: "h3", align: "center" }}
      title={props.title}
    />
    <CardContent>
      {props.children}
      <Box py={2} align="center">
        <Typography variant="h6">Special offer!</Typography>
        <Typography variant="caption">For a limited period</Typography>
        <Typography variant="h4">{props.price}€</Typography>
        <Typography variant="caption">normally {props.normalPrice}€</Typography>
      </Box>
      <Box align="center">
        <Button
          size="large"
          startIcon={<Call />}
          onClick={handleClick}
          variant="contained"
          color="primary"
        >
          Contact us
        </Button>
      </Box>
    </CardContent>
  </Card>
)

const SellingPoint = props => (
  <ListItem divider={!props.noDivider}>
    <ListItemIcon>
      <props.icon />
    </ListItemIcon>
    <ListItemText primary={props.primary} secondary={props.secondary} />
  </ListItem>
)

export default Pricing
