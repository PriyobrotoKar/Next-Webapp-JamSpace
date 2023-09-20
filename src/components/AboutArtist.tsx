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
    session?.accessToken,
  );

  const { data: aboutArtist, loading } = useFetch(
    currentSong ? `artists/${currentSong.item.artists[0].id}` : "",
    session?.accessToken,
  );

  return (
    <div>
      <h1 className="mb-4">About The Artist</h1>
      {loading ? (
        <LoadingAbout />
      ) : aboutArtist ? (
        <div className="space-y-3 overflow-hidden rounded-2xl bg-orange-950/30 p-4">
          <div className="relative ">
            <Image
              className="relative z-10 h-64 w-full rounded-xl object-cover object-[50%_22%]"
              src={aboutArtist?.images[0].url}
              alt=""
              priority
              width={400}
              height={300}
            />
            <Image
              className="absolute inset-0 h-64 w-full rounded-xl  object-cover object-[50%_22%] blur-3xl"
              src={aboutArtist?.images[0].url}
              alt=""
              priority
              width={400}
              height={300}
              quality={50}
            />
          </div>
          <h2 className="text-xl font-semibold">{aboutArtist?.name}</h2>
          <p className="text-sm text-neutral-400">{`${format(
            aboutArtist?.followers.total,
          )} monthly active listeners`}</p>
          <div className="flex flex-wrap gap-2">
            {aboutArtist?.genres.map((genre: string, i: number) => {
              if (i === 3) return;
              return (
                <div
                  key={genre}
                  className="rounded-full bg-neutral-800/30  px-4 py-2 text-sm"
                >
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
