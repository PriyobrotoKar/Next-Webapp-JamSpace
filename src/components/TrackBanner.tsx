import Image from "next/image";
import React from "react";
import PlayTrackBtn from "./PlayTrackBtn";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { BsCheckLg } from "react-icons/bs";
import { duration } from "@/lib/utils";

const TrackBanner = async ({ data, user }: any) => {
  const session = await getServerSession(authOptions);
  const [isFollowed] = await fetchApi(
    `me/tracks/contains`,
    session!.accessToken,
    {
      ids: data.id,
    },
  );

  return (
    <>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="self-center lg:flex-[0_0_16rem] xl:flex-[0_0_18rem] 2xl:flex-[0_0_20rem]">
          <Image
            className=" rounded-xl "
            src={data.album.images[0].url}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-1 flex-col justify-end gap-4 px-6">
          <div>Track</div>
          <div className={"font-semibold md:fluid-xl xl:fluid-2xl"}>
            {data.name}
          </div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8">
              <Avatar className="h-full w-full">
                <AvatarImage
                  className="object-cover"
                  src={user.images[0].url || ""}
                />
                <AvatarFallback>
                  <div className=" text-center  font-medium ">
                    {(user.display_name || user.name).at(0)?.toUpperCase()}
                  </div>
                </AvatarFallback>
              </Avatar>
            </div>
            <div>{`${user.display_name || user.name} • ${
              data.album.release_date.split("-")[0]
            } • ${duration(data.duration_ms)} `}</div>
          </div>
          <div className="playAll flex items-center">
            <PlayTrackBtn item={data} session={session} />
            <Button variant={"link"} className=" space-x-2 p-6 text-xl">
              {isFollowed ? (
                <>
                  <BsCheckLg className={"text-orange-600"} />{" "}
                  <div className="text-white">Following</div>
                </>
              ) : (
                <div className="text-white">Follow</div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackBanner;
