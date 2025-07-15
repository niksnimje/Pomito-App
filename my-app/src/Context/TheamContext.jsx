// src/Context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(()=>{
    return localStorage.getItem("theme") || "stone";
  })

  useEffect(() => {
    const body = document.body;

    localStorage.setItem("theme", theme);
    if (theme === "stone") body.style.backgroundColor = "hsl(44,36.59%,91.96%)";
    else if (theme === "obsidia") body.style.backgroundColor = "#1C1917";
    else if (theme === "one-dark") body.style.backgroundColor = "#282C35";
    else if (theme === "toff") body.style.backgroundColor = "#e3d5ca";
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
