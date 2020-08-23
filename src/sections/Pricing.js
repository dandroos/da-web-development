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
  Notes,
  Translate,
  Lock,
  Storage,
  Add,
  Create,
  WebAsset,
  Info,
  Call,
} from "@material-ui/icons"
import Section from "../components/Section"
import HostingAndMaintenance from "../components/HostingAndMaintenance"
import Faq from "../components/Faq"
import { scroller } from "react-scroll"

const handleClick = () => {
  scroller.scrollTo("contact", { smooth: true, offset: -48, hashSpy: true })
}

const Pricing = () => {
  const theme = useTheme()
  return (
    <Section id="pricing" title="Pricing" elevation={1}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Tier
            title="Standard"
            bg={theme.palette.primary.dark}
            btnColor="secondary"
            price={300}
            normalPrice={400}
          >
            <Typography align="center">
              Ideal for <strong>small businesses</strong>,{" "}
              <strong>startups</strong> and <strong>artists</strong>.
            </Typography>
            <List>
              <ListSubheader>What's included?</ListSubheader>
              <SellingPoint
                icon={WebAsset}
                primary="Domain name"
                secondary="To access your site, you'll need a domain name e.g. google.com. Choose from .com, .org or .net. "
              />
              <SellingPoint
                icon={Devices}
                primary="Responsive Layouts"
                secondary="Your site will look fantastic on mobiles, tablets and desktop computers!"
              />
              <SellingPoint
                icon={Speed}
                primary="Lightning fast and reliable hosting"
                secondary="I use renowned and reliable hosting for my clients and optimize all content to minimize loading times"
              />
              <SellingPoint
                icon={BrandingWatermark}
                primary="Branding Assistance"
                secondary="Optional logo, colours and typography advice for your brand"
              />
              <SellingPoint
                icon={Web}
                primary="Up to five pages of static content"
                secondary="Static content are pages that you won't need to update often. e.g. About, Services, Contact"
              />
              <SellingPoint
                icon={Notes}
                primary="Blog / Latest news functionality"
                secondary="Keep your visitors coming back by posting content via a bespoke admin area"
              />
              <SellingPoint
                icon={Translate}
                primary="Up to two site languages"
                secondary="Provide me with the translations to make your site bilingual!"
                noDivider
              />
            </List>
          </Tier>
        </Grid>
        <Grid item xs={12} md={6}>
          <Tier
            title="Premium"
            price={500}
            bg={theme.palette.secondary.dark}
            btnColor="primary"
            normalPrice={600}
          >
            <Typography align="center">
              Ideal for those who want to build an online{" "}
              <strong>client community</strong> and have{" "}
              <strong>more control</strong> over site content.
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
                icon={Storage}
                primary="Database storage (x1)"
                secondary="As well as storing authentication details (usernames and encrypted passwords), you can use a database to store all kinds of data to encourage visitor interaction. e.g. user profiles, site viewing preferences etc."
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
                color="primary"
              >
                Contact me
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
  <Card style={{ backgroundColor: props.bg }}>
    <CardHeader
      titleTypographyProps={{ variant: "h3", align: "center" }}
      title={props.title}
    />
    <CardContent dividers>
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
          startIcon={<Info />}
          onClick={handleClick}
          variant="outlined"
        >
          Contact me for further info
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
