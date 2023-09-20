import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import fetchApi from "@/lib/fetchApi";

import Image from "next/image";

import { Button } from "./ui/button";

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

  return (
    <div className="flex w-full justify-between gap-10 rounded-3xl bg-gradient-to-bl from-orange-950/40 to-neutral-900/60 p-6  2xl:p-8">
      <div className="flex flex-[2_2_0%] flex-col justify-between gap-4 xl:gap-6">
        <div className="space-y-3 xl:space-y-4">
          <div className="text-neutral-300">PLAYLIST</div>
          <h2 className="text-4xl font-medium xl:text-5xl 2xl:text-6xl">
            {featPlaylist?.name}
          </h2>
          <p className="text-neutral-500 2xl:text-xl ">
            {featPlaylist?.description}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button className=" p-5 font-semibold xl:p-6 xl:text-xl 2xl:p-7 2xl:text-2xl">
            PLAY
          </Button>
          <Button
            variant={"secondary"}
            className=" p-5 font-medium xl:p-6 xl:text-xl 2xl:p-7 2xl:text-2xl"
          >
            FOLLOW
          </Button>
        </div>
      </div>
      <div className="max-w-[19rem] flex-[1.5_1.5_0%] ">
        <Image
          className="h-full w-full  rounded-2xl"
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
