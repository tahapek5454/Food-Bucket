import { useCallback } from "react";
import { useColorScheme } from "nativewind";

export function useTheme() {
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();
  const currentTheme: "light" | "dark" = colorScheme === "dark" ? "dark" : "light";
  
  const toggleTheme = useCallback(() => {
    toggleColorScheme();
  }, [toggleColorScheme]);

  const setTheme = useCallback(
    (theme: "light" | "dark") => {
      setColorScheme(theme);
    },
    [setColorScheme]
  );

  return {
    currentTheme,
    toggleTheme,
    setTheme,
  };
}