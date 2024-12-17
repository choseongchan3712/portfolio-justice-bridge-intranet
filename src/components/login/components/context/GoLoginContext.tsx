import { createContext } from "react";

interface GoLoginContextType {
  goLogin: boolean;
  setGoLogin: (value:boolean)=>void;
}

export const GoLoginContext = createContext<GoLoginContextType|null>(null);