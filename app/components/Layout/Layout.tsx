import { useLocation } from "@remix-run/react";
import Lenis from "~/components/Layout/Lenis";
import Footer from "~/components/Layout/Footer";
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
  const location = useLocation();
  const isContact = location.pathname !== "/contact";

  return (
    <NavThemeProvider>
      <Navigation />
      <main>{children}</main>
      {isContact && footer ? <Footer /> : null}
    </NavThemeProvider>
  );
}

export default Layout;
