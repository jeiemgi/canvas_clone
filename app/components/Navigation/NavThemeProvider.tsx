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
  showContact: boolean;
  showWorkMenu: boolean;
  showProjectDetails: boolean;
  toggleProjectDetails: Function;
  toggleWorkMenu: Function;
  toggleContact: Function;
}

export const NavThemeContext = createContext<NavThemeProps>({
  theme: "transparent",
  showContact: false,
  showProjectDetails: false,
  showWorkMenu: false,
  toggleContact: () => {
    console.log("toggleContact defaultAction");
  },
  toggleWorkMenu: () => {
    console.log("toggleWorkMenu defaultAction");
  },
  toggleProjectDetails: () => {
    console.log("toggleProjectDetails defaultAction");
  },
});

export function NavThemeProvider({ children }: { children: ReactNode }) {
  const isMobile = useIsMobile();
  const isScrolled = useIsScrolled();
  const navigation = useNavigation();

  const [showContact, setShowContact] = useState(false);
  const [showWorkMenu, setShowWorkMenu] = useState(false);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  // Hook to listen for navigation state
  useEffect(() => {
    if (navigation.state === "loading" && showProjectDetails) {
      setShowProjectDetails(false);
    }
  }, [navigation.state, showProjectDetails, showWorkMenu]);

  const toggleWorkMenu = useCallback(() => {
    // Close other modals if open
    if (showProjectDetails) setShowProjectDetails(false);
    if (showContact) setShowContact(false);
    setShowWorkMenu(!showWorkMenu);
  }, [showWorkMenu, showProjectDetails, showContact]);

  const toggleProjectDetails = useCallback(() => {
    // Close other modals if open
    if (showWorkMenu) setShowWorkMenu(false);
    if (showContact) setShowContact(false);
    setShowProjectDetails(!showProjectDetails);
  }, [showProjectDetails, showWorkMenu, showContact]);

  const toggleContact = useCallback(() => {
    console.log("toggleContact", !showContact);
    // Close other modals if open
    if (showWorkMenu) setShowWorkMenu(false);
    if (showProjectDetails) setShowProjectDetails(false);

    setShowContact(!showContact);
  }, [showContact, showProjectDetails, showWorkMenu]);

  const theme: NavThemeProps["theme"] = useMemo(() => {
    if (isMobile) {
      return isScrolled ? "white" : "transparent";
    } else {
      return showProjectDetails ? "white" : "transparent";
    }
  }, [showProjectDetails, isScrolled, isMobile]);

  return (
    <NavThemeContext.Provider
      value={{
        theme,
        showContact,
        toggleContact,
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
