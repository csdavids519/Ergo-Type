import { createContext, useContext, useState, ReactNode } from "react";

interface KeyboardLayoutContextType {
  topRow: string;
  homeRow: string;
  lowerRow: string;
  submitted: boolean;
  setTopRow: (value: string) => void;
  setHomeRow: (value: string) => void;
  setLowerRow: (value: string) => void;
  setSubmitted: (value: boolean) => void;
}

const KeyboardLayoutContext = createContext<
  KeyboardLayoutContextType | undefined
>(undefined);

export function KeyboardLayoutProvider({ children }: { children: ReactNode }) {
  const [topRow, setTopRow] = useState("");
  const [homeRow, setHomeRow] = useState("");
  const [lowerRow, setLowerRow] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <KeyboardLayoutContext.Provider
      value={{
        topRow,
        homeRow,
        lowerRow,
        submitted,
        setTopRow,
        setHomeRow,
        setLowerRow,
        setSubmitted,
      }}
    >
      {children}
    </KeyboardLayoutContext.Provider>
  );
}

export function useKeyboardLayout() {
  const context = useContext(KeyboardLayoutContext);
  if (!context) {
    throw new Error(
      "useKeyboardLayout must be used within KeyboardLayoutProvider"
    );
  }
  return context;
}
