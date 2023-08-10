import { useState, createContext, useCallback, useContext } from "react";
import type { ReactNode } from "react";

interface TransitionContextProps {
  completed: boolean;
  toggleCompleted: Function;
}

const TransitionContext = createContext<TransitionContextProps>({
  completed: false,
  toggleCompleted: () => {
    console.log("default toggleCompleted");
  },
});

export const TransitionContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [completed, setCompleted] = useState(false);

  const toggleCompleted = useCallback((value: boolean) => {
    setCompleted(value);
  }, []);

  return (
    <TransitionContext.Provider
      value={{
        toggleCompleted,
        completed,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => {
  return useContext(TransitionContext);
};
