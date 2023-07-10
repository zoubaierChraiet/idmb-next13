"use client";

import React, { useContext } from "react";
import Header from "../Header";
import { ThemeContext } from "../Providers/ThemeProvider";

import { Inter } from "next/font/google";
import Navbar from "../Navbar";

const inter = Inter({ subsets: ["latin"] });

interface IProps {
  children: React.ReactNode;
}

const Main: React.FC<IProps> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <body className={`${inter.className} ${theme}`}>
      <div className="flex flex-col w-full h-full dark:bg-slate-800 transition-colors duration-300">
        <Header />
        <Navbar />
        <div className="px-16 pt-8 flex-grow">{children}</div>
      </div>
    </body>
  );
};

export default Main;
