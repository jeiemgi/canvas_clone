import { useEffect, useState } from "react";

function useIsScrolled(threshold = 0) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", update);
    update();
    return () => window.removeEventListener("scroll", update);
  }, [threshold]);

  return isScrolled;
}

export const useIsScrolledInArea = (start: number, end: number) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      const endPos = window.innerHeight + end;
      setIsInView(
        scrollY > start &&
          scrollY + endPos < document.documentElement.scrollHeight - endPos
      );
    };
    window.addEventListener("scroll", updatePosition);

    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [start, end]);

  return isInView;
};

export default useIsScrolled;
