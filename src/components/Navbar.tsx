"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
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
            : "text-neutral-400 transition-colors hover:text-neutral-200"
        }
        href={"/"}
      >
        Music
      </Link>
      <Link
        className={
          pathname == "/podcasts"
            ? ""
            : "text-neutral-400 transition-colors hover:text-neutral-200"
        }
        href={"/"}
      >
        Podcasts
      </Link>
      <Link
        className={
          pathname == "/live"
            ? ""
            : "text-neutral-400 transition-colors hover:text-neutral-200"
        }
        href={"/"}
      >
        Live
      </Link>
    </nav>
  );
};

const Navbar = () => {
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
    <header className="sticky top-0 z-10 py-6 backdrop-blur-sm before:absolute before:-top-[30%] before:left-0 before:right-0 before:-z-10 before:mx-auto before:h-[180%] before:w-[95%] before:rounded-b-full before:bg-gradient-to-b before:from-orange-950/60 before:blur-xl">
      <div className="flex items-center justify-between">
        <NavLinks />
        <div className="flex w-[18rem] items-center gap-1 rounded-full border px-4 ring-white focus-within:ring-1">
          <FiSearch />
          <Input
            value={search}
            onChange={handleSearchInput}
            type="text"
            placeholder="Want do you want to listen to?"
            className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
