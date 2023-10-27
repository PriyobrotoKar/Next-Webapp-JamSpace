import { dateAdded, duration } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { LuClock3 } from "react-icons/lu";
import { FaPlay } from "react-icons/fa6";
import Link from "next/link";
import { SongLarge } from "./Song";

const AlbumPlaylistSongs = ({ data }: any) => {
  return (
    <div className="mt-10">
      <div className="flex justify-between gap-6 border-b px-3 py-2 text-sm text-neutral-300">
        <div className="flex flex-1 items-center gap-4">
          <div className="w-6 text-right">#</div>
          <div>Title</div>
        </div>
        <div
          className={`flex items-center justify-end ${
            data.type === "playlist" && "flex-1"
          }`}
        >
          {data.type === "playlist" && (
            <div className="hidden flex-1 md:block">Album</div>
          )}
          {data.type === "playlist" && (
            <div className="hidden flex-1 text-center md:block">Date Added</div>
          )}
          <LuClock3 className="w-7 text-center" />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {data.tracks.items.map((item: any, i: number) => {
          if (data.type === "playlist") {
            return <SongLarge key={item.id} item={item} i={i} />;
          } else {
            const { name, artists, duration_ms, id } = item;
            return (
              <div
                key={id}
                className="group flex items-center justify-between gap-6 rounded-xl px-3 py-2 transition hover:bg-orange-950/40"
              >
                <div className="flex flex-1 items-center gap-4">
                  <div className="relative min-w-[1rem] text-right">
                    <div className="visible text-neutral-400 group-hover:invisible">
                      {i + 1}
                    </div>
                    <FaPlay
                      className={
                        "invisible absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 group-hover:visible"
                      }
                    />
                  </div>
                  <div className="flex  gap-2">
                    <div className="flex-1 space-y-1">
                      <Link
                        href={`/track/${id}`}
                        className="line-clamp-1 hover:underline"
                      >
                        {name}
                      </Link>
                      <div className="line-clamp-1 text-xs text-neutral-400">
                        {artists.map((artist: any, i: number) => {
                          return (
                            <Link key={artist.id} href={`/artist/${artist.id}`}>
                              <span className="hover:underline group-hover:text-white">
                                {artist.name +
                                  (i !== artists.length - 1 ? ", " : "")}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    "flex justify-between text-center  text-sm text-neutral-400"
                  }
                >
                  <div className="w-7">{duration(duration_ms)}</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default AlbumPlaylistSongs;
