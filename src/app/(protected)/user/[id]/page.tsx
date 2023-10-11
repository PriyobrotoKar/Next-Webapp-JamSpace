import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import ArtistCard from "@/components/ArtistCard";
import CopyProfileLinkBtn from "@/components/CopyProfileLinkBtn";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const UserBanner = ({ profile }: any) => {
  return (
    <div className="flex items-end gap-10">
      <div>
        <Image
          className="h-52 w-52 rounded-full object-cover "
          src={profile.images[1].url}
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className=" space-y-4">
        <div>Profile</div>
        <div className="relative w-fit font-semibold fluid-4xl">
          <CopyProfileLinkBtn />
          {profile.display_name}
        </div>
        <div className="text-neutral-300">
          {profile.followers.total} Followers
        </div>
      </div>
    </div>
  );
};

const FollowedArtists = ({ followedArtists }: any) => {
  return (
    <div className="space-y-4">
      <h1 className=" text-lg font-medium uppercase tracking-wide">
        Artist you follow
      </h1>
      <ArtistCard artists={followedArtists.artists.items} />
    </div>
  );
};

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const profile = await fetchApi("me", session!.accessToken);
  const followedArtists = await fetchApi("me/following", session!.accessToken, {
    type: "artist",
  });
  const topArtists = await fetchApi("me/top/artist", session!.accessToken);
  return (
    <div className="space-y-10">
      <UserBanner profile={profile} />
      <FollowedArtists followedArtists={followedArtists} />
    </div>
  );
};

export default page;
