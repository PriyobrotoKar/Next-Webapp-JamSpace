import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import InfiniteScroll from "@/components/InfiniteScroll";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const category = await fetchApi(
    `browse/categories/${params.id}`,
    session!.accessToken,
  );
  const data = await fetchApi(
    `browse/categories/${params.id}/playlists`,
    session!.accessToken,
  );
  return (
    <div className="space-y-6">
      <h1 className="mt-32 px-4 font-semibold fluid-4xl">{category.name}</h1>
      <InfiniteScroll
        data={data}
        url={`browse/categories/${params.id}/playlists`}
        session={session}
      />
    </div>
  );
};

export default page;
