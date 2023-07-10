import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

interface IProps {}

const Navbar: React.FC<IProps> = (props) => {
  const params = useSearchParams();
  const genre = params.get("genre");
  return (
    <div className="px-16 flex flex-col items-center py-8 align-middle justify-center dark:bg-slate-900">
      <nav className="flex gap-16 text-2xl font-semibold">
        <Link
          href="?genre=fetchTrending"
          className={`hover:text-orange-600 ${
            genre === "fetchTrending"
              ? "underline underline-offset-8 decoration-4 decoration-orange-600"
              : ""
          }`}
        >
          Trending{" "}
        </Link>
        <Link
          href="?genre=fetchTopRated"
          className={`hover:text-orange-600 ${
            genre === "fetchTopRated"
              ? "underline underline-offset-8 decoration-4 decoration-orange-600"
              : ""
          }`}
        >
          Top Rated
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
