"use client";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button
      className="bg-orange-600  rounded-full text-xl font-medium px-2 py-2 flex items-center gap-2 pr-4 mx-auto hover:bg-green-600 transition duration-500"
      onClick={() => signIn("spotify", { callbackUrl: "/" })}
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
