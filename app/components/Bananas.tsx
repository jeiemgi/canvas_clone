import { Suspense, useRef, useState } from "react";
import { useControls } from "leva";
import { Environment, Stats, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { Mesh } from "three";
import type { GLTF } from "three-stdlib";
import { DepthOfField, EffectComposer } from "@react-three/postprocessing";

type GLTFResult = GLTF & {
  nodes: {
    banana: THREE.Mesh;
  };
  materials: {
    Banana_High: THREE.MeshStandardMaterial;
  };
};

const Banana = ({ z }) => {
  const ref = useRef<Mesh>(null);
  const { nodes, materials } = useGLTF(
    "/models/banana-v1-transformed.glb"
  ) as GLTFResult;

  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame(() => {
    if (!ref.current) return;

    ref.current.rotation.set(
      data.rX + 0.001,
      (data.rY += 0.002),
      (data.rZ += 0.004)
    );
    ref.current.position.set(data.x * width, (data.y += 0.01), z);
    if (data.y > height / 1.5) {
      data.y = -height / 1.5;
    }
  });

  return (
    <mesh
      ref={ref}
      geometry={nodes.banana.geometry}
      material={materials.Banana_High}
      material-emissive={"orange"}
    />
  );
};

function HomePageHero({
  speed = 1,
  count = 10,
  depth = 80,
  easing = (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
}) {
  return (
    <Suspense fallback={null}>
      <div className={"h-screen"}>
        <Canvas
          gl={{ antialias: false }}
          dpr={[1, 1.5]}
          camera={{
            position: [0, 0, 10],
            fov: 20,
            near: 0.01,
            far: depth + 15,
          }}
        >
          <color attach="background" args={["#ffbf40"]} />
          <spotLight
            position={[10, 20, 10]}
            penumbra={1}
            intensity={3}
            color="orange"
          />
          {Array.from({ length: count }).map((_, i) => (
            <Banana key={i} z={-i} />
          ))}
          <Environment preset={"sunset"} />
          <EffectComposer>
            <DepthOfField
              target={[0, 0, 30]}
              focalLength={0.5}
              bokehScale={11}
              height={700}
            />
          </EffectComposer>
          <Stats />
        </Canvas>
      </div>
    </Suspense>
  );
}

export default HomePageHero;
