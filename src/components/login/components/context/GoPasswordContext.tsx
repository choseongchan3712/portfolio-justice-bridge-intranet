import { createContext } from "react";

interface GoPasswordContxtType {
  goPassword: boolean;
  setGoPassword: (value:boolean)=>void;
}

export const GoPasswordContxt = createContext<GoPasswordContxtType|null>(null);