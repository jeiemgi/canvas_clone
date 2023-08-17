import { useAspect, useMask, useVideoTexture } from "@react-three/drei";

function HeroVideoScene() {
  const size = useAspect(1800, 1000);
  const texture = useVideoTexture("/video/canvas-reel-preview.mp4");
  const stencil = useMask(1);

  return (
    <mesh scale={size}>
      <planeGeometry />
      <meshBasicMaterial map={texture} toneMapped={false} {...stencil} />
    </mesh>
  );
}

export default HeroVideoScene;
