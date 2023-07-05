import { useWindowSize } from "usehooks-ts";
import { MOBILE_BREAKPOINT } from "~/lib/constants";

function useIsMobile() {
  const size = useWindowSize();
  return size.width < MOBILE_BREAKPOINT;
}

export default useIsMobile;
