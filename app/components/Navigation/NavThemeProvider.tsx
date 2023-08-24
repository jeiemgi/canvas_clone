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
  showProjectDetails: boolean;
  toggleProjectDetails: Function;
  showWorkMenu: boolean;
  toggleWorkMenu: Function;
}

export const NavThemeContext = createContext<NavThemeProps>({
  theme: "transparent",
  showProjectDetails: false,
  showWorkMenu: false,
  toggleWorkMenu: () => {
    console.log("toggleProjectDetails defaultAction");
  },
  toggleProjectDetails: () => {
    console.log("toggleProjectDetails defaultAction");
  },
});

export function NavThemeProvider({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const isScrolled = useIsScrolled();
  const navigation = useNavigation();

  const [showWorkMenu, setShowWorkMenu] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  // Hook to listen for navigation state
  useEffect(() => {
    if (navigation.state === "loading" && showWorkMenu) {
      setShowWorkMenu(false);
    }
    if (navigation.state === "loading" && showProjectDetails) {
      setShowProjectDetails(false);
    }
  }, [navigation.state, showProjectDetails, showWorkMenu]);

  const toggleWorkMenu = useCallback(() => {
    // Close other modals if open
    if (showProjectDetails) setShowProjectDetails(false);
    setShowWorkMenu(!showWorkMenu);
  }, [showWorkMenu, showProjectDetails]);

  const toggleProjectDetails = useCallback(() => {
    // Close other modals if open
    if (showWorkMenu) setShowWorkMenu(false);
    setShowProjectDetails(!showProjectDetails);
  }, [showProjectDetails, showWorkMenu]);

  const theme: NavThemeProps["theme"] = useMemo(() => {
    if (isMobile) return isScrolled ? "white" : "transparent";
    else return showProjectDetails ? "white" : "transparent";
  }, [showProjectDetails, isScrolled, isMobile]);

  return (
    <NavThemeContext.Provider
      value={{
        theme,
        showProjectDetails,
        toggleProjectDetails,
        showWorkMenu,
        toggleWorkMenu,
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
