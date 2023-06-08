import { gsap } from "gsap";
import { useMemo } from "react";

function useGsapContext(scope: gsap.Context["targets"]) {
  return useMemo(() => gsap.context(() => {}, scope), [scope]);
}

export default useGsapContext;
