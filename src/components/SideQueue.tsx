"use client";
import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LoadingLib } from "./LoadingUI";

const SideQueue = () => {
  const { data: session } = useSession();
  const { data, loading } = useFetch("me/player/queue", session?.accessToken);

  return (
    <div>
      <h1 className="mb-4">Coming Up Next</h1>
      {loading ? (
        <LoadingLib />
      ) : data.currently_playing ? (
        <>
          <Link
            href={`/${data.queue[0]?.type}/${data.queue[0]?.id}`}
            className="flex gap-3 p-2 xl:pr-4 hover:bg-orange-950/30 md:rounded-[8px] xl:rounded-xl transition-colors"
          >
            <div>
              <Image
                className="rounded-xl min-w-[3rem]"
                alt=""
                src={data.queue[0]?.album.images[0].url}
                width={52}
                height={52}
              />
            </div>
            <div>
              <div className="font-medium line-clamp-1 ">
                {data.queue[0]?.name}
              </div>
              <div className=" line-clamp-1">
                {data.queue[0]?.artists.map((artist: any) => {
                  return (
                    <span className="text-sm text-neutral-400">
                      {`${artist.name}, `}
                    </span>
                  );
                })}
              </div>
            </div>
          </Link>
        </>
      ) : (
        <div>No song currently playing</div>
      )}
    </div>
  );
};

export default SideQueue;
