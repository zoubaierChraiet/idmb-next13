"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!searchTerm) return;
    router.push(`/search/${searchTerm}`);
  };

  return (
    <form className="flex px-16 mt-2" onSubmit={handleSubmit}>
      <input
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search keywords..."
        className="outline-none w-full h-12 placeholder-gray-500 rounded-sm p-2 bg-transparent dark:text-white"
      />
      <button
        type="submit"
        className="text-amber-700 disabled:bg-gray-400"
        onSubmit={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
