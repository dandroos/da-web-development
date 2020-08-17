import { Facebook, GitHub, Instagram } from "@material-ui/icons"

export default [
  {
    label: "Home",
    href: "home",
    dropdown: false,
  },
  {
    label: "Offers",
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
    links: [
      {
        label: "Facebook",
        href: "https://www.facebook.com",
        icon: Facebook,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/fuertenerd",
        icon: Instagram,
      },
      {
        label: "GitHub",
        href: "https://www.github.com/dandroos",
        icon: GitHub,
      },
    ],
  },
]
