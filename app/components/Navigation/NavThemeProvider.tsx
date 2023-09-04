import useIsMobile from "~/hooks/useIsMobile";
import useIsScrolled from "~/hooks/useIsScrolled";
import { useNavigation } from "@remix-run/react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";

export type NavThemeType = "transparent" | "white";

export interface NavThemeProps {
  theme: NavThemeType;
  setTheme: (theme: NavThemeType) => void;
}

export const NavThemeContext = createContext<NavThemeProps>({
  theme: "transparent",
  setTheme: () => {
    console.log("setTheme defaultAction");
  },
});

export function NavThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<NavThemeType>("transparent");

  const setThemeCallback = (newTheme: NavThemeType) => {
    setTheme(newTheme);
  };

  return (
    <NavThemeContext.Provider
      value={{
        theme,
        setTheme: setThemeCallback,
      }}
    >
      {children}
    </NavThemeContext.Provider>
  );
}

export const useNavTheme = () => {
  return useContext(NavThemeContext);
};

export default NavThemeProvider;
