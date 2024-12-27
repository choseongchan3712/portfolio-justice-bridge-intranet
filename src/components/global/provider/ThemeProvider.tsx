import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface ThemeProviderType {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderType) => {
  const [themeMode, setThemeMode] = useState<string>("");

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      setThemeMode("normal");
    } else {
      setThemeMode(localStorage.getItem("theme")!);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", `${themeMode}`);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
