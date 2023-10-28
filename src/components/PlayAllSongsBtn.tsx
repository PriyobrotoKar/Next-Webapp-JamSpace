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
  className,
}: {
  data: any;
  session: Session | null;
  className: string;
  children: ReactNode;
}) => {
  const dispatch = useDispatch();
  let allTracks: any[];
  let firstSong: any = null;

  if (data.type === "playlist") {
    allTracks = data.tracks.items.map(({ track }: { track: any }) => ({
      ...track,
    }));
    firstSong = data.tracks.items[0];
  } else if (data.type === "artist") {
    allTracks = data.tracks.items;
    firstSong = { track: data.tracks.items[0] };
  } else {
    allTracks = data.tracks.items.map((item: { item: any }) => ({
      album: { images: data.images },
      ...item,
    }));
    firstSong = {
      track: { album: { images: data.images }, ...data.tracks.items[0] },
    };
  }

  allTracks.shift();

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
      className={className}
    >
      {children}
    </Button>
  );
};

export default PlayAllSongsBtn;
