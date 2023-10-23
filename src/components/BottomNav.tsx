import React from "react";
import { AiFillFire } from "react-icons/ai";
import { BsPersonHeart } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { IoMdMusicalNote } from "react-icons/io";
import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 z-10 flex w-full justify-between bg-gradient-to-b from-transparent to-black to-80% px-6 py-2 md:hidden">
      <button className="flex flex-col items-center">
        <GoHomeFill className={"text-2xl"} />
        <div className="text-sm">Home</div>
      </button>

      <Link className="flex flex-col items-center" href={`/search`}>
        <FiSearch className={"text-2xl"} />
        <div className="text-sm">Search</div>
      </Link>

      <button className="flex flex-col items-center">
        <BsPersonHeart className={"text-2xl"} />
        <div className="text-sm">Artists</div>
      </button>
      <Link className="flex flex-col items-center" href={`/genres`}>
        <IoMdMusicalNote className={"text-2xl"} />
        <div className="text-sm">Genres</div>
      </Link>
    </div>
  );
};

export default BottomNav;
