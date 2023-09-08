"use client";

import useFetch from "@/hooks/useFetch";
import { format } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { LoadingAbout } from "./LoadingUI";
import { AboutErrorUI } from "./ErrorUI";

const AboutArtist = () => {
  const { data: session } = useSession();
  const { data: currentSong } = useFetch(
    "me/player/currently-playing",
    session?.accessToken
  );

  const { data: aboutArtist, loading } = useFetch(
    currentSong ? `artists/${currentSong.item.artists[0].id}` : "",
    session?.accessToken
  );

  return (
    <div>
      <h1 className="mb-4">About The Artist</h1>
      {loading ? (
        <LoadingAbout />
      ) : aboutArtist ? (
        <div className="bg-orange-950/30 p-4 rounded-2xl space-y-3 overflow-hidden">
          <div className="relative ">
            <Image
              className="h-64 w-full relative z-10 object-cover object-[50%_22%] rounded-xl"
              src={aboutArtist?.images[0].url}
              alt=""
              width={400}
              height={300}
            />
            <Image
              className="h-64 w-full absolute inset-0 blur-3xl  object-cover object-[50%_22%] rounded-xl"
              src={aboutArtist?.images[0].url}
              alt=""
              width={400}
              height={300}
              quality={50}
            />
          </div>
          <h2 className="font-semibold text-xl">{aboutArtist?.name}</h2>
          <p className="text-sm text-neutral-400">{`${format(
            aboutArtist?.followers.total
          )} monthly active listeners`}</p>
          <div className="flex gap-2 flex-wrap">
            {aboutArtist?.genres.map((genre: string, i: number) => {
              if (i === 3) return;
              return (
                <div className="bg-neutral-800/30 text-sm  px-4 py-2 rounded-full">
                  {genre}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <AboutErrorUI />
      )}
    </div>
  );
};

export default AboutArtist;
