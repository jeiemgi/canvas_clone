import { useState } from "react";
import { Canvas } from "@react-three/fiber";
// import loadable from "@loadable/component";
import HeroCanvasLogoMarkGlass from "~/components/HomeHero/HeroCanvasLogoMarkGlass";

/*
const SuspenseLoader = loadable.lib(
  // @ts-ignore
  () => import("three/examples/jsm/loaders/LottieLoader.js")
);
*/

function HomePageHero() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    /*  <SuspenseLoader
      // @ts-ignore
      fallback={null}
    >
      {({ LottieLoader }) => (*/
    <Canvas
      onClick={() => setIsClicked(!isClicked)}
      camera={{ type: "OrthographicCamera", position: [0, 0, 10] }}
    >
      <HeroCanvasLogoMarkGlass isClicked={isClicked} />
    </Canvas>
    /*)}
    </SuspenseLoader>*/
  );
}

export default HomePageHero;
