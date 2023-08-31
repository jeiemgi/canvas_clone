import { useScrollPosition } from "~/hooks/index";
import { useEffect, useMemo, useState } from "react";

function useIsScrolled(threshold = 0) {
  const scrollY = useScrollPosition();
  return scrollY > threshold;
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
