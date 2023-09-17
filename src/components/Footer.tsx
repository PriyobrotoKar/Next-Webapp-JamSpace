import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className=" mt-6 py-12 px-4 text-neutral-400 border-t border-neutral-800 space-y-2">
      <div className="flex justify-between">
        <div>
          <Link
            href={"/"}
            className="text-xl md:text-2xl font-medium text-white "
          >
            Jam<span className="text-gray-400">Space</span>
          </Link>
        </div>
        <ul className="flex gap-4 items-center text-2xl">
          <li className="hover:text-white transition">
            <Link href={"https://www.instagram.com/_.d.a.n.t.e_._/"}>
              <AiOutlineInstagram />
            </Link>
          </li>
          <li className="hover:text-white transition">
            <Link href={"https://www.linkedin.com/in/priyobrotokar/"}>
              <BiLogoLinkedinSquare />
            </Link>
          </li>
          <li className="hover:text-white transition">
            <Link href={"https://github.com/PriyobrotoKar"}>
              <AiFillGithub />
            </Link>
          </li>
        </ul>
      </div>
      <div>© 2023 JamSpace. All rights reserved. </div>
    </footer>
  );
};

export default Footer;
