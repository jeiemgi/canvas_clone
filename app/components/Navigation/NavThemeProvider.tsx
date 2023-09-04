import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type NavThemeType = "transparent" | "white" | "hidden";

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
