"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

const LoginButton = () => {
  return (
    <button
      className="mx-auto  flex items-center gap-2 rounded-full bg-orange-600 px-2 py-2 pr-4 text-xl font-medium transition duration-500 hover:bg-green-600"
      onClick={() => {
        toast.loading("Logging in");
        signIn("spotify", { callbackUrl: "/" });
      }}
    >
      <div>
        <Image
          className="cursor-pointer"
          src={"/logos/spotify.svg"}
          alt=""
          width={40}
          height={40}
        />
      </div>
      <span>Login with Spotify</span>
    </button>
  );
};

export default LoginButton;
