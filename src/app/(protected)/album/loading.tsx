import {
  LoadingAlbumPlaylistSongs,
  LoaidingAlbumPlaylistBanner,
} from "@/components/LoadingUI";
import React from "react";
import { LuClock3 } from "react-icons/lu";

const loading = () => {
  return (
    <div>
      <LoaidingAlbumPlaylistBanner />
      <div className="mt-6 flex justify-between gap-6 border-b px-3 py-2 text-sm text-neutral-300">
        <div className="flex flex-1 items-center gap-4">
          <div className="w-6 text-right">#</div>
          <div>Title</div>
        </div>
        <div className={"flex   flex-1 items-center"}>
          {<div className="flex-1">Album</div>}
          {<div className="flex-1 text-center">Date Added</div>}
          <LuClock3 className="w-7 text-center" />
        </div>
      </div>
      <LoadingAlbumPlaylistSongs />
      <LoadingAlbumPlaylistSongs />
      <LoadingAlbumPlaylistSongs />
      <LoadingAlbumPlaylistSongs />
      <LoadingAlbumPlaylistSongs />
      <LoadingAlbumPlaylistSongs />
      <LoadingAlbumPlaylistSongs />
      <LoadingAlbumPlaylistSongs />
    </div>
  );
};

export default loading;
