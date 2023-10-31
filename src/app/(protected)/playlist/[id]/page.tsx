import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import AlbumPlaylistBanner from "@/components/AlbumPlaylistBanner";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import React from "react";
import AlbumPlaylistSongs from "@/components/AlbumPlaylistSongs";
import { Metadata, ResolvingMetadata } from "next";

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
    <section>
      <AlbumPlaylistBanner user={playlistUser} data={playlistInfo} />
      <AlbumPlaylistSongs data={playlistInfo} />
    </section>
  );
};

export default page;
