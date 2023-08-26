"use client";
import { signOut } from "next-auth/react";
import React from "react";

type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button onClick={() => signOut()} className="bg-white text-black">
      {text}
    </button>
  );
};

export default Button;
