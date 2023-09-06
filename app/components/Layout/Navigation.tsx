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
  const { theme, setTheme } = useNavTheme();

  useEffect(() => {
    const listener = () => {
      // prettier-ignore
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT && window.innerWidth > 0;
      const isScrolled = window.scrollY > 0;
      if (isMobile && isScrolled) setTheme("white");
      else setTheme("transparent");
    };

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);
    listener();

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [setTheme]);

  const onLogoClick = () => {
    if (modalOpen) {
      setModalOpen(null);
    } else {
      navigate("/");
    }
  };

  return (
    <Nav theme={theme}>
      <ul>
        <NavListItem hidden={theme === "hidden"}>
          <PrimaryCTAButton
            active={modalOpen === "work"}
            dark={theme === "transparent"}
            onClick={() => {
              console.log("click");
              if (modalOpen === "work") setModalOpen(null);
              else setModalOpen("work");
            }}
          >
            WORK
          </PrimaryCTAButton>
        </NavListItem>
      </ul>

      <NavLogoMobile onClick={onLogoClick} />
      <NavLogoDesktop onClick={onLogoClick} />

      <NavList>
        <NavListItem hidden={theme === "hidden"}>
          <PrimaryCTAButton
            dark={theme === "transparent"}
            active={modalOpen === "contact"}
            onClick={() => setModalOpen("contact")}
          >
            Contact
          </PrimaryCTAButton>
        </NavListItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;
