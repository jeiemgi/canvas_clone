import Nav from "~/components/Navigation/Nav";
import NavList from "~/components/Navigation/NavList";
import NavListItem from "~/components/Navigation/NavListItem";
import { NavLogoDesktop, NavLogoMobile } from "~/components/Navigation/NavLogo";
import { useLocation } from "@remix-run/react";

function Navigation() {
  let { pathname } = useLocation();

  return (
    <Nav>
      <NavList className={"desktop-only"}>
        <NavListItem to={"#"}>WORK</NavListItem>
        <NavLogoMobile />
      </NavList>

      <NavLogoDesktop />
      <NavList>
        <NavListItem to={"contact"} show={pathname !== "contact"}>
          Contact
        </NavListItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;
