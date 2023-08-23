import Lenis from "~/components/Layout/Lenis";
import Navigation from "~/components/Layout/Navigation";
import NavThemeProvider from "~/components/Navigation/NavThemeProvider";
import type { ReactNode } from "react";

function Layout({
  children,
  footer = true,
}: {
  children: ReactNode;
  footer?: boolean;
}) {
  return (
    <NavThemeProvider>
      <Navigation />
      <Lenis>
        <main>{children}</main>
      </Lenis>
    </NavThemeProvider>
  );
}

export default Layout;
