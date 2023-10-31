import fetchApi from "@/lib/fetchApi";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

import AlbumPlaylistBanner from "@/components/AlbumPlaylistBanner";
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
  const album = await fetchApi(`albums/${id}`, session!.accessToken);

  return {
    title: album.name,
  };
}

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);

  const AlbumInfo = await fetchApi(`albums/${params.id}`, session!.accessToken);
  const artist = await fetchApi(
    `artists/${AlbumInfo.artists[0].id}`,
    session!.accessToken,
  );

  return (
    <div>
      <AlbumPlaylistBanner user={artist} data={AlbumInfo} />
      <AlbumPlaylistSongs data={AlbumInfo} />
    </div>
  );
};

export default page;
