"use client";

import React, { createContext, useState } from "react";

type theme = "dark" | "light";

interface themeValueType {
  theme: theme;
  updateTheme: () => void;
}

export const ThemeContext = createContext<themeValueType>({
  theme: "dark",
  updateTheme: () => null,
});

interface IProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<theme>("light");

  const updateTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
