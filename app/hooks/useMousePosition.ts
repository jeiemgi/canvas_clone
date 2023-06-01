import { useState, useEffect } from "react";

interface Props {
  container?: HTMLElement | Window;
}

const useMousePosition = ({ container }: Props = {}) => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // @ts-ignore
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    const element = container || window;
    const mouseEnter = () => setIsHovered(true);
    const mouseLeave = () => setIsHovered(false);

    element.addEventListener("mouseenter", mouseEnter);
    element.addEventListener("mouseleave", mouseLeave);
    element.addEventListener("mousemove", updateMousePosition);

    return () => {
      element.removeEventListener("mousemove", updateMousePosition);
      element.removeEventListener("mouseenter", mouseEnter);
      element.removeEventListener("mouseleave", mouseLeave);
    };
  }, [container]);

  return [mousePosition, isHovered];
};
export default useMousePosition;
