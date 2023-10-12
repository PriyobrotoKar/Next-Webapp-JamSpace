import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import ArtistCard from "@/components/ArtistCard";
import CopyProfileLinkBtn from "@/components/CopyProfileLinkBtn";
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

const TopTracks = ({ topTracks }: any) => {
  if (!topTracks) return;
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

      <div>
        {topTracks.items.map((item: any, i: number) => {
          const { album, name, artists, duration_ms, id } = item;
          return (
            <div
              key={id}
              className="group flex items-center justify-between gap-6 rounded-xl px-3 py-2 transition hover:bg-orange-950/40"
            >
              <div className="flex flex-1 items-center gap-4">
                <div className="relative flex-[0_0_1.5rem] text-right">
                  <div className="visible text-neutral-400 group-hover:invisible">
                    {i + 1}
                  </div>
                  <FaPlay
                    className={
                      "invisible absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 group-hover:visible"
                    }
                  />
                </div>
                <div className="flex flex-1  gap-2">
                  <div className="flex-[0_0_auto]">
                    <Image
                      className=" rounded-[8px]"
                      src={album.images[0].url}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="flex-1 space-y-1">
                    <Link
                      href={`/track/${id}`}
                      className="line-clamp-1 hover:underline"
                    >
                      {name}
                    </Link>
                    <div className="line-clamp-1 text-xs text-neutral-400">
                      {artists.map((artist: any, i: number) => {
                        return (
                          <Link key={artist.id} href={`/artist/${artist.id}`}>
                            <span className="hover:text-white hover:underline">
                              {artist.name +
                                (i !== artists.length - 1 ? ", " : "")}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 justify-between text-center text-sm text-neutral-400">
                <Link
                  href={`/album/${album.id}`}
                  className="line-clamp-1 flex-1 text-left hover:underline group-hover:text-white"
                >
                  {album.name}
                </Link>
                <div className="w-7">{duration(duration_ms)}</div>
              </div>
            </div>
          );
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
    <div className="space-y-10">
      <UserBanner profile={profile} />
      <TopArtists topArtists={topArtists} />
      <TopTracks topTracks={topTracks} />
      <FollowedArtists followedArtists={followedArtists} />
    </div>
  );
};

export default page;
