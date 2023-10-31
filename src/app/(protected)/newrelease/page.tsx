import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import InfiniteScroll from "@/components/InfiniteScroll";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  const data = await fetchApi("browse/new-releases", session!.accessToken);
  return (
    <div>
      <h1 className="mt-32 font-semibold fluid-4xl">New Releases</h1>
      <h2 className="mb-6 mt-20 text-2xl font-medium">
        New albums and singles
      </h2>
      <InfiniteScroll
        data={data}
        url={"browse/new-releases"}
        session={session}
      />
    </div>
  );
};

export default page;
