"use client";

import { playSong } from "@/lib/helperActions";
import { dateAdded, duration } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";

export const SongLarge = ({ item, i }: { item: any; i: number }) => {
  const {
    added_at,
    track: { album, name, artists, duration_ms, id, uri },
  } = item;
  const { data: session } = useSession();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => playSong(uri, session, item, item.track, dispatch)}
      key={id}
      className="group flex items-center justify-between gap-6 rounded-xl px-3 py-2 transition hover:bg-orange-950/40"
    >
      <div className="flex flex-1 items-center gap-4">
        <div className="relative flex-[0_0_1.5rem] text-right">
          <div className="visible text-neutral-400 group-hover:invisible">
            {i + 1}
          </div>
          <FaPlay
            className={
              "invisible absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 group-hover:visible"
            }
          />
        </div>
        <div className="flex flex-1  gap-2">
          <div className="flex-[0_0_auto]">
            <Image
              className=" rounded-[8px]"
              src={album.images[0].url}
              alt=""
              width={48}
              height={48}
            />
          </div>
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
                    <span className="hover:text-white hover:underline">
                      {artist.name + (i !== artists.length - 1 ? ", " : "")}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-between text-center text-sm text-neutral-400">
        <Link
          href={`/album/${album.id}`}
          className="line-clamp-1 flex-1 text-left hover:underline group-hover:text-white"
        >
          {album.name}
        </Link>
        <div className="flex-1">{dateAdded(added_at)}</div>
        <div className="w-7">{duration(duration_ms)}</div>
      </div>
    </div>
  );
};

export const SongMedium = ({ item }: { item: any }) => {
  const { album, name, artists, duration_ms, id, uri } = item;
  const { data: session } = useSession();
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => playSong(uri, session, { track: item }, item, dispatch)}
      key={id}
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
              src={album.images[2].url}
              alt=""
              width={50}
              height={50}
            />
          </div>
          <div className="space-y-1">
            <h2 className="line-clamp-1">{name}</h2>
            <p className="line-clamp-1 text-xs text-neutral-400">
              {artists.map((artist: any, i: number) => {
                return (
                  <span key={artist.id} className="">
                    {artist.name + (i !== artists.length - 1 ? ", " : "")}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
      <div className="self-center text-sm text-neutral-400">
        {duration(duration_ms)}
      </div>
    </div>
  );
};
