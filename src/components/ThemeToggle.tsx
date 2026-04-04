"use client";

import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      title={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
{theme === "light" ? (
  <Image src="/images/toggle/moon.svg" alt="Moon" width={20} height={20} />
) : (
  <Image src="/images/toggle/sun.svg" alt="Sun" width={20} height={20} />
)}
    </button>
  );
}
