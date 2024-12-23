import { createContext } from "react";

interface IsCalOpenContextType {
  isCalOpen: boolean;
  setIsCalOpen: (value: boolean) => void;
};

export const IsCalOpenContext = createContext<IsCalOpenContextType|null>(null);