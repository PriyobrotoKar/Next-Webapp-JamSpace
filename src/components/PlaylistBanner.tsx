"use client";

import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import { format } from "@/lib/utils";
import Image from "next/image";

const PlaylistBanner = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const { data: playlistInfo, loading: playlistInfoLoading } = useFetch(
    `playlists/${params.id}`,
    session?.accessToken
  );
  const { data: playlistUser, loading: playlistUserLoading } = useFetch(
    playlistInfo ? `users/${playlistInfo?.owner.id}` : "",
    session?.accessToken
  );

  return (
    <>
      {playlistInfoLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex gap-10">
          <div className="relative">
            <Image
              className="w-[16rem] rounded-xl"
              src={playlistInfo?.images[0].url}
              alt=""
              width={300}
              height={300}
            />
            <Image
              className="w-[16rem] rounded-xl blur-3xl absolute inset-0 -z-10"
              src={playlistInfo?.images[0].url}
              alt=""
              width={300}
              height={300}
              quality={50}
            />
          </div>
          <div className="flex flex-col gap-4 justify-end">
            <div>Playlist</div>
            <div className="text-6xl font-semibold">{playlistInfo?.name}</div>
            <div className="flex gap-2 items-center">
              <div className="w-8 h-8">
                <Avatar className="w-full h-full">
                  <AvatarImage src={playlistUser?.images[0].url || ""} />
                  <AvatarFallback>
                    <div className=" font-medium  text-center ">
                      {playlistInfo?.owner.display_name.at(0)?.toUpperCase()}
                    </div>
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>{`${playlistInfo?.owner.display_name} • ${format(
                playlistInfo?.followers.total
              )} likes • ${playlistInfo?.tracks.total} songs`}</div>
            </div>
            <div className="flex items-center">
              <Button className="text-white text-xl p-6 space-x-2">
                <FaPlay />
                <div>PLAY</div>
              </Button>
              <Button
                variant={"link"}
                className="text-white text-xl p-6 space-x-2"
              >
                <div>Follow</div>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlaylistBanner;
