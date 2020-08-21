import externalLinks from "./externals"

export default [
  {
    label: "Home",
    href: "home",
    dropdown: false,
  },
  {
    label: "Pricing",
    href: "pricing",
    dropdown: false,
  },
  {
    label: "About",
    href: "about",
    dropdown: false,
  },
  {
    label: "Contact",
    href: "contact",
    dropdown: false,
  },
  {
    label: "External",
    href: "",
    dropdown: true,
    links: externalLinks,
  },
]
