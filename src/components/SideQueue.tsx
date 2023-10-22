"use client";
import useFetch, { fetchDataFromApi } from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LoadingLib } from "./LoadingUI";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateUserQueue } from "@/reducer/userQueue/userQueueSlice";

const SideQueue = () => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(true);
  const queue = useSelector((state: RootState) => state.userQueue.queue);
  const song = useSelector((state: RootState) => state.currPlayingSong.song);
  const dispatch = useDispatch();

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
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (session) {
      fetchQueue();
    }
  }, [session]);
  useEffect(() => {
    if (!queue.length) {
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
          <Link
            href={`/${queue[0]?.type}/${queue[0]?.id}`}
            className="flex gap-3 p-2 transition-colors hover:bg-orange-950/30 md:rounded-[8px] xl:rounded-xl xl:pr-4"
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
            <div>
              <div className="line-clamp-1 font-medium ">{queue[0]?.name}</div>
              <div className=" line-clamp-1">
                {queue[0]?.artists.map((artist: any) => {
                  return (
                    <span key={artist.id} className="text-sm text-neutral-400">
                      {`${artist.name}, `}
                    </span>
                  );
                })}
              </div>
            </div>
          </Link>
        </>
      ) : (
        <div>No song currently playing</div>
      )}
    </div>
  );
};

export default SideQueue;
