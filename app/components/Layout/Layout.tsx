import Footer from "~/components/Layout/Footer";
import Navigation from "~/components/Layout/Navigation";
import type { ReactNode } from "react";
import { useLocation } from "@remix-run/react";

function Layout({
  children,
  footer = true,
}: {
  children: ReactNode;
  footer: boolean;
}) {
  const location = useLocation();
  const isContact = location.pathname !== "/contact";

  return (
    <>
      <Navigation />
      {children}
      {isContact && footer ? <Footer /> : null}
    </>
  );
}

export default Layout;
