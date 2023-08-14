import { gsap } from "gsap";
import { useLocation } from "@remix-run/react";
import Footer from "~/components/Layout/Footer";
import Navigation from "~/components/Layout/Navigation";
import NavThemeProvider from "~/components/Navigation/NavThemeProvider";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import type Lenis from "@studio-freight/lenis";
import { ReactLenis } from "@studio-freight/react-lenis";

function Layout({
  children,
  footer = true,
}: {
  children: ReactNode;
  footer?: boolean;
}) {
  const lenisRef = useRef<Lenis>();
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  const location = useLocation();
  const isContact = location.pathname !== "/contact";

  return (
    <NavThemeProvider>
      <Navigation />
      <ReactLenis root ref={lenisRef} autoRaf={false}>
        <main>{children}</main>
        {isContact && footer ? <Footer /> : null}
      </ReactLenis>
    </NavThemeProvider>
  );
}

export default Layout;
