import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import { format } from "@/lib/utils";
import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { playSongs } from "@/lib/playSong";
import PlayAllSongsBtn from "./PlayAllSongsBtn";

const AlbumPlaylistBanner = async ({ data, user }: any) => {
  const session = await getServerSession(authOptions);
  const [isFollowed] =
    data.type === "playlist"
      ? await fetchApi(
          `playlists/${data.id}/followers/contains`,
          session!.accessToken,
          { ids: session!.providerAccountId },
        )
      : await fetchApi(`me/albums/contains`, session!.accessToken, {
          ids: data.id,
        });

  const likesOrDate = (): string => {
    const result =
      data.type === "playlist"
        ? `${format(data?.followers.total)} likes`
        : data.release_date.split("-")[0];

    return result;
  };
  return (
    <>
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="self-center lg:flex-[0_0_16rem] xl:flex-[0_0_18rem] 2xl:flex-[0_0_20rem]">
          <Image
            className=" rounded-xl "
            src={data.images[0].url}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div className="flex flex-1 flex-col justify-end gap-4 px-6">
          <div>{data.type === "playlist" ? "Playlist" : "Album"}</div>
          <div
            className={
              data.type === "playlist"
                ? "font-bold fluid-4xl lg:fluid-3xl xl:fluid-4xl"
                : "font-semibold md:fluid-xl xl:fluid-2xl"
            }
          >
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
            <div>{`${user.display_name || user.name} • ${likesOrDate()} • ${
              data.tracks.total
            } songs`}</div>
          </div>
          <div className="playAll flex items-center">
            <PlayAllSongsBtn
              data={data}
              session={session}
              className={"space-x-2 p-6 text-xl text-white"}
            >
              <FaPlay />
              <div>PLAY</div>
            </PlayAllSongsBtn>
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

export default AlbumPlaylistBanner;
