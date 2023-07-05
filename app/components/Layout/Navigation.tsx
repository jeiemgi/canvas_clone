import clsx from "clsx";
import { asText } from "@prismicio/richtext";
import { useScrollPosition } from "~/hooks";
import { CanvasLogo } from "~/svg";
import { Link, useLoaderData, useLocation } from "@remix-run/react";
import type { loader } from "~/root";
import type { ReactNode } from "react";
import type { LinkProps } from "@remix-run/react";
import type { NavigationDocumentDataBodyMenuItemSlice } from "types.generated";

interface NavigationProps extends LinkProps {
  show?: boolean;
  isScrolled: boolean;
}

function NavigationUlList({ children }: { children: ReactNode }) {
  return <ul className={"flex gap-4 md:gap-10"}>{children}</ul>;
}

function NavigationLink({
  show = true,
  children,
  isScrolled,
  ...props
}: NavigationProps) {
  return (
    <li
      className={clsx(
        "heading--3 inline-block text-white transition-opacity",
        show ? "opacity-100" : "opacity-0"
        // isScrolled ? "text-black" : "text-white"
      )}
    >
      <Link {...props}>{children}</Link>
    </li>
  );
}

interface NavigationLinkSliceProps {
  isScrolled: boolean;
  item: NavigationDocumentDataBodyMenuItemSlice;
}

function NavigationLinkSlice({ item, isScrolled }: NavigationLinkSliceProps) {
  return (
    <NavigationLink isScrolled={isScrolled} to={asText(item.primary.link)}>
      ( {asText(item.primary.title)} )
    </NavigationLink>
  );
}

function NavigationLogo({
  src,
  isScrolled,
}: {
  src?: string | null;
  isScrolled: boolean;
}) {
  return (
    <>
      {/*Mobile logo*/}
      <div className={"block pl-4 md:hidden"}>
        {src ? (
          <div className={clsx(isScrolled ? "block" : "hidden")}>
            <img src={src} width={78} height={13} alt={"Canvas Studio Logo"} />
          </div>
        ) : (
          <div className={clsx(isScrolled ? "block" : "hidden")}>
            <CanvasLogo width={78} height={13} fill={"#000"} />
          </div>
        )}
      </div>

      {/*Desk centered logo*/}
      <div
        className={
          "absolute left-0 right-0 m-auto hidden md:block md:w-[125px]"
        }
      >
        <div
          className={clsx(
            "transition-opacity",
            isScrolled ? "opacity-100" : "opacity-0"
          )}
        >
          <CanvasLogo width={125} height={21} fill={"#fff"} />
        </div>
      </div>
    </>
  );
}

function Navigation() {
  const location = useLocation();
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 0;
  const { navigation } = useLoaderData<typeof loader>();

  return (
    <nav
      className={clsx(
        "fixed left-0 top-0 z-50 h-header w-full px-4 md:h-headerDesk md:px-8",
        "flex flex-row items-center justify-between",
        "transition-colors",
        "bg-gradient-to-b from-pure-black/10 to-transparent"
        // isScrolled
        //   ? "bg-white"
        //   : "bg-gradient-to-b from-pure-black/10 to-transparent"
      )}
    >
      <NavigationUlList>
        <NavigationLink
          to={"/"}
          isScrolled={isScrolled}
          show={location.pathname !== "/"}
        >
          {`( BACK )`}
        </NavigationLink>
      </NavigationUlList>

      <NavigationLogo
        src={navigation.data.logo_mark1.url}
        isScrolled={isScrolled}
      />

      <NavigationUlList>
        {navigation.data.body.map((item) => (
          <NavigationLinkSlice
            item={item}
            isScrolled={isScrolled}
            key={`${asText(item.primary.link)}`}
          />
        ))}
      </NavigationUlList>
    </nav>
  );
}

export default Navigation;
