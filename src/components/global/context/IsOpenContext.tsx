import { createContext } from "react";

interface IsOpenContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const IsOpenContext = createContext<IsOpenContextType|null>(null);