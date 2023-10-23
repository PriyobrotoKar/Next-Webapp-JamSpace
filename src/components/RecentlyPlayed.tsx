import Image from "next/image";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import fetchApi from "@/lib/fetchApi";

import { FaPlay } from "react-icons/fa6";
import { duration } from "@/lib/utils";

const RecentlyPlayed = async () => {
  const session = await getServerSession(authOptions);
  const data = await fetchApi(
    "me/player/recently-played",
    session!.accessToken,
    { limit: 50 },
  );
  return (
    <div className="px-4">
      <h1 className="mb-6 text-xl font-semibold">Recently Played</h1>
      <div className="flex md:gap-4 xl:gap-10">
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
                return (
                  <span key={artist.id} className="">{`${artist.name}, `}</span>
                );
              })}
            </p>
          </div>
        </div>
        <div className="flex-1   md:flex-[2_2_0%] md:space-y-2 xl:flex-[3_3_0%]">
          {data?.items.map((item: any, i: number) => {
            if (i === 0) return;
            if (i > 4) return;
            if (data?.items[i - 1].track.id === item.track.id) return;
            return (
              <div
                key={item.track.id}
                className="group flex justify-between gap-4 rounded-[12px] p-3 transition-colors hover:bg-orange-950/30"
              >
                <div className="flex group-hover:gap-4">
                  <div className="w-0 self-center opacity-0 group-hover:opacity-100">
                    <FaPlay />
                  </div>
                  <div className="flex gap-4 transition-all group-hover:translate-x-4">
                    <div>
                      <Image
                        className="min-w-[3rem] rounded-[8px]"
                        src={item.track.album.images[2].url}
                        alt=""
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="space-y-1">
                      <h2 className="line-clamp-1">{item.track.name}</h2>
                      <p className="line-clamp-1 text-xs text-neutral-400">
                        {item.track.artists.map((artist: any) => {
                          return (
                            <span
                              key={artist.id}
                              className=""
                            >{`${artist.name}, `}</span>
                          );
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden self-center text-sm text-neutral-400 md:block">
                  {duration(item.track.duration_ms)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
