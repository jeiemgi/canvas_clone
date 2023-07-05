import clsx from "clsx";
import useIsScrolled from "~/hooks/useIsScrolled";
import { useLoaderData, useLocation } from "@remix-run/react";
import Nav from "~/components/Navigation/Nav";
import NavList from "~/components/Navigation/NavList";
import NavListItem from "~/components/Navigation/NavListItem";
import { BackArrow, CanvasLogo } from "~/svg";
import type { loader } from "~/root";
import { NavThemeProvider } from "~/components/Navigation/NavThemeProvider";
import { NavLogoDesktop, NavLogoMobile } from "~/components/Navigation/NavLogo";

function Navigation() {
  const { navigation } = useLoaderData<typeof loader>();
  const isScrolled = useIsScrolled();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Nav>
      <NavList className={"desktop-only"}>
        <NavListItem
          to={"/"}
          className={clsx(
            "transition-opacity",
            isHome ? "opacity-0" : "opacity-100"
          )}
        >
          <button className={"desktop-only"}>{`( BACK )`}</button>
          <button className={"mobile-only py-2"}>
            <BackArrow
              width={"1.25rem"}
              height={"0.8125rem"}
              className={clsx(
                isScrolled ? "stroke-pure-black" : "stroke-white"
              )}
            />
          </button>
        </NavListItem>
        <NavLogoMobile isHome={isHome} />
      </NavList>

      <NavLogoDesktop />

      <NavList>
        {navigation.data.body.map((item) => (
          <NavListItem
            to={item.primary.link || "#"}
            key={`${item.primary.link}`}
          >
            {`( ${item.primary.title} )`}
          </NavListItem>
        ))}
      </NavList>
    </Nav>
  );
}

export default Navigation;
