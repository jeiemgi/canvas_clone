import { useScrollPosition } from "~/hooks/index";

function useIsScrolled() {
  const scrollY = useScrollPosition();
  return scrollY > 0;
}

export default useIsScrolled;
