import Link from "next/link";
import React from "react";
import {
  SunIcon,
  HomeIcon,
  InformationCircleIcon,
} from "@heroicons/react/20/solid";

interface IProps {}

const Header: React.FC<IProps> = (props) => {
  return (
    <div className="w-full h-[75px] px-16 py-4 flex items-center justify-between">
      <nav className="flex gap-16 font-semibold">
        <Link href="/" className="md:inline-block hidden">
          Home
        </Link>
        <Link href="/" className="md:inline-block hidden">
          About
        </Link>
        <HomeIcon className="w-8 h-8 md:hidden" />
        <InformationCircleIcon className="w-8 h-8 md:hidden " />
      </nav>
      <nav></nav>
      <div className="flex gap-4 items-center">
        <button>
          <SunIcon className="w-8 h-8" />
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
