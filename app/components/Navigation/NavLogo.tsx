import clsx from "clsx";
import { CanvasLogo } from "~/svg";
import { useNavTheme } from "~/components/Navigation/NavThemeProvider";
import type { MouseEventHandler } from "react";

export function NavLogoDesktop({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { theme } = useNavTheme();

  return (
    <button
      onClick={onClick}
      aria-label={"CANVAS"}
      className={"desktop-only absolute left-0 right-0 m-auto w-max"}
    >
      <CanvasLogo
        width={125}
        height={21}
        className={clsx(
          "transition-colors",
          theme === "transparent" ? "fill-white" : "fill-black"
        )}
      />
    </button>
  );
}

export function NavLogoMobile({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  const { theme } = useNavTheme();

  return (
    <button onClick={onClick} aria-label={"CANVAS"} className={"mobile-only"}>
      <CanvasLogo
        width={78}
        height={13}
        className={clsx(
          "transition-colors",
          theme === "transparent" ? "fill-white" : "fill-black"
        )}
      />
    </button>
  );
}
