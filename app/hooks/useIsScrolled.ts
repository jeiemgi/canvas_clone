import { useScrollPosition } from "~/hooks/index";

function useIsScrolled(threshold = 0) {
  const scrollY = useScrollPosition();
  return scrollY > threshold;
}

export default useIsScrolled;
