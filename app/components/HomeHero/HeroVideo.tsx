import { useAspect, useMask, useVideoTexture } from "@react-three/drei";

function HeroVideoScene() {
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

export default HeroVideoScene;
