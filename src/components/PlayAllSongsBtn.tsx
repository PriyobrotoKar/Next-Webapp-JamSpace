"use client";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { playSongs } from "@/lib/playSong";
import { Session } from "next-auth";
import { FaPlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import Link from "next/link";
import { AiFillInfoCircle } from "react-icons/ai";

const PlayAllSongsBtn = ({
  data,
  session,
  children,
}: {
  data: any;
  session: Session | null;
  children: ReactNode;
}) => {
  const dispatch = useDispatch();
  const allTracks =
    data.type === "playlist"
      ? data.tracks.items.map(({ track }: { track: any }) => ({
          ...track,
        }))
      : data.tracks.items.map((item: { item: any }) => ({
          album: { images: data.images },
          ...item,
        }));
  allTracks.shift();

  const firstSong =
    data.type === "playlist"
      ? data.tracks.items[0]
      : { track: { album: { images: data.images }, ...data.tracks.items[0] } };

  return (
    <Button
      onClick={async () => {
        try {
          await playSongs(data.uri, firstSong, allTracks, session, dispatch);
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
      className="space-x-2 p-6 text-xl text-white"
    >
      {children}
    </Button>
  );
};

export default PlayAllSongsBtn;
