"use client";
import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideQueue = () => {
  const { data: session } = useSession();
  const { data, loading } = useFetch("me/player/queue", session?.accessToken);

  return (
    <div>
      <h1 className="mb-4">Coming Up Next</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Link
            href={`/${data.queue[0]?.type}/${data.queue[0]?.id}`}
            className="flex gap-3 p-2 xl:pr-4 hover:bg-orange-950/30 md:rounded-[8px] xl:rounded-xl transition-colors"
          >
            <div className="min-w-full xl:min-w-max  md:rounded-[6px] xl:rounded-xl overflow-hidden">
              <Image
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
      )}
    </div>
  );
};

export default SideQueue;
