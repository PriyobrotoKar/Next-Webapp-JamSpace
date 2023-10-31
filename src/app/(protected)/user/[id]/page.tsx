import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import ArtistCard from "@/components/ArtistCard";
import CopyProfileLinkBtn from "@/components/CopyProfileLinkBtn";
import { SongMedium } from "@/components/Song";
import fetchApi from "@/lib/fetchApi";
import { dateAdded, duration } from "@/lib/utils";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FaPlay } from "react-icons/fa6";

const UserBanner = ({ profile }: any) => {
  return (
    <div className="flex items-end gap-4 md:gap-10">
      <div>
        <Image
          className="h-20 w-20 rounded-full object-cover md:h-52 md:w-52 "
          src={profile.images[1].url}
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className="  md:space-y-4">
        <div>Profile</div>
        <div className="relative w-fit text-2xl font-semibold md:fluid-4xl">
          <CopyProfileLinkBtn />
          {profile.display_name}
        </div>
        <div className="text-sm text-neutral-300 md:text-base">
          {profile.followers.total} Followers
        </div>
      </div>
    </div>
  );
};

const TopTracks = ({ topTracks }: any) => {
  if (!topTracks) return;
  return (
    <div className="space-y-4">
      <div>
        <h1 className=" text-lg font-medium uppercase tracking-wide">
          Top tracks this month
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-neutral-300">
            <AiFillEye />
          </span>
          <p className="text-sm text-neutral-300">Only visible to you</p>
        </div>
      </div>

      <div>
        {topTracks.items.map((item: any, i: number) => {
          return <SongMedium key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
const TopArtists = ({ topArtists }: any) => {
  if (!topArtists) return;
  return (
    <div className="space-y-4">
      <div>
        <h1 className=" text-lg font-medium uppercase tracking-wide">
          Top artists this month
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-neutral-300">
            <AiFillEye />
          </span>
          <p className="text-sm text-neutral-300">Only visible to you</p>
        </div>
      </div>
      <ArtistCard artists={topArtists.items} />
    </div>
  );
};

const FollowedArtists = ({ followedArtists }: any) => {
  if (!followedArtists) return;
  return (
    <div className="space-y-4">
      <div>
        <h1 className=" text-lg font-medium uppercase tracking-wide">
          Artist you follow
        </h1>
        <div className="flex items-center gap-2">
          <span className="text-neutral-300">
            <AiFillEye />
          </span>
          <p className="text-sm text-neutral-300">Only visible to you</p>
        </div>
      </div>
      <ArtistCard artists={followedArtists.artists.items} />
    </div>
  );
};

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const profile = await fetchApi(`users/${params.id}`, session!.accessToken);
  let followedArtists = null;
  let topArtists = null;
  let topTracks = null;
  if (params.id === session?.providerAccountId) {
    [followedArtists, topArtists, topTracks] = await Promise.all([
      fetchApi("me/following", session!.accessToken, {
        type: "artist",
      }),
      fetchApi("me/top/artists", session!.accessToken),
      fetchApi("me/top/tracks", session!.accessToken, {
        limit: 5,
      }),
    ]);
  }

  return (
    <div className="space-y-10  px-4 ">
      <UserBanner profile={profile} />
      <TopArtists topArtists={topArtists} />
      <TopTracks topTracks={topTracks} />
      <FollowedArtists followedArtists={followedArtists} />
    </div>
  );
};

export default page;
