import { Suspense } from "react";
import { Mask, Stats } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HeroCanvasLogoMarkGlass from "~/components/HomeHero/HeroCanvasLogoMarkGlass";
import HeroVideo from "~/components/HomeHero/HeroVideo";

function HomePageHero() {
  return (
    <div className={"texture-background h-screen bg-black"}>
      <Suspense fallback={null}>
        <Canvas color={"#000"} camera={{ position: [0, 0, 10] }}>
          <Stats />
          <Mask id={1}>
            <HeroCanvasLogoMarkGlass />
          </Mask>
          <HeroVideo />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default HomePageHero;
