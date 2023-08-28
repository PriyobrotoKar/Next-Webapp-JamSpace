import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "./ui/input";
import ProfileBtn from "./ProfileBtn";

const Navbar = () => {
  return (
    <header className="px-4 py-4 md:px-6 md:py-6 flex justify-between items-center">
      <div className="flex gap-28 items-center">
        <div className="text-xl md:text-2xl font-medium  ">
          Jam<span className="text-gray-400">Space</span>
        </div>
        <nav className="flex gap-2">
          <Link href={"/"}>Music</Link>
          <Link href={"/"}>Podcasts</Link>
          <Link href={"/"}>Live</Link>
        </nav>
      </div>
      <div className="flex gap-1 items-center w-[18rem] border rounded-full px-4 focus-within:ring-1 ring-white">
        <FiSearch />
        <Input
          type="text"
          placeholder="Want do you want to listen to?"
          className="border-none focus-visible:ring-offset-0 focus-visible:ring-0"
        />
      </div>
      <ProfileBtn />
    </header>
  );
};

export default Navbar;
