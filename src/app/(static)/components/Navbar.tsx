import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Link
      href={"/"}
      className="bg-gradient-to-b from-black px-4 py-4 text-xl font-medium md:px-6 md:py-8 md:text-2xl"
    >
      Jam<span className="text-gray-400">Space</span>
    </Link>
  );
};

export default Navbar;
