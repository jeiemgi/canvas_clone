import { useGLTF } from "@react-three/drei";
// import useSpline from "@splinetool/r3f-spline";

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useSpline("/canvas_logotype_copy.spline");

  console.log(nodes);

  return null;
}

useGLTF.preload("/models/canvas-logo-mark-glass-3-v1-transformed.glb");

export default Model;
