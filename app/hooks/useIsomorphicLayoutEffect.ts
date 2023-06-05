import { useEffect, useLayoutEffect } from "react";

/**
 * @link {https://medium.com/@alexandereardon/uselayouteffect-and-ssr-192986cdcf7a}
 * @link {https://github.com/react-component/overflow/issues/6}
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
