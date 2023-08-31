import Lenis from "~/components/Layout/Lenis";
import Navigation from "~/components/Layout/Navigation";
import NavThemeProvider from "~/components/Navigation/NavThemeProvider";
import LayoutWorkMenu from "~/components/Layout/LayoutWorkMenu";
import type { WorkmenuDocument } from "types.generated";
import type { ReactNode } from "react";

function Layout({
  children,
  workMenu,
}: {
  children: ReactNode;
  workMenu?: WorkmenuDocument;
}) {
  return (
    <NavThemeProvider>
      {workMenu ? <LayoutWorkMenu data={workMenu} /> : null}
      <Lenis>{children}</Lenis>
      <Navigation />
    </NavThemeProvider>
  );
}

export default Layout;
