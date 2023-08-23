import React from "react";
import { Dialog } from "@headlessui/react";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";

function LayoutWorkMenu() {
  const {} = useNavTheme();
  return (
    <Dialog
      open={true}
      onClose={() => {
        console.log("close");
      }}
    ></Dialog>
  );
}

export default LayoutWorkMenu;
