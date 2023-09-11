import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import AlbumPlaylistBanner from "@/components/AlbumPlaylistBanner";
import NavLinks from "@/components/NavLinks";
import { Input } from "@/components/ui/input";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import React from "react";
import { FiSearch } from "react-icons/fi";

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);

  const AlbumInfo = await fetchApi(`albums/${params.id}`, session!.accessToken);
  const artist = await fetchApi(
    `artists/${AlbumInfo.artists[0].id}`,
    session!.accessToken
  );

  return (
    <div>
      <header className="backdrop-blur-md py-6">
        <div className="flex justify-between items-center">
          <NavLinks />
          <div className="flex gap-1 items-center w-[18rem] border rounded-full px-4 focus-within:ring-1 ring-white">
            <FiSearch />
            <Input
              type="text"
              placeholder="Want do you want to listen to?"
              className="border-none bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0"
            />
          </div>
        </div>
      </header>
      <AlbumPlaylistBanner user={artist} data={AlbumInfo} />
    </div>
  );
};

export default page;
