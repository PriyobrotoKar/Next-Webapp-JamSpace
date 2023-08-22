"use client";
import React from "react";
import { signIn } from "next-auth/react";

const page = () => {
  return (
    <div>
      <button
        className="bg-red-300 px-2 py-1"
        onClick={() => signIn("spotify", { callbackUrl: "/" })}
      >
        Login
      </button>
    </div>
  );
};
export default page;
