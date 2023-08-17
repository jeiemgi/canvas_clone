import { Suspense } from "react";
import { Mask, OrbitControls, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLogoMarkGlass from "~/components/HomeHero/CanvasLogoMarkGlass";
import HeroVideo from "~/components/HomeHero/HeroVideo";

function HomePageHero({ count = 10, depth = 80 }) {
  return (
    <div className={"h-screen"}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Stats />
          <Mask id={1}>
            <CanvasLogoMarkGlass />
          </Mask>
          <HeroVideo />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default HomePageHero;
