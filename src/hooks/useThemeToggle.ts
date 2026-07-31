import { useState, useCallback } from "react";
import { colorScheme } from "nativewind";

export function useThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");
  
  const toggleTheme = useCallback(() => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    colorScheme.set(newTheme);
  }, [currentTheme]);

  return {
    currentTheme,
    toggleTheme,
    setTheme: (theme: "light" | "dark") => {
      setCurrentTheme(theme);
      colorScheme.set(theme);
    },
  };
}