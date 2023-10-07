"use client";
import { useInView } from "react-intersection-observer";

import useFetch, { fetchDataFromApi } from "@/hooks/useFetch";
import { useSession } from "next-auth/react";
import AlbumCard from "./AlbumCard";
import { useEffect, useState } from "react";

const NewReleases = () => {
  const { data: session } = useSession();
  const { data, loading } = useFetch(
    "browse/new-releases",
    session?.accessToken,
  );
  const [albumData, setAlbumData] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);

  const { ref, inView, entry } = useInView({
    threshold: 1,
  });

  const loadMoreData = async () => {
    const offsetvalue = offset + 20;

    const data = await fetchDataFromApi(
      "browse/new-releases",
      session?.accessToken!,
      {
        offset: offsetvalue,
      },
    );
    setAlbumData((prev: any[]) => [...prev, ...data.albums.items]);
    setOffset(offsetvalue);
  };

  useEffect(() => {
    if (data) {
      setAlbumData(data.albums.items);
    }
  }, [data]);

  useEffect(() => {
    if (inView && session) {
      loadMoreData();
    }
  }, [inView, session]);

  return (
    <>
      {!loading && <AlbumCard items={albumData} />}
      {albumData.length > 0 && albumData.length < data.albums.total && (
        <div className="my-20" ref={ref}>
          <img className="mx-auto w-20" src="/loader.svg" alt="" />
        </div>
      )}
    </>
  );
};

export default NewReleases;
