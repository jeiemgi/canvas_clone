import React from "react";
import Footer from "~/components/Layout/Footer";
import Navigation from "~/components/Layout/Navigation";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
