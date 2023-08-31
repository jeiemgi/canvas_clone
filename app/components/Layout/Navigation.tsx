import Nav from "~/components/Navigation/Nav";
import NavList from "~/components/Navigation/NavList";
import NavListItem from "~/components/Navigation/NavListItem";
import { PrimaryCTAButton, PrimaryCTALink } from "~/components/CTA";
import { NavLogoDesktop, NavLogoMobile } from "~/components/Navigation/NavLogo";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import { useLocation } from "@remix-run/react";

function Navigation() {
  let { pathname } = useLocation();
  const { theme, showWorkMenu, toggleWorkMenu, showContact, toggleContact } =
    useNavTheme();

  return (
    <Nav>
      <NavList className={"desktop-only"}>
        <NavListItem>
          <PrimaryCTAButton
            active={showWorkMenu}
            dark={theme === "transparent"}
            onClick={() => toggleWorkMenu()}
          >
            WORK
          </PrimaryCTAButton>
        </NavListItem>
        <NavLogoMobile />
        <NavLogoDesktop />
        <NavListItem>
          <PrimaryCTALink
            to={"contact"}
            active={pathname === "/contact"}
            dark={theme === "transparent"}
          >
            Contact
          </PrimaryCTALink>
        </NavListItem>
      </NavList>
    </Nav>
  );
}

// <PrimaryCTAButton
//     active={showContact}
//     dark={theme === "transparent"}
//     onClick={() => toggleContact()}
// >
//   Contact
// </PrimaryCTAButton>
export default Navigation;
