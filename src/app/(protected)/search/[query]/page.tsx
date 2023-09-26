import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import stringComparison from "string-comparison";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import { unescape } from "querystring";
import React from "react";
import Image from "next/image";

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
    imageUrl: string;
    type: string;
  } = {
    id: "",
    name: "",
    artists: [],
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
        imageUrl:
          item.type === "track" ? item.album.images[0].url : item.images[0].url,
        type: item.type,
      };
    }
  });

  return (
    <div className="space-y-6 ">
      <h2 className="text-xl font-semibold">Top Result</h2>
      <div className="space-y-2 rounded-xl bg-orange-950/30 p-4">
        <div>
          <Image
            className="h-32 w-32 rounded-full object-cover object-center"
            src={topResult.imageUrl}
            alt=""
            width={100}
            height={100}
          />
        </div>
        <div className="text-3xl font-semibold">{topResult.name}</div>
        <div>
          {topResult.artists.map((artist, i, artists) => {
            return (
              <span>
                {artist.name + (i !== artists.length - 1 ? ", " : "")}
              </span>
            );
          })}
        </div>
        <div className="w-fit rounded-full bg-neutral-800/30 px-4 py-2 text-sm">
          {topResult.type[0].toUpperCase() + topResult.type.slice(1)}
        </div>
      </div>
    </div>
  );
};

const page = async ({ params }: { params: { query: string } }) => {
  const session = await getServerSession(authOptions);
  const query = unescape(params.query);
  const searchResult = await fetchApi("search", session!.accessToken, {
    q: query,
    type: "album,track,playlist,artist",
  });

  return (
    <div>
      <TopResult searchResult={searchResult} query={query} />
    </div>
  );
};

export default page;
