"use client";

import toast from "react-hot-toast";
import { AiOutlineLink } from "react-icons/ai";

const CopyProfileLinkBtn = () => {
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard");
  };
  return (
    <button
      onClick={copyLinkToClipboard}
      className="absolute left-full top-0 translate-x-2 text-2xl text-neutral-300 hover:text-white"
    >
      <AiOutlineLink />
    </button>
  );
};

export default CopyProfileLinkBtn;
