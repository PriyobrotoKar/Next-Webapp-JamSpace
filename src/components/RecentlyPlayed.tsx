import Image from "next/image";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import fetchApi from "@/lib/fetchApi";

import { FaPlay } from "react-icons/fa6";
import { duration } from "@/lib/utils";
import { SongLarge, SongMedium, SongVeryLarge } from "./Song";

const RecentlyPlayed = async () => {
  const session = await getServerSession(authOptions);
  const data = await fetchApi(
    "me/player/recently-played",
    session!.accessToken,
    { limit: 50 },
  );
  let itemCount = 0;
  return (
    <div className="px-4">
      <h1 className="mb-6 text-xl font-semibold">Recently Played</h1>
      <div className="flex flex-col md:flex-row md:gap-4 xl:gap-10">
        <div className="flex-1 space-y-4">
          <SongVeryLarge item={data} />
        </div>
        <div className="flex-1   md:flex-[2_2_0%] md:space-y-2 xl:flex-[3_3_0%]">
          {data?.items.map((item: any, i: number) => {
            if (i === 0) return;
            if (itemCount > 3) return;
            if (data?.items[i - 1].track.id === item.track.id) return;
            itemCount++;
            return <SongMedium key={item.track.id} item={item.track} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayed;
