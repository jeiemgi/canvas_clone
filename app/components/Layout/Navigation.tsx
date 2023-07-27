import Nav from "~/components/Navigation/Nav";
import NavBack from "~/components/Navigation/NavBack";
import NavList from "~/components/Navigation/NavList";
import NavListItem from "~/components/Navigation/NavListItem";
import { NavLogoDesktop, NavLogoMobile } from "~/components/Navigation/NavLogo";
import { useLocation } from "@remix-run/react";

const navLinks = [
  {
    label: "Contact",
    link: "/contact",
  },
];

function Navigation() {
  let { pathname } = useLocation();

  return (
    <Nav>
      <NavList className={"desktop-only"}>
        <NavBack />
        <NavLogoMobile />
      </NavList>

      <NavLogoDesktop />
      <NavList>
        {navLinks.map(({ link, label }) => {
          return (
            <NavListItem
              to={link || "#"}
              show={pathname !== link}
              key={`NavListItem-${link}`}
            >
              {label}
            </NavListItem>
          );
        })}
      </NavList>
    </Nav>
  );
}

export default Navigation;
