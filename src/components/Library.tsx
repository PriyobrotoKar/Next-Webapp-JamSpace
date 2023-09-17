import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { VscLibrary } from "react-icons/vsc";

import { LoadingLib } from "./LoadingUI";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import fetchApi from "@/lib/fetchApi";

const Library = async () => {
  const session = await getServerSession(authOptions);
  const playlist = await fetchApi("me/playlists", session!.accessToken);
  const albums = await fetchApi("me/albums", session!.accessToken);
  let items: any[] = [];

  if (playlist && albums) {
    const albumsNew = albums.items.map(({ album }: { album: any }) => {
      return album;
    });

    items = [...playlist.items, ...albumsNew];
    items.sort((a, b) => {
      // a should come before b in the sorted order
      if (a.name < b.name) {
        return -1;
        // a should come after b in the sorted order
      } else if (a.name > b.name) {
        return 1;
        // and and b are the same
      } else {
        return 0;
      }
    });
  }

  return (
    <div className="min-h-0  flex flex-col">
      <h2>
        <div className="lg:hidden ">
          <VscLibrary className={"text-neutral-400 text-2xl mx-auto"} />
        </div>
        <div className="hidden lg:block">Library</div>
      </h2>

      <div className="min-h-0 overflow-y-auto invisible hover:visible  ">
        <div className="mt-3 space-y-1 visible">
          {items?.map((item: any) => {
            return (
              <Link
                key={item.id}
                href={`/${item.type}/${item.id}`}
                className="flex gap-3 p-2 xl:pr-4 hover:bg-orange-950/30 md:rounded-[8px] xl:rounded-xl transition-colors"
              >
                <div className="min-w-full xl:min-w-max  md:rounded-[6px] xl:rounded-xl overflow-hidden">
                  <Image
                    alt=""
                    src={item.images[0].url}
                    width={52}
                    height={52}
                  />
                </div>
                <div className="md:hidden xl:block">
                  <div className="font-medium line-clamp-1 ">{item.name}</div>
                  <div className="text-sm text-neutral-400">
                    {item.type === "playlist" ? "Playlist" : "Album"}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Library;
