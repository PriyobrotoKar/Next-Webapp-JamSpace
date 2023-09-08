"use client";

import useFetch from "@/hooks/useFetch";
import { useSession } from "next-auth/react";

const PlaylistBanner = ({ params }: { params: { id: string } }) => {
  const { data: session } = useSession();
  const { data, loading } = useFetch(
    `playlists/${params.id}`,
    session?.accessToken
  );

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default PlaylistBanner;
