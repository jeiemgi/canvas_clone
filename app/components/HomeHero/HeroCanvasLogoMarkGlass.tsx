import * as THREE from "three";
import { useRef } from "react";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Boolean: THREE.Mesh;
  };
  materials: {};
};

export function HeroCanvasLogoMarkGlass() {
  const path = "/models/canvas_logotype.glb";
  const { nodes } = useGLTF(path) as GLTFResult;

  const config = useControls({
    backside: false,
    samples: { value: 16, min: 1, max: 32, step: 1 },
    resolution: { value: 256, min: 64, max: 2048, step: 64 },
    transmission: { value: 0.95, min: 0, max: 1 },
    roughness: { value: 0, min: 0, max: 1, step: 0.01 },
    clearcoat: { value: 0.1, min: 0, max: 1, step: 0.01 },
    clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
    thickness: { value: 200, min: 0, max: 200, step: 0.01 },
    backsideThickness: { value: 200, min: 0, max: 200, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 1, min: 0, max: 1 },
    anisotropy: { value: 1, min: 0, max: 10, step: 0.01 },
    distortion: { value: 0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.2, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    attenuationColor: "#ffffff",
    color: "#ffffff",
  });

  const ref = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame(({ mouse }) => {
    if (!ref.current) return;

    const time = 0.09;
    ref.current.position.x = THREE.MathUtils.lerp(
      ref.current.position.x,
      (mouse.x * viewport.width) / 2,
      time
    );

    ref.current.position.y = THREE.MathUtils.lerp(
      ref.current.position.y,
      (mouse.y * viewport.width) / 2,
      time
    );
  });

  return (
    <group ref={ref} scale={0.013}>
      <mesh
        scale={1}
        position={[0, 0, 0]}
        geometry={nodes.Boolean.geometry}
        material={nodes.Boolean.material}
      >
        <MeshTransmissionMaterial
          {...config}
          color="#fef4ef"
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

export default HeroCanvasLogoMarkGlass;
