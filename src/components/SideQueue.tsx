"use client";
import useFetch, { fetchDataFromApi, postDataFromApi } from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LoadingLib } from "./LoadingUI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateUserQueue } from "@/reducer/userQueue/userQueueSlice";
import toast from "react-hot-toast";
import { SideQueueErrorUI } from "./ErrorUI";
import {
  updateCurrSong,
  updatePlayingState,
} from "@/reducer/currentlyPlaying/currenlyPlayingSlice";

const SideQueue = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const queue = useSelector((state: RootState) => state.userQueue.queue);
  const song = useSelector((state: RootState) => state.currPlayingSong.song);
  const dispatch = useDispatch();
  const { data: playerState } = useFetch("me/player", session?.accessToken);

  const fetchQueue = async () => {
    try {
      setLoading(true);
      const data = await fetchDataFromApi(
        "me/player/queue",
        session?.accessToken,
      );
      setLoading(false);
      dispatch(updateUserQueue(data.queue));
    } catch (error: any) {
      toast.error("Something went wrong!");
    }
  };

  const handleNext = async () => {
    try {
      if (session) {
        await postDataFromApi("me/player/next", {}, session?.accessToken);
        dispatch(updateCurrSong({ track: queue[0] }));
        if (song.id !== queue[0].id) {
          dispatch(updatePlayingState(true));
        } else {
          if (
            playerState.repeat_state === "context" ||
            playerState.repeat_state === "track"
          )
            dispatch(updatePlayingState(true));
        }

        dispatch(updateUserQueue(queue.slice(1)));
      }
    } catch (error: any) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    if (session) {
      fetchQueue();
    }
  }, [session]);
  useEffect(() => {
    if (!queue.length && song && session) {
      fetchQueue();
    }
  }, [queue]);

  return (
    <div>
      <h1 className="mb-4">Coming Up Next</h1>
      {loading ? (
        <LoadingLib />
      ) : song && queue ? (
        <>
          <button
            onClick={handleNext}
            className="flex w-full gap-3 p-2 transition-colors hover:bg-orange-950/30 md:rounded-[8px] xl:rounded-xl xl:pr-4"
          >
            <div>
              <Image
                className="min-w-[3rem] rounded-xl"
                alt=""
                src={queue[0]?.album.images[0].url}
                width={52}
                height={52}
              />
            </div>
            <div className="text-left">
              <div className="line-clamp-1 font-medium ">{queue[0]?.name}</div>
              <div className=" line-clamp-1">
                {queue[0]?.artists.map((artist: any, i: number) => {
                  return (
                    <span key={artist.id} className="text-sm text-neutral-400">
                      {artist.name +
                        (i !== queue[0]?.artists.length - 1 ? ", " : "")}
                    </span>
                  );
                })}
              </div>
            </div>
          </button>
        </>
      ) : (
        <SideQueueErrorUI />
      )}
    </div>
  );
};

export default SideQueue;
