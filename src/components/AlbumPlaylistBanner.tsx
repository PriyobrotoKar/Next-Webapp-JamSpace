import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import { format } from "@/lib/utils";
import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";

const AlbumPlaylistBanner = ({ data, user, isFollowed }: any) => {
  const likesOrDate = (): string => {
    const result =
      data.type === "playlist"
        ? `${format(data?.followers.total)} likes`
        : data.release_date.split("-")[0];

    return result;
  };
  return (
    <>
      <div className="flex gap-10">
        <div className="lg:flex-[0_0_16rem] xl:flex-[0_0_18rem] 2xl:flex-[0_0_20rem]">
          <Image
            className=" rounded-xl "
            src={data.images[0].url}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="flex-1 flex flex-col gap-4 justify-end">
          <div>Playlist</div>
          <div
            className={
              data.type === "playlist"
                ? "fluid-4xl lg:fluid-3xl xl:fluid-4xl font-bold"
                : "text-4xl font-semibold"
            }
          >
            {data.name}
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8">
              <Avatar className="w-full h-full">
                <AvatarImage
                  className="object-cover"
                  src={user.images[0].url || ""}
                />
                <AvatarFallback>
                  <div className=" font-medium  text-center ">
                    {(user.display_name || user.name).at(0)?.toUpperCase()}
                  </div>
                </AvatarFallback>
              </Avatar>
            </div>
            <div>{`${user.display_name || user.name} • ${likesOrDate()} • ${
              data.tracks.total
            } songs`}</div>
          </div>
          <div className="playAll flex items-center">
            <Button className="text-white text-xl p-6 space-x-2">
              <FaPlay />
              <div>PLAY</div>
            </Button>
            <Button variant={"link"} className=" text-xl p-6 space-x-2">
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

export default AlbumPlaylistBanner;
