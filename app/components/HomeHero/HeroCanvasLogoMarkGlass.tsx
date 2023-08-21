import * as THREE from "three";
import { Leva } from "leva";
import { forwardRef, useEffect, useRef } from "react";
import { useControls } from "leva";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  Mask,
  MeshTransmissionMaterial,
  useAspect,
  useGLTF,
  useMask,
  useVideoTexture,
} from "@react-three/drei";
import { LottieLoader } from "three-stdlib";
import type { CanvasTexture } from "three";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Logo: THREE.Mesh;
  };
  materials: {
    material: THREE.MeshStandardMaterial;
  };
};

type GroupProps = JSX.IntrinsicElements["group"] & { isClicked: boolean };
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

    return (
      <Mask id={1}>
        <Leva hidden={true} />
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
      </Mask>
    );
  }
);

CanvasLogoMark.displayName = "CanvasLogoMark";

function HeroVideoScene({ isClicked }: { isClicked: boolean }) {
  const stencil = useMask(1);
  const size = useAspect(1800, 1000);
  const texture = useVideoTexture("/video/canvas-reel-preview.mp4");

  return (
    <mesh scale={size}>
      <planeGeometry />
      <meshBasicMaterial map={texture} toneMapped={false} {...stencil} />
    </mesh>
  );
}

function HeroVideoFull({ isClicked }: { isClicked: boolean }) {
  const size = useAspect(1800, 1000);
  const texture = useVideoTexture("/video/canvas-reel-full.mp4", {
    start: false,
    loop: false,
    muted: true,
  });

  useEffect(() => {
    if (isClicked) {
    }
  }, [isClicked]);

  return (
    <mesh scale={size}>
      <planeGeometry />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
}

const LottieMask = () => {
  const { viewport } = useThree();
  const textureRef = useRef<CanvasTexture>(null);
  const result = useLoader(LottieLoader, "/models/logo-mark-open.json");

  useFrame(() => {
    if (!textureRef.current) return;
    textureRef.current.needsUpdate = true;
  });

  return (
    <Mask id={1}>
      <mesh>
        <planeGeometry args={[viewport.width / 2, viewport.height / 2]} />
        <meshBasicMaterial
          alphaTest={0.3}
          alphaMap={result}
          color={"#000000"}
          transparent={true}
          opacity={1}
        >
          <canvasTexture ref={textureRef} attach="map" image={result.image} />
        </meshBasicMaterial>
      </mesh>
    </Mask>
  );
};

export function HeroCanvasLogoMarkGlass({ isClicked }: { isClicked: boolean }) {
  const { viewport } = useThree();
  const ref = useRef<THREE.Group>(null);
  // const maskRef = useRef<THREE.Mesh>(null);

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

    if (!isClicked) moveLogo();
  });

  return (
    <>
      {/*<LottieMask />*/}
      {isClicked ? (
        <HeroVideoFull isClicked={isClicked} />
      ) : (
        <HeroVideoScene isClicked={isClicked} />
      )}
      {!isClicked ? <CanvasLogoMark isClicked={isClicked} ref={ref} /> : null}
    </>
  );
}

export default HeroCanvasLogoMarkGlass;
