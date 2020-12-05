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
  ListItem,
  ListItemText,
} from "@material-ui/core"
import {
  Devices,
  Speed,
  BrandingWatermark,
  Translate,
  WebAsset,
  Call,
  Search,
} from "@material-ui/icons"
import Section from "../components/Section"
import OptionalExtras from "../components/OptionalExtras"
import HostingAndMaintenance from "../components/HostingAndMaintenance"
import Faq from "../components/Faq"
import { scroller } from "react-scroll"
import svg from "../images/pricing.svg"
import portfolioSvg from "../images/portfolio.svg"
import multipagerSvg from "../images/multipager.svg"

const handleClick = () => {
  scroller.scrollTo("contact", { smooth: true, offset: -48, hashSpy: true })
}

const Pricing = () => {
  return (
    <Section
      id="products-and-services"
      title="Products and Services"
      color="primary"
      shade="main"
      elevation={1}
    >
      <Grid container alignItems="center" spacing={1}>
        <Box clone order={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={6}>
            <Box align="center">
              <img
                style={{ maxWidth: 550 }}
                src={svg}
                alt="Developer illustration"
              />
            </Box>
          </Grid>
        </Box>
        <Box clone order={{ xs: 2, md: 1 }}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Features"
                titleTypographyProps={{ variant: "h3", align: "center" }}
              />
              <CardContent>
                <Typography align="center">
                  Here is a list of features that apply to all sites I build.
                </Typography>
                <List>
                  <SellingPoint
                    icon={WebAsset}
                    primary="Domain name"
                    secondary="To access your site, you'll need a domain name e.g. google.com. Choose from a range including .com, .org and .net. "
                  />
                  <SellingPoint
                    icon={Devices}
                    primary="Responsive layouts"
                    secondary="Your site will look fantastic on mobiles, tablets and desktop computers alike!"
                  />
                  <SellingPoint
                    icon={Speed}
                    primary="Fast and reliable hosting"
                    secondary="I use renowned and reliable hosting and optimize all content to minimize loading times"
                  />
                  <SellingPoint
                    icon={BrandingWatermark}
                    primary="Branding assistance"
                    secondary="Optional logo, colours and typography advice for your brand"
                  />
                  <SellingPoint
                    icon={Search}
                    primary="Standard SEO (Search Engine Optimization) capabilities"
                    secondary="Your site will be noticed by search engines and it will also contain the relevant tags to display professionally when sharing on social media"
                    noDivider
                  />
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Box>
      </Grid>
      <Box align="center" mt={4}>
        <Typography variant="h3">Price Plans</Typography>
      </Box>
      <Tier title="Portfolio" svg={portfolioSvg} price={300} normalPrice={400}>
        <Typography align="center">
          A single page split into different sections (up to 5 sections) with
          smooth scrolling navigation. This website is an example of a{" "}
          <strong>Portfolio</strong> site.
        </Typography>
      </Tier>
      <Tier
        title="Multipager"
        svg={multipagerSvg}
        price={500}
        normalPrice={600}
      >
        <Typography align="center">
          A website split across multiple pages (up to 5 static
          pages/templates). Suited to sites that require a more complex
          architecture. e.g. blogs, stores, etc.
        </Typography>
      </Tier>
      <OptionalExtras />
      <HostingAndMaintenance />
      <Faq />
    </Section>
  )
}

const Tier = props => (
  <Box my={1}>
    <Card>
      <Grid container spacing={2} alignItems="center">
        <Box clone order={{ xs: 2, md: 1 }}>
          <Grid item xs={12} md={6}>
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
                <Typography variant="caption">
                  normally {props.normalPrice}€
                </Typography>
              </Box>
              <Box align="center">
                <Button
                  size="large"
                  startIcon={<Call />}
                  onClick={handleClick}
                  variant="contained"
                  color="primary"
                >
                  Contact me
                </Button>
              </Box>
            </CardContent>
          </Grid>
        </Box>
        <Box clone order={{ xs: 1, md: 2 }}>
          <Grid item xs={12} md={6}>
            <Box
              m={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
              border={1}
            >
              <img src={props.svg} style={{ width: "100%" }} />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Card>
  </Box>
)

const SellingPoint = props => (
  <ListItem>
    <ListItemIcon color="inherit">
      <props.icon />
    </ListItemIcon>
    <ListItemText primary={props.primary} secondary={props.secondary} />
  </ListItem>
)

export default Pricing
