"use client";

import React, { useContext } from "react";
import Header from "../Header";
import { ThemeContext } from "../Providers/ThemeProvider";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  children: React.ReactNode;
}

const Main: React.FC<IProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <body className={`${inter.className} ${theme}`}>
      <Header />
      {children}
    </body>
  );
};

export default Main;
