import React from "react";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex justify-between  px-4 pb-4 pt-10 text-gray-400 md:px-6 md:py-8">
      <a href="https://github.com/PriyobrotoKar/Next-Webapp-JamSpace">
        <div className="flex items-center gap-2 transition-colors hover:text-white">
          <FiGithub />
          <div className="hidden md:block">Github Repository</div>
        </div>
      </a>
      <div className="text-right text-sm md:text-base">
        <a
          className="transition-colors hover:text-white"
          href="https://twitter.com/priyobrotokar"
        >
          Twitter
        </a>{" "}
        /{" "}
        <a
          className="transition-colors hover:text-white"
          href="https://www.instagram.com/_.d.a.n.t.e_._/"
        >
          Instagram
        </a>{" "}
        /{" "}
        <a
          className="transition-colors hover:text-white"
          href="https://www.linkedin.com/in/priyobrotokar/"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
