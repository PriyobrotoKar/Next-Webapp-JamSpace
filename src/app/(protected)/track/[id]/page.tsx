import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import TrackBanner from "@/components/TrackBanner";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const trackInfo = await fetchApi(`tracks/${params.id}`, session!.accessToken);
  const artist = await fetchApi(
    trackInfo ? `artists/${trackInfo.artists[0].id}` : "",
    session!.accessToken,
  );
  return (
    <div>
      <TrackBanner data={trackInfo} user={artist} />
    </div>
  );
};

export default page;
