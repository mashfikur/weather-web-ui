"use client";
import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  // Load from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
         console.log('entered storage')
    } else {
      // Optional: Detect system preference
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      const defaultTheme: Theme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.classList.toggle("dark", prefersDark);

      console.log('entered windows')
    }
  }, []);

  // Toggle and persist in localStorage
  const toggleTheme = () => {
    const newTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme, toggleTheme };
}
