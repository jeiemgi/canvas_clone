import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";
import type Lenis from "@studio-freight/lenis";

function LenisComponent({ children }: { children: ReactNode }) {
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

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
}

export default LenisComponent;
