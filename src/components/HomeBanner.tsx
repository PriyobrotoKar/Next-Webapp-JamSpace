"use client";
import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const HomeBanner = () => {
  const { data: session } = useSession();
  const [featPlaylist, setFeatPlaylist] = useState<any>();
  const { data, loading } = useFetch(
    "browse/featured-playlists",
    session?.accessToken,
    { country: "IN", limit: 4 }
  );
  useEffect(() => {
    if (data) {
      setFeatPlaylist(data.playlists.items[Math.floor(Math.random() * 4)]);
    }
  }, [data]);
  return (
    <div className="flex gap-10 justify-between bg-gradient-to-bl from-[#272727] to-neutral-950 p-6 2xl:p-8 rounded-3xl  w-full">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="flex flex-col gap-4 xl:gap-6 justify-between flex-[2_2_0%]">
            <div className="space-y-3 xl:space-y-4">
              <div className="text-neutral-300">PLAYLIST</div>
              <h2 className="text-4xl xl:text-5xl 2xl:text-6xl font-medium">
                {featPlaylist?.name}
              </h2>
              <p className="text-neutral-500  xl:text-xl">
                {featPlaylist?.description}
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Button className=" xl:text-2xl font-semibold p-5 xl:p-7">
                PLAY
              </Button>
              <Button
                variant={"secondary"}
                className=" xl:text-2xl font-medium p-5 xl:p-7"
              >
                FOLLOW
              </Button>
            </div>
          </div>
          <div className="flex-[1.5_1.5_0%] max-w-[19rem] ">
            <Image
              className="rounded-2xl h-full  w-full"
              alt=""
              src={featPlaylist?.images[0].url}
              width={300}
              height={300}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeBanner;
