import React from "react";
import { HiTrendingUp } from "react-icons/hi";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoMdMusicalNote } from "react-icons/io";
import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 z-10 flex w-full justify-between bg-gradient-to-b from-transparent to-black to-80% px-6 py-2 md:hidden">
      <Link className="flex flex-col items-center" href={"/"}>
        <GoHomeFill className={"text-2xl"} />
        <div className="text-sm">Home</div>
      </Link>

      <Link className="flex flex-col items-center" href={`/search`}>
        <FiSearch className={"text-2xl"} />
        <div className="text-sm">Search</div>
      </Link>

      <Link className="flex flex-col items-center" href={"/trending"}>
        <HiTrendingUp className={"text-2xl"} />
        <div className="text-sm">Trending</div>
      </Link>
      <Link className="flex flex-col items-center" href={`/genres`}>
        <IoMdMusicalNote className={"text-2xl"} />
        <div className="text-sm">Genres</div>
      </Link>
    </div>
  );
};

export default BottomNav;
