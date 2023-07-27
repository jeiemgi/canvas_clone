import Footer from "~/components/Layout/Footer";
import Navigation from "~/components/Layout/Navigation";
import type { ReactNode } from "react";
import { useLocation } from "@remix-run/react";

function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const footer = location.pathname === "/contact";

  return (
    <>
      <Navigation />
      {children}
      {footer ? <Footer /> : null}
    </>
  );
}

export default Layout;
