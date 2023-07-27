import useIsMobile from "~/hooks/useIsMobile";
import useIsScrolled from "~/hooks/useIsScrolled";
import { useLocation, useSearchParams } from "@remix-run/react";
import { createContext, useContext, useMemo } from "react";
import type { ReactNode } from "react";

export type NavThemeType = "transparent" | "white";

export interface NavThemeProps {
  theme: NavThemeType;
  showBack: boolean;
}

export const NavThemeContext = createContext<NavThemeProps>({
  theme: "transparent",
  showBack: false,
});

export function NavThemeProvider({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const isScrolled = useIsScrolled();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [searchParams] = useSearchParams();
  const showProjectDetails = searchParams.get("projectDetails") === "true";

  const showBack = useMemo(() => {
    return !isHome || showProjectDetails;
  }, [isHome, showProjectDetails]);

  const theme: NavThemeProps["theme"] = useMemo(() => {
    if (isMobile) return isScrolled ? "white" : "transparent";
    else return showProjectDetails ? "white" : "transparent";
  }, [showProjectDetails, isScrolled, isMobile]);

  return (
    <NavThemeContext.Provider value={{ theme, showBack }}>
      {children}
    </NavThemeContext.Provider>
  );
}

export const useNavTheme = () => {
  return useContext(NavThemeContext);
};

export default NavThemeProvider;
