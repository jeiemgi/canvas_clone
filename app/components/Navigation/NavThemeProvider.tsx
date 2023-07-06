import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";
import useIsScrolled from "~/hooks/useIsScrolled";
import useIsMobile from "~/hooks/useIsMobile";

export interface NavThemeProps {
  theme: "transparent" | "white";
}

export const NavThemeContext = createContext<NavThemeProps>({
  theme: "transparent",
});

export function NavThemeProvider({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const isScrolled = useIsScrolled();

  const theme: NavThemeProps["theme"] = useMemo(() => {
    if (isMobile) return isScrolled ? "white" : "transparent";
    else return "transparent";
  }, [isScrolled, isMobile]);

  return (
    <NavThemeContext.Provider value={{ theme }}>
      {children}
    </NavThemeContext.Provider>
  );
}

export const useNavTheme = () => {
  return useContext(NavThemeContext);
};
