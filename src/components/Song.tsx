"use client";

import { playSong } from "@/lib/playSong";
import { dateAdded, duration } from "@/lib/utils";
import { RootState } from "@/store/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaPlay } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

export const SongVeryLarge = ({ item }: any) => {
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const currSong = useSelector(
    (state: RootState) => state.currPlayingSong.song,
  );
  const isPlaying = useSelector(
    (state: RootState) => state.currPlayingSong.isPlaying,
  );

  const track = item.items[0].track;
  return (
    <div
      onClick={async () => {
        try {
          await playSong(track.uri, session, { track }, track, dispatch);
        } catch (error) {
          toast(
            (t) => (
              <Link className="flex items-center gap-2" href={"/help"}>
                Unable to play song <AiFillInfoCircle className={"text-xl"} />
              </Link>
            ),
            {
              style: {
                background: "#eb4823",
                color: "white",
              },
            },
          );
        }
      }}
      className={`space-y-4 rounded-xl p-4 transition hover:bg-orange-950/40 ${
        isPlaying && currSong.id === track.id ? "bg-orange-950/40" : ""
      }`}
    >
      <div>
        <Image
          className="w-full rounded-2xl"
          src={item?.items[0].track.album.images[0].url}
          alt=""
          width={500}
          height={500}
        />
      </div>
      <div>
        <h2 className="line-clamp-1">{item?.items[0].track.name}</h2>
        <p className="line-clamp-1 text-sm text-neutral-400">
          {item?.items[0].track.artists.map((artist: any) => {
            return (
              <span key={artist.id} className="">{`${artist.name}, `}</span>
            );
          })}
        </p>
      </div>
    </div>
  );
};

export const SongLarge = ({
  item,
  type,
  albumImgs,
  i,
}: {
  item: any;
  albumImgs?: any[];
  type: string;
  i: number;
}) => {
  const { data: session } = useSession();
  const currSong = useSelector(
    (state: RootState) => state.currPlayingSong.song,
  );
  const isPlaying = useSelector(
    (state: RootState) => state.currPlayingSong.isPlaying,
  );
  const dispatch = useDispatch();

  if (type === "playlist") {
    const {
      added_at,
      track: { album, name, artists, duration_ms, id, uri },
    } = item;

    return (
      <div
        onClick={async () => {
          try {
            await playSong(uri, session, item, item.track, dispatch);
          } catch (error) {
            toast(
              (t) => (
                <Link className="flex items-center gap-2" href={"/help"}>
                  Unable to play song <AiFillInfoCircle className={"text-xl"} />
                </Link>
              ),
              {
                style: {
                  background: "#eb4823",
                  color: "white",
                },
              },
            );
          }
        }}
        key={id}
        className={`group flex items-center justify-between gap-6 rounded-xl px-3 py-2 transition hover:bg-orange-950/40 ${
          isPlaying && currSong.id === id ? "bg-orange-950/20 " : ""
        }`}
      >
        <div className="flex flex-1 items-center gap-4">
          <div className="relative flex-[0_0_1.5rem] text-right">
            <div
              className={` text-neutral-400 group-hover:invisible ${
                isPlaying && currSong.id === id ? "invisible" : "visible"
              }`}
            >
              {i + 1}
            </div>
            <FaPlay
              className={` absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 group-hover:visible  ${
                isPlaying && currSong.id === id
                  ? "visible text-primary"
                  : "invisible"
              }
              `}
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
        <div className="flex justify-end text-center text-sm text-neutral-400 md:flex-1 md:justify-between">
          <Link
            href={`/album/${album.id}`}
            className="line-clamp-1 hidden flex-1 text-left hover:underline group-hover:text-white md:block"
          >
            {album.name}
          </Link>
          <div className="hidden flex-1 md:block">{dateAdded(added_at)}</div>
          <div className="w-7">{duration(duration_ms)}</div>
        </div>
      </div>
    );
  } else {
    const { name, artists, duration_ms, uri, id } = item;
    const song = { track: { album: { images: albumImgs }, ...item } };
    const queue = { album: { images: albumImgs }, ...item };
    return (
      <div
        onClick={async () => {
          try {
            await playSong(uri, session, song, queue, dispatch);
          } catch (error) {
            toast(
              (t) => (
                <Link className="flex items-center gap-2" href={"/help"}>
                  Unable to play song <AiFillInfoCircle className={"text-xl"} />
                </Link>
              ),
              {
                style: {
                  background: "#eb4823",
                  color: "white",
                },
              },
            );
          }
        }}
        key={id}
        className="group flex items-center justify-between gap-6 rounded-xl px-3 py-2 transition hover:bg-orange-950/40"
      >
        <div className="flex flex-1 items-center gap-4">
          <div className="relative min-w-[1rem] text-right">
            <div className="visible text-neutral-400 group-hover:invisible">
              {i + 1}
            </div>
            <FaPlay
              className={`invisible absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 group-hover:visible  ${
                isPlaying && currSong.id === id ? "visible" : ""
              }
              `}
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
                        {artist.name + (i !== artists.length - 1 ? ", " : "")}
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
};

export const SongMedium = ({ item }: { item: any }) => {
  const { album, name, artists, duration_ms, id, uri } = item;
  const { data: session } = useSession();
  const currSong = useSelector(
    (state: RootState) => state.currPlayingSong.song,
  );
  const isPlaying = useSelector(
    (state: RootState) => state.currPlayingSong.isPlaying,
  );
  const dispatch = useDispatch();

  return (
    <div
      onClick={async () => {
        try {
          await playSong(uri, session, { track: item }, item, dispatch);
        } catch (error) {
          toast(
            (t) => (
              <Link className="flex items-center gap-2" href={"/help"}>
                Unable to play song <AiFillInfoCircle className={"text-xl"} />
              </Link>
            ),
            {
              style: {
                background: "#eb4823",
                color: "white",
              },
            },
          );
        }
      }}
      className={`group flex justify-between gap-4 rounded-[12px] p-3 transition-colors hover:bg-orange-950/30 ${
        isPlaying && currSong.id === id ? "bg-orange-950/20 " : ""
      }`}
    >
      <div
        className={`flex group-hover:gap-4 ${
          isPlaying && currSong.id === id ? "gap-4" : ""
        }`}
      >
        <div
          className={`w-0 self-center opacity-0 group-hover:opacity-100 ${
            isPlaying && currSong.id === id ? "text-primary opacity-100" : ""
          }`}
        >
          <FaPlay />
        </div>
        <div
          className={`flex gap-4 transition-all group-hover:translate-x-4 ${
            isPlaying && currSong.id === id ? "translate-x-4" : ""
          }`}
        >
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

export const SongSmall = ({ track }: any) => {
  const { data: session } = useSession();
  const currSong = useSelector(
    (state: RootState) => state.currPlayingSong.song,
  );
  const isPlaying = useSelector(
    (state: RootState) => state.currPlayingSong.isPlaying,
  );
  const dispatch = useDispatch();
  return (
    <div
      onClick={async () => {
        try {
          await playSong(track.uri, session, { track: track }, track, dispatch);
        } catch (error) {
          toast(
            (t) => (
              <Link className="flex items-center gap-2" href={"/help"}>
                Unable to play song <AiFillInfoCircle className={"text-xl"} />
              </Link>
            ),
            {
              style: {
                background: "#eb4823",
                color: "white",
              },
            },
          );
        }
      }}
      className={`group flex items-center justify-between gap-4 rounded-xl px-3 py-2 hover:bg-orange-950/40 ${
        isPlaying && currSong.id === track.id ? "bg-orange-950/40" : ""
      }`}
    >
      <div
        className={`text-sm group-hover:text-orange-500 ${
          isPlaying && currSong.id === track.id ? "text-orange-500" : ""
        }`}
      >
        <FaPlay />
      </div>
      <div className="line-clamp-1 flex-1">{track.name}</div>
      <div className="text-sm text-neutral-400">
        {duration(track.duration_ms)}
      </div>
    </div>
  );
};
