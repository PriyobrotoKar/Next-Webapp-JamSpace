import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mb-40 mt-auto px-4">
      <div className="mt-10 flex justify-between border-t border-neutral-800 py-12  text-neutral-400">
        <div>
          <Link
            href={"/"}
            className="text-xl font-medium text-white md:text-2xl "
          >
            Jam<span className="text-gray-400">Space</span>
          </Link>
        </div>
        <ul className="flex items-center gap-4 text-2xl">
          <li className="transition hover:text-white">
            <Link href={"https://www.instagram.com/_.d.a.n.t.e_._/"}>
              <AiOutlineInstagram />
            </Link>
          </li>
          <li className="transition hover:text-white">
            <Link href={"https://www.linkedin.com/in/priyobrotokar/"}>
              <BiLogoLinkedinSquare />
            </Link>
          </li>
          <li className="transition hover:text-white">
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
