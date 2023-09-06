import { useState } from "react";
import Navigation from "~/components/Layout/Navigation";
import NavThemeProvider from "~/components/Navigation/NavThemeProvider";
import LayoutContact from "~/components/Layout/LayoutContact";
import LayoutWorkMenu from "~/components/Layout/LayoutWorkMenu";
import type { WorkmenuDocument } from "types.generated";
import type { ReactNode } from "react";

export type LayoutModalName = "contact" | "work" | null;

function Layout({
  children,
  workMenuData,
}: {
  children: ReactNode;
  workMenuData?: WorkmenuDocument;
}) {
  const [modalOpen, setModalOpen] = useState<LayoutModalName>(null);

  return (
    <NavThemeProvider>
      <LayoutContact
        show={modalOpen === "contact"}
        onClose={() => setModalOpen(null)}
      />
      {children}
      {workMenuData ? (
        <LayoutWorkMenu
          data={workMenuData}
          show={modalOpen === "work"}
          onClose={() => setModalOpen(null)}
        />
      ) : null}
      <Navigation
        modalOpen={modalOpen}
        setModalOpen={(modal) => setModalOpen(modal)}
      />
    </NavThemeProvider>
  );
}

export default Layout;
