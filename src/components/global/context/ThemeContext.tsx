import { createContext } from "react";

interface ThemeContextType {
  themeMode: string;
  setThemeMode: (value:string)=>void;
}

export const ThemeContext = createContext<ThemeContextType|null>(null);