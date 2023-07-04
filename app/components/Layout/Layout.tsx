import { useLayoutEffect } from "~/hooks";
import Footer from "~/components/Layout/Footer";
import Navigation from "~/components/Layout/Navigation";
import { gsap } from "gsap";
import SplitText from "gsap/dist/SplitText";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

// NOTE: Register plugins here, so we register them only once.
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

function Layout({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    ScrollSmoother.create({
      smooth: 0.5,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
