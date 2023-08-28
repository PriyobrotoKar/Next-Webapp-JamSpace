import React from "react";
import Image from "next/image";
import LoginButton from "../../../components/LoginButton";

const page = () => {
  return (
    <main className=" text-center  space-y-6 min-h-[30rem] h-[100svh] overflow-hidden relative flex justify-center items-center">
      <div className="w-[95%] space-y-6 md:space-y-12 translate-y-[22%]">
        <div>
          <p className="text-2xl  md:text-3xl">Welcome To</p>
          <h1 className="text-5xl md:text-8xl font-medium">JamSpace</h1>
        </div>
        <p className="text-sm md:text-base md:mx-auto md:max-w-[40rem] px-2 font-light text-neutral-300">
          Discover a vast library of songs, albums, and playlists. Enjoy
          personalized recommendations, secure authentication, and effortless
          playlist creation. Immerse yourself in the magic of music with
          JamSpace today.
        </p>
        <LoginButton />
        <div className=" bg-black -z-10  border rounded-3xl p-4 translate-x-4 w-[30rem] md:w-[80%] max-w-[60rem] translate-y-6 mx-auto">
          <Image
            className="rounded-2xl md:hidden"
            alt=""
            src={"/loginMobile.png"}
            width={600}
            height={300}
          />
          <Image
            className="rounded-2xl hidden md:block w-full"
            alt=""
            src={"/loginDesktop.png"}
            width={1500}
            height={1000}
          />
        </div>
      </div>
      <div className="absolute -bottom-40 w-full md:w-[70rem] h-[20rem] bg-orange-900 blur-[200px] -z-20 opacity-80 rounded-full"></div>
    </main>
  );
};
export default page;
