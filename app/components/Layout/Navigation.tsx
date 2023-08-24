import Nav from "~/components/Navigation/Nav";
import NavList from "~/components/Navigation/NavList";
import NavListItem from "~/components/Navigation/NavListItem";
import { NavLogoDesktop, NavLogoMobile } from "~/components/Navigation/NavLogo";
import { useLocation } from "@remix-run/react";
import { PrimaryCTALink, PrimaryCTAButton } from "~/components/CTA";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";

function Navigation() {
  let { pathname } = useLocation();
  const { theme, showWorkMenu, showProjectDetails, toggleWorkMenu } =
    useNavTheme();

  return (
    <Nav>
      <NavList className={"desktop-only"}>
        <NavListItem>
          <PrimaryCTAButton
            active={showWorkMenu}
            onClick={() => toggleWorkMenu()}
            dark={theme === "transparent"}
          >
            WORK
          </PrimaryCTAButton>
        </NavListItem>
      </NavList>

      <NavLogoMobile />
      <NavLogoDesktop />
      <NavList>
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

export default Navigation;
