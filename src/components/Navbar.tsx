"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from "./ui/input";

export const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6">
      <Link
        className={
          pathname == "/"
            ? ""
            : "text-neutral-400 hover:text-neutral-200 transition-colors"
        }
        href={"/"}
      >
        Music
      </Link>
      <Link
        className={
          pathname == "/podcasts"
            ? ""
            : "text-neutral-400 hover:text-neutral-200 transition-colors"
        }
        href={"/"}
      >
        Podcasts
      </Link>
      <Link
        className={
          pathname == "/live"
            ? ""
            : "text-neutral-400 hover:text-neutral-200 transition-colors"
        }
        href={"/"}
      >
        Live
      </Link>
    </nav>
  );
};

const Navbar = () => {
  return (
    <header className="backdrop-blur-sm z-10 py-6 sticky top-0 before:absolute before:-top-[30%] before:left-0 before:right-0 before:rounded-b-full before:w-[95%] before:mx-auto before:h-[180%] before:bg-gradient-to-b before:from-orange-950/60 before:-z-10 before:blur-xl">
      <div className="flex justify-between items-center">
        <NavLinks />
        <div className="flex gap-1 items-center w-[18rem] border rounded-full px-4 focus-within:ring-1 ring-white">
          <FiSearch />
          <Input
            type="text"
            placeholder="Want do you want to listen to?"
            className="border-none bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
