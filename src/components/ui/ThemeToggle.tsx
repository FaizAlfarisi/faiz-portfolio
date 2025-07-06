"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (!storedTheme || storedTheme === "dark") {
      setIsDarkMode(true);
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme} className={cn(
      "fixed max-sm:hidden top-5 right-5 z-50 p-5 rounded-full transition-color duration-300",
      "focus:outline-none",
      "hover:cursor-pointer"
      )}>
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300"></Sun>    
      ) : (
        <Moon className="h-6 w-6 text-blue-900"></Moon>
      )} 
    </button>
  );
}

export default ThemeToggle