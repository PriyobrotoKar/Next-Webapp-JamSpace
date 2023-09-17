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
      <div className="flex justify-between gap-6 text-sm text-neutral-300 border-b px-3 py-2 mt-6">
        <div className="flex flex-1 gap-4 items-center">
          <div className="w-4 text-right">#</div>
          <div>Title</div>
        </div>
        <div className={"flex   items-center flex-1"}>
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
