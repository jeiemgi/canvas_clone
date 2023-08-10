import type { ReactNode } from "react";
import { SwitchTransition, Transition } from "react-transition-group";
import { useTransitionContext } from "~/context/TransitionContext";
import { useLocation } from "@remix-run/react";

function swap([a, b]: [a: Element, b: Element]) {
  a.parentNode?.children[0] === a
    ? a.parentNode.appendChild(a)
    : a.parentNode?.appendChild(b);
}

const TransitionComponent = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const { toggleCompleted } = useTransitionContext();

  const onExitHandler = (node: Element) => {
    toggleCompleted(false);
    console.log("onExitHandler", node.querySelector(".hero-bg-container"));
  };

  const onEnterHandler = (node: Element) => {
    toggleCompleted(true);
    console.log("onEnterHandler", node);
  };

  return (
    <SwitchTransition>
      <Transition
        timeout={500}
        key={location.pathname}
        onEnter={onEnterHandler}
        onExit={onExitHandler}
      >
        {children}
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
