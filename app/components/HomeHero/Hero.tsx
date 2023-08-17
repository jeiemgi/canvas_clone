import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import HeroVideo from "~/components/HomeHero/HeroVideo";
import HeroCanvasLogoMarkGlass from "~/components/HomeHero/HeroCanvasLogoMarkGlass";

function HomePageHero() {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <Suspense fallback={null}>
      <Canvas
        onPointerDown={() => setIsPressed(true)}
        onPointerUp={() => setIsPressed(false)}
        camera={{ type: "OrthographicCamera", position: [0, 0, 10] }}
      >
        <HeroCanvasLogoMarkGlass isPressed={isPressed} />
        <HeroVideo />
      </Canvas>
    </Suspense>
  );
}

export default HomePageHero;
