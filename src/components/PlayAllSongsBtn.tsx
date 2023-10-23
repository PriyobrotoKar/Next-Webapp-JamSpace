"use client";
import React, { ReactNode } from "react";
import { Button } from "./ui/button";
import { playSongs } from "@/lib/playSong";
import { Session } from "next-auth";
import { FaPlay } from "react-icons/fa6";
import { useDispatch } from "react-redux";

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
      onClick={() =>
        playSongs(data.uri, firstSong, allTracks, session, dispatch)
      }
      className="space-x-2 p-6 text-xl text-white"
    >
      {children}
    </Button>
  );
};

export default PlayAllSongsBtn;
