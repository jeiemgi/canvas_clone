import clsx from "clsx";
import { asText } from "@prismicio/richtext";
import { useLoaderData, useLocation } from "@remix-run/react";
import useIsScrolled from "~/hooks/useIsScrolled";
import Nav from "~/components/Navigation/Nav";
import NavList from "~/components/Navigation/NavList";
import NavListItem from "~/components/Navigation/NavListItem";
import { BackArrow, CanvasLogo } from "~/svg";
import type { loader } from "~/root";

function Navigation() {
  const { navigation } = useLoaderData<typeof loader>();

  const isScrolled = useIsScrolled();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Nav>
      <NavList className={"desktop-only"}>
        <NavListItem to={"/"} show={!isHome}>
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

        <NavListItem
          to={"/"}
          className={clsx(
            "mobile-only absolute left-0 transition-transform",
            isHome ? "translate-x-0" : "translate-x-8"
          )}
        >
          <CanvasLogo
            width={78}
            height={13}
            className={clsx(
              "transition-colors",
              isScrolled ? "fill-black" : "fill-white"
            )}
          />
        </NavListItem>
      </NavList>

      <div className={"desktop-only absolute left-0 right-0 m-auto w-[125px]"}>
        <div
          className={clsx(
            "transition-opacity",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
        >
          <CanvasLogo
            width={125}
            height={21}
            className={clsx(
              "transition-colors",
              isScrolled ? "fill-black" : "fill-white"
            )}
          />
        </div>
      </div>

      <NavList>
        {navigation.data.body.map((item) => (
          <NavListItem
            to={item.primary.link || "#"}
            key={`${item.primary.link}`}
          >
            ( {item.primary.title} )
          </NavListItem>
        ))}
      </NavList>
    </Nav>
  );
}

export default Navigation;
