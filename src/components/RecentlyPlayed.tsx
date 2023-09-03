"use client";
import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const RecentlyPlayed = () => {
  const { data: session } = useSession();
  const { data, loading } = useFetch(
    "me/player/recently-played",
    session?.accessToken,
    { limit: 5 }
  );
  return (
    <div>
      <h1 className="mb-6 text-xl font-semibold">Recently Played</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex gap-10">
          <div className="flex-1 space-y-4">
            <div>
              <Image
                className="w-full rounded-2xl"
                src={data?.items[0].track.album.images[0].url}
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div>
              <h2 className="line-clamp-1">{data?.items[0].track.name}</h2>
              <p className="line-clamp-1 text-sm text-neutral-400">
                {data?.items[0].track.artists.map((artist: any) => {
                  return <span className="">{`${artist.name}, `}</span>;
                })}
              </p>
            </div>
          </div>
          <div className="flex-[3_3_0%] space-y-2">
            {data?.items.map((item: any, i: number) => {
              if (i === 0) return;
              return (
                <div className="flex justify-between hover:bg-orange-950/30 transition-colors p-3  rounded-[12px]">
                  <div className="flex gap-4">
                    <div>
                      <Image
                        className="rounded-[8px]"
                        src={item.track.album.images[2].url}
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="space-y-1">
                      <h2>{item.track.name}</h2>
                      <p className="line-clamp-1 text-xs text-neutral-400">
                        {item.track.artists.map((artist: any) => {
                          return <span className="">{`${artist.name}, `}</span>;
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-400 self-center">
                    {(item.track.duration_ms / 60000).toFixed(0)}:
                    {Math.floor((item.track.duration_ms / 1000) % 60) < 10
                      ? `0${Math.floor((item.track.duration_ms / 1000) % 60)}`
                      : Math.floor((item.track.duration_ms / 1000) % 60)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentlyPlayed;
