"use client";

import Link from "next/link";
import React, { useContext } from "react";
import {
  SunIcon,
  HomeIcon,
  InformationCircleIcon,
  MoonIcon,
} from "@heroicons/react/20/solid";
import { ThemeContext } from "../Providers/ThemeProvider";

interface IProps {}

const Header: React.FC<IProps> = (props) => {
  const { updateTheme, theme } = useContext(ThemeContext);

  return (
    <div className="w-full h-[75px] px-16 py-4 flex items-center justify-between dark:bg-slate-700">
      <nav className="flex gap-16 font-semibold">
        <Link href="/" className="md:inline-block hidden dark:text-white">
          Home
        </Link>
        <Link href="/about" className="md:inline-block hidden">
          About
        </Link>
        <HomeIcon className="w-8 h-8 md:hidden dark:text-white" />
        <InformationCircleIcon className="w-8 h-8 md:hidden dark:text-white" />
      </nav>
      <nav></nav>
      <div className="flex gap-4 items-center">
        <button onClick={updateTheme}>
          {theme === "dark" ? (
            <SunIcon className="w-8 h-8 text-white" />
          ) : (
            <MoonIcon className="w-8 h-8" />
          )}
        </button>
        <span>
          <span className="bg-orange-500 rounded-md p-2">IDMB</span>{" "}
          <span className="hidden md:inline-block">clone</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
