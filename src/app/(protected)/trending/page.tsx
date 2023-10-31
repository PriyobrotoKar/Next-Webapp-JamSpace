import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../api/auth/[...nextauth]/options";
import fetchApi from "@/lib/fetchApi";
import InfiniteScroll from "@/components/InfiniteScroll";

const page = async () => {
  const session = await getServerSession(authOptions);
  const data = await fetchApi(
    `browse/categories/toplists/playlists`,
    session!.accessToken,
  );
  return (
    <div>
      <h1 className="mt-32 font-semibold fluid-4xl">Trending</h1>
      <h2 className="mb-6 mt-20 text-2xl font-medium">
        Trending Playlists Worldwide
      </h2>
      <InfiniteScroll
        data={data}
        url={"browse/categories/toplists/playlists"}
        session={session}
      />
    </div>
  );
};

export default page;
