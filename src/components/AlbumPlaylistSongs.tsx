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
          return (
            <SongLarge
              key={item.id}
              type={data.type}
              albumImgs={data?.images}
              item={item}
              i={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AlbumPlaylistSongs;
