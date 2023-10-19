"use client";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import useFetch, { fetchDataFromApi, putDataFromApi } from "@/hooks/useFetch";
import fetchApi from "@/lib/fetchApi";
import { duration } from "@/lib/utils";
import {
  updateCurrSong,
  updatePlayingState,
} from "@/reducer/currentlyPlaying/currenlyPlayingSlice";
import { RootState } from "@/store/store";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { BsFillVolumeDownFill, BsRepeat } from "react-icons/bs";
import { FaPlay } from "react-icons/fa6";
import { HiPause } from "react-icons/hi2";
import { MdShuffle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Slider } from "./ui/slider";

const Player = () => {
  const { data: session } = useSession();
  const song = useSelector((state: RootState) => state.currPlayingSong.song);
  const isPlaying = useSelector(
    (state: RootState) => state.currPlayingSong.isPlaying,
  );
  const dispatch = useDispatch();
  const [totalDuration, setTotalDuration] = useState(0);

  const [songProgressDuration, setSongProgressDuration] = useState(0);

  useEffect(() => {
    if (session) {
      fetchDataFromApi(
        "me/player/currently-playing",
        session?.accessToken,
      ).then((data) => {
        if (data) {
          dispatch(updateCurrSong(data));
          setSongProgressDuration(data.progress_ms);
          setTotalDuration(data.item.duration_ms);
        }
      });
    }
  }, [session]);

  useEffect(() => {
    if (song) {
      setSongProgressDuration(song.progress_ms);
    }
  }, [song]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(
        () => setSongProgressDuration((prev) => prev + 1000),
        1000,
      );
      return () => clearInterval(interval);
    } else {
      setSongProgressDuration(songProgressDuration);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (session) {
      if (songProgressDuration >= totalDuration) {
        fetchDataFromApi(
          "me/player/currently-playing",
          session?.accessToken,
        ).then((data) => {
          console.log("call from player");
          if (data) {
            dispatch(updateCurrSong(data));
            setTotalDuration(data.item.duration_ms);
            setSongProgressDuration(data.progress_ms);
          }
        });
      }
    }
  }, [songProgressDuration]);

  const handlePlayPause = async () => {
    dispatch(updatePlayingState(!isPlaying));
    if (isPlaying) {
      try {
        await putDataFromApi("me/player/pause", {}, session?.accessToken);
      } catch (error: any) {
        console.error(error.message);
      }
    } else {
      try {
        await putDataFromApi(
          "me/player/play",
          {
            uris: [song.uri],
            position_ms: songProgressDuration,
          },
          session?.accessToken,
        );
      } catch (error: any) {
        console.error(error.message);
      }
    }
  };

  function debounce(func: (...args: any) => void, delay = 1000) {
    let timeout: string | number | NodeJS.Timeout | undefined;

    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const debouncedSeekPosition = useCallback(
    debounce(async (i) => {
      try {
        await putDataFromApi(
          `me/player/seek?position_ms=${Number(i) + 1000}`,
          {},
          session?.accessToken,
        );
      } catch (error: any) {
        console.error(error.message);
      }
    }, 800),
    [session],
  );

  const handleSeeking = (i: number[]) => {
    debouncedSeekPosition(i);
    setSongProgressDuration(Number(i));
  };

  return (
    <div className="fixed bottom-10 left-1/2 z-10 w-3/4 -translate-x-1/2  ">
      <Image
        className={
          "absolute bottom-3 left-10 -z-10  rounded-full " +
          (!song ? "hidden" : "block")
        }
        src={song ? song.album.images[0].url : ""}
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
                (!song ? "hidden" : "block")
              }
              src={song ? song.album.images[0].url : ""}
              alt=""
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="line-clamp-1 text-xl">{song ? song.name : ""}</div>
            <div className="line-clamp-1">
              {song &&
                song.artists.map((artist: any, i: number, arr: any[]) => {
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
            <button
              onClick={handlePlayPause}
              className="rounded-full bg-neutral-100 p-2 text-xl text-black hover:scale-110"
            >
              {isPlaying ? (
                <HiPause />
              ) : (
                <FaPlay className="relative left-[0.05rem] text-base" />
              )}
            </button>
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
            <Slider
              defaultValue={[0]}
              value={[songProgressDuration]}
              onValueChange={handleSeeking}
              max={totalDuration}
              step={1000}
            />

            <div className="w-8 text-xs text-neutral-300">
              {duration(song && totalDuration)}
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
