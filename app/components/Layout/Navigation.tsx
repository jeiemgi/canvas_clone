import { useLoaderData } from "@remix-run/react";
import Nav from "~/components/Navigation/Nav";
import NavBack from "~/components/Navigation/NavBack";
import NavList from "~/components/Navigation/NavList";
import NavListItem from "~/components/Navigation/NavListItem";
import { NavLogoDesktop, NavLogoMobile } from "~/components/Navigation/NavLogo";
import type { loader } from "~/root";

function Navigation() {
  const { navigation } = useLoaderData<typeof loader>();

  return (
    <Nav>
      <NavList className={"desktop-only"}>
        <NavBack />
        <NavLogoMobile />
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
