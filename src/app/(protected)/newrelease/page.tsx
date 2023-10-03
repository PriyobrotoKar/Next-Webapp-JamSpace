import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  const newAlbums = await fetchApi(`browse/new-releases`, session!.accessToken);
  return (
    <div>
      <h1 className="mt-32 font-semibold fluid-4xl">New Releases</h1>
      <h2 className="mt-20 text-2xl font-medium">New albums and singles</h2>
      <div className="grid grid-cols-4 md:gap-4 2xl:gap-12 "></div>
    </div>
  );
};

export default page;
