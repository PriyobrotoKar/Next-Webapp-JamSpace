import React from "react";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="flex justify-between  px-6 pt-10 pb-8 text-gray-400">
      <a href="https://github.com/PriyobrotoKar/Next-Webapp-JamSpace">
        <div className="flex items-center gap-2 hover:text-white transition-colors">
          <FiGithub />
          <div>Github Repository</div>
        </div>
      </a>
      <div>
        <a
          className="hover:text-white transition-colors"
          href="https://twitter.com/priyobrotokar"
        >
          Twitter
        </a>{" "}
        /{" "}
        <a
          className="hover:text-white transition-colors"
          href="https://www.instagram.com/_.d.a.n.t.e_._/"
        >
          Instagram
        </a>{" "}
        /{" "}
        <a
          className="hover:text-white transition-colors"
          href="https://www.linkedin.com/in/priyobrotokar/"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
