import { dateAdded, duration } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { LuClock3 } from "react-icons/lu";
import { FaPlay } from "react-icons/fa6";

const AlbumPlaylistSongs = ({ data }: any) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between gap-6 text-sm text-neutral-300 border-b px-3 py-2">
        <div className="flex flex-1 gap-4 items-center">
          <div className="w-4 text-right">#</div>
          <div>Title</div>
        </div>
        <div className="flex flex-1  items-center">
          <div className="flex-1">Album</div>
          <div className="flex-1 text-center">Date Added</div>
          <LuClock3 className="w-7 text-center" />
        </div>
      </div>
      <div className="space-y-2 mt-4">
        {data.tracks.items.map((item: any, i: number) => {
          if (data.type === "playlist") {
            const {
              added_at,
              track: { album, name, artists, duration_ms, id },
            } = item;
            return (
              <div
                key={id}
                className="flex justify-between gap-6 items-center rounded-xl transition group hover:bg-orange-950/40 px-3 py-2"
              >
                <div className="flex gap-4 items-center flex-1">
                  <div className="min-w-[1rem] text-right relative">
                    <div className="group-hover:invisible text-neutral-400 visible">
                      {i + 1}
                    </div>
                    <FaPlay
                      className={
                        "group-hover:visible invisible absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/2"
                      }
                    />
                  </div>
                  <div className="flex  gap-2">
                    <div className="flex-[0_0_auto]">
                      <Image
                        className=" rounded-[8px]"
                        src={album.images[0].url}
                        alt=""
                        width={48}
                        height={48}
                      />
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="line-clamp-1">{name}</div>
                      <div className="line-clamp-1 text-xs text-neutral-400">
                        {artists.map((artist: any, i: number) => {
                          return (
                            <span>
                              {artist.name +
                                (i !== artists.length - 1 ? ", " : "")}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-center flex-1 text-neutral-400 text-sm">
                  <div className="flex-1 line-clamp-1 text-left ">
                    {album.name}
                  </div>
                  <div className="flex-1">{dateAdded(added_at)}</div>
                  <div className="w-7">{duration(duration_ms)}</div>
                </div>
              </div>
            );
          } else {
            const { name, artists, duration_ms, id } = item;
            return <div key={id}></div>;
          }
        })}
      </div>
    </div>
  );
};

export default AlbumPlaylistSongs;
