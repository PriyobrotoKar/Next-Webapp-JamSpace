import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import AlbumPlaylistBanner from "@/components/AlbumPlaylistBanner";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import React from "react";
import AlbumPlaylistSongs from "@/components/AlbumPlaylistSongs";
import { Metadata, ResolvingMetadata } from "next";
import {
  LoadingAlbumPlaylistSongs,
  LoaidingAlbumPlaylistBanner,
} from "@/components/LoadingUI";
import { LuClock3 } from "react-icons/lu";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const id = params.id;
  const session = await getServerSession(authOptions);

  // fetch data
  const playlist = await fetchApi(`playlists/${id}`, session!.accessToken);

  return {
    title: playlist.name,
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const playlistInfo = await fetchApi(
    `playlists/${params.id}`,
    session!.accessToken,
  );
  const playlistUser = await fetchApi(
    playlistInfo ? `users/${playlistInfo.owner.id}` : "",
    session!.accessToken,
  );

  return (
    // <div>
    //   <LoaidingAlbumPlaylistBanner />
    //   <div className="mt-6 flex justify-between gap-6 border-b px-3 py-2 text-sm text-neutral-300">
    //     <div className="flex flex-1 items-center gap-4">
    //       <div className="w-4 text-right">#</div>
    //       <div>Title</div>
    //     </div>
    //     <div className={"flex   flex-1 items-center"}>
    //       {<div className="flex-1">Album</div>}
    //       {<div className="flex-1 text-center">Date Added</div>}
    //       <LuClock3 className="w-7 text-center" />
    //     </div>
    //   </div>
    //   <LoadingAlbumPlaylistSongs />
    //   <LoadingAlbumPlaylistSongs />
    //   <LoadingAlbumPlaylistSongs />
    //   <LoadingAlbumPlaylistSongs />
    //   <LoadingAlbumPlaylistSongs />
    //   <LoadingAlbumPlaylistSongs />
    //   <LoadingAlbumPlaylistSongs />
    //   <LoadingAlbumPlaylistSongs />
    // </div>
    <section>
      <AlbumPlaylistBanner user={playlistUser} data={playlistInfo} />
      <AlbumPlaylistSongs data={playlistInfo} />
    </section>
  );
};

export default page;
