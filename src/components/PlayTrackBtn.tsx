"use client";
import React from "react";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import { playSong } from "@/lib/playSong";
import { Session } from "next-auth";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { AiFillInfoCircle } from "react-icons/ai";
import toast from "react-hot-toast";

const PlayTrackBtn = ({
  item,
  session,
}: {
  item: any;
  session: Session | null;
}) => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={async () => {
        try {
          await playSong(item.uri, session, { track: item }, item, dispatch);
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
      className={"space-x-2 p-6 text-xl text-white"}
    >
      <FaPlay />
      <div>PLAY</div>
    </Button>
  );
};

export default PlayTrackBtn;
