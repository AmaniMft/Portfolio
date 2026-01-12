import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function ThemeToggle({ className }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Init theme (localStorage + préférence système)
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldUseDark =
      storedTheme === "dark" || (!storedTheme && prefersDark);

    document.documentElement.classList.toggle("dark", shouldUseDark);
    localStorage.setItem("theme", shouldUseDark ? "dark" : "light");
    setIsDarkMode(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDarkMode;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDarkMode(next);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={cn(
        "inline-flex items-center justify-center rounded-full p-2",
        "transition-colors duration-300 hover:bg-muted",
        "focus:outline-none focus:ring-2 focus:ring-primary/40",
        className
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 text-blue-400" />
      )}
    </button>
  );
}

export default ThemeToggle;
