import externalLinks from "./externals"

export default [
  {
    label: "Home",
    href: "home",
    dropdown: false,
  },
  {
    label: "Who is Prospr?",
    href: "about",
    dropdown: false,
  },
  {
    label: "Products and Services",
    href: "products-and-services",
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
