"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import useFetch, { fetchDataFromApi } from "@/hooks/useFetch";
import fetchApi from "@/lib/fetchApi";
import { duration } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsFillVolumeDownFill, BsRepeat } from "react-icons/bs";
import { HiPause } from "react-icons/hi2";
import { MdShuffle } from "react-icons/md";

const Player = () => {
  const { data: session } = useSession();
  const [data, setData] = useState<any>();
  const [progressbar, setProgressbar] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const [songProgressDuration, setSongProgressDuration] = useState(0);

  useEffect(() => {
    if (session) {
      fetchDataFromApi(
        "me/player/currently-playing",
        session?.accessToken,
      ).then((data) => {
        if (data) {
          setData(data);
          setTotalDuration(data.item.duration_ms);
        }
      });
    }
  }, [session]);

  useEffect(() => {
    if (data) {
      setSongProgressDuration(data.progress_ms);
      const interval = setInterval(
        () => setSongProgressDuration((prev) => prev + 1000),
        1000,
      );
      return () => clearInterval(interval);
    }
  }, [data]);

  useEffect(() => {
    if (session) {
      if (songProgressDuration >= totalDuration) {
        fetchDataFromApi(
          "me/player/currently-playing",
          session?.accessToken,
        ).then((data) => {
          if (data) {
            setData(data);
            setTotalDuration(data.item.duration_ms);
            setSongProgressDuration(data.progress_ms);
          }
        });
      }
    }
  }, [songProgressDuration, session]);

  useEffect(() => {
    setProgressbar((songProgressDuration / totalDuration) * 100);
  }, [songProgressDuration]);

  return (
    <div className="fixed bottom-10 left-1/2 z-10 w-3/4 -translate-x-1/2  ">
      <Image
        className={
          "absolute bottom-3 left-10 -z-10  rounded-full " +
          (!data ? "hidden" : "block")
        }
        src={data ? data.item.album.images[0].url : ""}
        alt=""
        width={100}
        height={100}
        quality={60}
      />
      <div className="flex items-center justify-between rounded-lg  bg-neutral-900/50 px-10 backdrop-blur-2xl ">
        {/* Song Info */}
        <div className="flex flex-1 items-center gap-4">
          <div className="h-24 flex-[0_0_auto]">
            <Image
              className={
                "relative bottom-4  rounded-full " +
                (!data ? "hidden" : "block")
              }
              src={data ? data.item.album.images[0].url : ""}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="line-clamp-1 text-xl">
              {data ? data.item.name : ""}
            </div>
            <div className="line-clamp-1">
              {data &&
                data.item.artists.map((artist: any, i: number, arr: any[]) => {
                  if (i > 2) return;
                  return (
                    <span className="text-sm text-neutral-300" key={artist.id}>
                      {artist.name + (i !== arr.length - 1 ? ", " : "")}
                    </span>
                  );
                })}
            </div>
          </div>
        </div>
        {/*Controls */}
        <div className="flex-[2_2_0%] space-y-2">
          <div className="flex items-center justify-center gap-4 text-2xl">
            <div className="rounded-full p-2 text-xl  hover:bg-neutral-400/20">
              <MdShuffle />
            </div>
            <div className="rounded-full p-2  hover:bg-neutral-400/20">
              <BiSkipPrevious />
            </div>
            <div className="rounded-full bg-neutral-100 p-2 text-xl text-black">
              <HiPause />
            </div>
            <div className="rounded-full p-2  hover:bg-neutral-400/20">
              <BiSkipNext />
            </div>
            <div className="rounded-full p-2 text-lg  hover:bg-neutral-400/20">
              <BsRepeat />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 text-right text-xs text-neutral-300">
              {duration(songProgressDuration)}
            </div>
            <div className="h-1 flex-1 rounded-full bg-neutral-500 transition-all hover:scale-y-[180%]">
              <div
                style={{ width: `${progressbar}%` }}
                className={
                  "h-full  rounded-full bg-neutral-200 transition-all " +
                  (!data ? "w-0" : ``)
                }
              ></div>
            </div>
            <div className="w-8 text-xs text-neutral-300">
              {duration(data && data.item.duration_ms)}
            </div>
          </div>
        </div>
        {/*Volume Slider */}
        <div className="group flex flex-1 items-center justify-end gap-2">
          <div className="text-xl transition-all group-hover:scale-110">
            <BsFillVolumeDownFill />
          </div>
          <div>
            <div className="h-1 w-32 rounded-full bg-neutral-500 transition-all group-hover:h-2">
              <div className="h-full w-1/4 rounded-full bg-neutral-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
