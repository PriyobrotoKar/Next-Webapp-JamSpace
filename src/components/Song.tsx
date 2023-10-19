"use client";
import { putDataFromApi } from "@/hooks/useFetch";
import fetchApi, { fetchPostApi } from "@/lib/fetchApi";
import { dateAdded, duration } from "@/lib/utils";
import {
  updateCurrSong,
  updatePlayingState,
} from "@/reducer/currentlyPlaying/currenlyPlayingSlice";
import { fetchData } from "next-auth/client/_utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const Song = ({ item, i }: { item: any; i: number }) => {
  const {
    added_at,
    track: { album, name, artists, duration_ms, id, uri },
  } = item;
  const { data: session } = useSession();
  const dispatch = useDispatch();

  const playSong = async () => {
    try {
      await putDataFromApi(
        "me/player/play",
        {
          uris: [uri],
        },
        session?.accessToken,
      );
      dispatch(updateCurrSong(item));
      dispatch(updatePlayingState(true));
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div
      onClick={playSong}
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

export default Song;
