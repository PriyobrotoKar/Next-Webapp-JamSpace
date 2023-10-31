import React from "react";
import Image from "next/image";
import LoginButton from "../../../components/LoginButton";

const page = () => {
  return (
    <main className=" relative  flex h-[100svh] min-h-[30rem] items-center justify-center space-y-6 overflow-hidden text-center">
      <div className="w-[95%] translate-y-[22%] space-y-6 md:space-y-12">
        <div>
          <p className="text-2xl  md:text-3xl">Welcome To</p>
          <h1 className="text-5xl font-medium md:text-8xl">JamSpace</h1>
        </div>
        <p className="px-2 text-sm font-light text-neutral-300 md:mx-auto md:max-w-[40rem] md:text-base">
          Discover a vast library of songs, albums, and playlists. Enjoy
          personalized recommendations, secure authentication, and effortless
          playlist creation. Immerse yourself in the magic of music with
          JamSpace today.
        </p>
        <LoginButton />
        <div className=" -z-10 mx-auto  w-[30rem] max-w-[60rem] translate-x-4 translate-y-6 rounded-3xl border bg-black p-4 md:w-[80%]">
          <Image
            className="rounded-2xl md:hidden"
            alt=""
            src={"/loginMobile.png"}
            width={600}
            height={300}
          />
          <Image
            className="hidden w-full rounded-2xl md:block"
            alt=""
            src={"/loginDesktop.png"}
            width={1500}
            height={1000}
          />
        </div>
      </div>
      <div className="absolute -bottom-40 -z-20 h-[20rem] w-full rounded-full bg-orange-900 opacity-80 blur-[200px] md:w-[70rem]"></div>
    </main>
  );
};
export default page;
