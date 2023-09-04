import { useNavigate } from "react-router";
import { useWindowSize } from "usehooks-ts";
import useIsScrolled from "~/hooks/useIsScrolled";
import { useEffect } from "react";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import Nav from "~/components/Navigation/Nav";
import NavList from "~/components/Navigation/NavList";
import NavListItem from "~/components/Navigation/NavListItem";
import { PrimaryCTAButton } from "~/components/CTA";
import { NavLogoDesktop, NavLogoMobile } from "~/components/Navigation/NavLogo";
import { MOBILE_BREAKPOINT } from "~/lib/constants";
import type { LayoutModalName } from "~/components/Layout/Layout";

function Navigation({
  modalOpen,
  setModalOpen,
}: {
  modalOpen: LayoutModalName;
  setModalOpen: (modal: LayoutModalName) => void;
}) {
  const navigate = useNavigate();

  const isScrolled = useIsScrolled();
  const { width: windowWidth } = useWindowSize();
  const { theme, setTheme } = useNavTheme();

  useEffect(() => {
    const isMobile = windowWidth < MOBILE_BREAKPOINT && windowWidth > 0;
    if (isMobile && isScrolled) {
      setTheme("white");
    }
  }, [windowWidth, isScrolled, setTheme]);

  const onLogoClick = () => {
    if (modalOpen) {
      setModalOpen(null);
    } else {
      navigate("/");
    }
  };

  return (
    <Nav>
      <ul>
        <li>
          <PrimaryCTAButton
            active={modalOpen === "work"}
            dark={theme === "transparent"}
            onClick={() => setModalOpen("work")}
          >
            WORK
          </PrimaryCTAButton>
        </li>
      </ul>

      <NavLogoMobile onClick={onLogoClick} />
      <NavLogoDesktop onClick={onLogoClick} />

      <ul>
        <li>
          <PrimaryCTAButton
            dark={theme === "transparent"}
            active={modalOpen === "contact"}
            onClick={() => setModalOpen("contact")}
          >
            Contact
          </PrimaryCTAButton>
        </li>
      </ul>
    </Nav>
  );
}

export default Navigation;
