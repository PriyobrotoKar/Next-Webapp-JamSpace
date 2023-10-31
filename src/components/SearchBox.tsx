"use client";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search) {
      const timerOut = setTimeout(() => {
        router.push(`/search/${search}`);
      }, 800);
      return () => clearTimeout(timerOut);
    }
  }, [search]);

  return (
    <div className="z-10 mx-4 mt-2 flex items-center gap-1 rounded-full border bg-white px-4 text-neutral-800 ring-white focus-within:ring-1 md:hidden">
      <FiSearch />
      <Input
        value={search}
        onChange={handleSearchInput}
        type="text"
        placeholder="Want do you want to listen to?"
        className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  );
};

export default SearchBox;
