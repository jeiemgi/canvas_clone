import * as THREE from "three";
import { forwardRef, useRef } from "react";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import { Mask, MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";
import { Group } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Logo: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
  };
};

type GroupProps = JSX.IntrinsicElements["group"];
export const CanvasLogoMark = forwardRef<THREE.Group, GroupProps>(
  (props, ref) => {
    const { nodes, materials } = useGLTF(
      "/models/canvas-logo-v4-v1-transformed.glb"
    ) as GLTFResult;

    const config = useControls({
      backside: false,
      samples: { value: 16, min: 1, max: 32, step: 1 },
      resolution: { value: 256, min: 64, max: 2048, step: 64 },
      transmission: { value: 0.95, min: 0, max: 1 },
      roughness: { value: 0, min: 0, max: 2, step: 0.01 },
      clearcoat: { value: 0.1, min: 0, max: 1, step: 0.01 },
      clearcoatRoughness: { value: 0.1, min: 0, max: 1, step: 0.01 },
      thickness: { value: 200, min: 0, max: 200, step: 0.01 },
      backsideThickness: { value: 200, min: 0, max: 200, step: 0.01 },
      ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
      chromaticAberration: { value: 2, min: 0, max: 2 },
      anisotropy: { value: 1, min: 0, max: 10, step: 0.01 },
      distortion: { value: 0, min: 0, max: 1, step: 0.01 },
      distortionScale: { value: 0.2, min: 0.01, max: 1, step: 0.01 },
      temporalDistortion: { value: 0, min: 0, max: 1, step: 0.01 },
      attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
      attenuationColor: "#ffffff",
      color: "#ffffff",
    });

    console.log(materials);
    return (
      <group {...props} dispose={null} ref={ref}>
        <mesh
          geometry={nodes.Logo.geometry}
          material={materials.material}
          rotation={[0, 0, 0]}
          scale={[0.02, 0.02, 0.01]}
        >
          <MeshTransmissionMaterial {...config} toneMapped={false} />
        </mesh>
        <meshStandardMaterial {...materials.material} />
      </group>
    );
  }
);

CanvasLogoMark.displayName = "CanvasLogoMark";

export function HeroCanvasLogoMarkGlass({ isPressed }: { isPressed: boolean }) {
  const { viewport } = useThree();
  const ref = useRef<THREE.Group>(null);
  const maskRef = useRef<THREE.Mesh>(null);

  useFrame(({ mouse }) => {
    const moveLogo = () => {
      if (!ref.current) return;

      const time = 0.2;
      const x = (mouse.x * viewport.width) / 2;
      const y = (mouse.y * viewport.height) / 2;

      if (x > viewport.width || y > viewport.height) return;

      ref.current.position.x = THREE.MathUtils.lerp(
        ref.current.position.x,
        x,
        time
      );
      ref.current.position.y = THREE.MathUtils.lerp(
        ref.current.position.y,
        y,
        time
      );
    };

    const animateMask = () => {
      if (!maskRef.current) return;

      if (isPressed) {
        maskRef.current.geometry.userData.width += 1;
        // maskRef.current.scale.x += 0.01;
        // maskRef.current.scale.y += 0.01;
      } else {
        maskRef.current.scale.x = THREE.MathUtils.lerp(
          maskRef.current.scale.x,
          1,
          0.1
        );
        maskRef.current.scale.y = THREE.MathUtils.lerp(
          maskRef.current.scale.y,
          1,
          0.1
        );
      }
    };
    moveLogo();
    animateMask();
  });

  return (
    <Mask depthWrite={true} ref={maskRef} id={1}>
      <CanvasLogoMark ref={ref} />
    </Mask>
  );
}

export default HeroCanvasLogoMarkGlass;
