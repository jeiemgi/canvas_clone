import { useLayoutEffect } from "~/hooks";
import { useLocation } from "@remix-run/react";
import Footer from "~/components/Layout/Footer";
import Navigation from "~/components/Layout/Navigation";
import NavThemeProvider from "~/components/Navigation/NavThemeProvider";
import ScrollSmoother from "gsap/dist/ScrollSmoother";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
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

  useLayoutEffect(() => {
    // ScrollTrigger.normalizeScroll(true);

    ScrollSmoother.create({
      smooth: 0.8, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: true, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      // normalizeScroll: true,
      ease: "expo.out",
    });
  }, []);

  return (
    <NavThemeProvider>
      <Navigation />
      <div id="smooth-container">
        <div id="smooth-content">
          {children}
          {isContact && footer ? <Footer /> : null}
        </div>
      </div>
    </NavThemeProvider>
  );
}

export default Layout;
