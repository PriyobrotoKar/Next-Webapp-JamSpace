import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import fetchApi from "@/lib/fetchApi";

import Image from "next/image";

import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import PlayAllSongsBtn from "./PlayAllSongsBtn";
import Link from "next/link";

const HomeBanner = async () => {
  const session = await getServerSession(authOptions);
  const data = await fetchApi(
    "browse/featured-playlists",
    session!.accessToken,
    {
      country: "IN",
      limit: 4,
    },
  );

  const featPlaylist = data.playlists.items[Math.floor(Math.random() * 4)];
  const fullFeatPlaylist = await fetchApi(
    `playlists/${featPlaylist.id}`,
    session!.accessToken,
  );

  return (
    <div className="ml-auto flex w-[95%] items-center justify-between gap-4 rounded-bl-3xl rounded-tl-3xl bg-gradient-to-bl from-orange-950/40 to-neutral-900/60 p-4  md:w-full md:gap-10 md:p-6  2xl:p-8">
      <div className="flex flex-1 flex-col  justify-between gap-2 md:flex-[2_2_0%] xl:gap-6">
        <div className="space-y-3 xl:space-y-4">
          <div className="text-sm text-neutral-300 md:text-base">PLAYLIST</div>
          <Link href={`/playlist/${featPlaylist.id}`}>
            <h2 className="text-xl font-medium md:text-4xl xl:text-5xl 2xl:text-6xl">
              {featPlaylist?.name}
            </h2>
          </Link>
          <p className="line-clamp-2 text-sm text-neutral-500 md:line-clamp-none md:text-base 2xl:text-xl ">
            {featPlaylist?.description}
          </p>
        </div>
        <div className="flex items-center  md:gap-4">
          <PlayAllSongsBtn
            data={fullFeatPlaylist}
            session={session}
            className={
              "hidden p-5 font-medium md:inline-flex  xl:text-xl 2xl:p-7 2xl:text-2xl"
            }
          >
            PLAY
          </PlayAllSongsBtn>

          <PlayAllSongsBtn
            data={fullFeatPlaylist}
            session={session}
            className={" px-[0.8rem] py-5 font-semibold md:hidden"}
          >
            <FaPlay />
          </PlayAllSongsBtn>
          <Button
            variant={"secondary"}
            className="hidden p-5 font-medium md:inline-flex xl:p-6 xl:text-xl 2xl:p-7 2xl:text-2xl"
          >
            FOLLOW
          </Button>
          <Button className=" bg-transparent text-2xl font-semibold text-white md:hidden ">
            <FiHeart />
          </Button>
        </div>
      </div>
      <div className="max-w-[19rem] flex-1  md:flex-[1.5_1.5_0%] ">
        <Image
          className="rounded-2xl md:h-full  md:w-full"
          alt=""
          src={featPlaylist?.images[0].url || "/no-image.png"}
          priority
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default HomeBanner;
