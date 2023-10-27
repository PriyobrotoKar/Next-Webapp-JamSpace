import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import stringComparison from "string-comparison";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import { unescape } from "querystring";
import React from "react";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import { duration } from "@/lib/utils";
import ArtistCard from "@/components/ArtistCard";
import AlbumCard from "@/components/AlbumCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SongMedium } from "@/components/Song";
import { FiSearch } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import SearchBox from "@/components/SearchBox";

const TopResult = ({ searchResult, query }: any) => {
  const { tracks, artists, albums, playlists } = searchResult;

  const topItems = [
    tracks.items[0],
    artists.items[0],
    albums.items[0],
    playlists.items[0],
  ];

  const cos = stringComparison.cosine;
  let topResult: {
    id: string;
    name: string;
    artists: any[];
    owner: string;
    imageUrl: string;
    type: string;
  } = {
    id: "",
    name: "",
    artists: [],
    owner: "",
    imageUrl: "",
    type: "",
  };
  let maxSimilar = -1;

  topItems.forEach((item) => {
    const similarity = cos.similarity(query, item.name);
    if (similarity > maxSimilar) {
      maxSimilar = similarity;
      topResult = {
        id: item.id,
        name: item.name,
        artists: item.type !== "artist" ? item.artists : [],
        owner: item.type === "playlist" ? item.owner.display_name : "",
        imageUrl:
          item.type === "track" ? item.album.images[0].url : item.images[0].url,
        type: item.type,
      };
    }
  });

  return (
    <div className="flex-1 space-y-6">
      <h2 className="text-xl font-semibold">Top Result</h2>
      <div>
        <div className="group relative flex flex-row items-center gap-4 rounded-xl bg-orange-950/20 p-6 transition-all hover:bg-orange-950/30 md:flex-col md:items-start">
          <div className="flex-initial">
            <Image
              className="w-20 rounded-full object-cover object-center md:h-32 md:w-32"
              src={topResult.imageUrl}
              alt=""
              width={100}
              height={100}
            />
          </div>

          <div className="flex-[2_2_0%] space-y-2">
            <div className="line-clamp-2 text-2xl font-semibold md:text-3xl">
              <Link href={`/${topResult.type}/${topResult.id}`}>
                {topResult.name}
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-fit rounded-full bg-neutral-800/30 px-4 py-2 text-sm">
                {topResult.type[0].toUpperCase() + topResult.type.slice(1)}
              </div>
              <div className="line-clamp-1">
                {topResult.artists?.map((artist, i, artists) => {
                  return (
                    <Link href={`/artist/${artist.id}`} key={artist.id}>
                      <span className="hover:underline">
                        {artist.name + (i !== artists.length - 1 ? ", " : "")}
                      </span>
                    </Link>
                  );
                })}
                {topResult.owner && "by " + topResult.owner}
              </div>
            </div>
          </div>
          <Button
            size={"sm"}
            className="absolute bottom-[5%] right-0 -translate-x-1/2 space-x-2 rounded-full px-[1.30rem] py-8 text-center text-2xl text-white opacity-0  transition-all duration-300 focus:bottom-[10%] focus:opacity-100 group-hover:bottom-[10%] group-hover:opacity-100"
          >
            <FaPlay className={"translate-x-[0.1rem]"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Songs = ({ searchResult }: any) => {
  const { tracks } = searchResult;
  return (
    <div className="flex-1 space-y-6">
      <h2 className="text-xl font-semibold">Songs</h2>
      <div>
        {tracks.items.map((track: any, i: number) => {
          return <SongMedium key={track.id} item={track} />;
        })}
      </div>
    </div>
  );
};

const Artists = ({ searchResult }: any) => {
  return (
    <div className="space-y-6 px-4">
      <h2 className="text-xl font-semibold">Artists</h2>
      <ArtistCard artists={searchResult.artists.items} />
    </div>
  );
};

const Albums = ({ searchResult }: any) => {
  return (
    <div className="space-y-6 px-4">
      <h2 className="text-xl font-semibold">Albums</h2>
      <AlbumCard items={searchResult.albums.items} />
    </div>
  );
};

const page = async ({ params }: { params: { query: string } }) => {
  const session = await getServerSession(authOptions);
  const query = unescape(params.query);
  const searchResult = await fetchApi("search", session!.accessToken, {
    q: query,
    type: "album,track,playlist,artist",
    limit: 4,
  });

  return (
    <>
      {params.query ? (
        <div className="space-y-8">
          <SearchBox />
          <div className="flex flex-col gap-10 px-4 md:flex-row">
            <TopResult searchResult={searchResult} query={query} />
            <Songs searchResult={searchResult} />
          </div>
          <Artists searchResult={searchResult} />
          <Albums searchResult={searchResult} />
        </div>
      ) : (
        <SearchBox />
      )}
    </>
  );
};

export default page;
