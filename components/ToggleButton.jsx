import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="transition-all duration-100"
    >
      {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};

export default ThemeSwitch;
