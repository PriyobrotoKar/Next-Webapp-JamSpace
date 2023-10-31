import React from "react";

export const LoadingLib = () => {
  return (
    <div className="flex  gap-4">
      <div className="animate-pulse rounded-xl bg-orange-950/20 md:h-12 md:w-12 xl:h-14 xl:w-14"></div>
      <div className="flex-1 space-y-2 md:hidden xl:block">
        <div className="h-5 animate-pulse rounded-xl bg-orange-950/20"></div>
        <div className="h-4 w-3/4 animate-pulse rounded-xl bg-orange-950/20"></div>
      </div>
    </div>
  );
};

export const LoadingAbout = () => {
  return (
    <div className="w-full space-y-4 rounded-2xl bg-orange-950/20 p-4">
      <div className="h-52 animate-pulse rounded-xl bg-orange-950/20"></div>
      <div className="h-6 animate-pulse rounded-xl bg-orange-950/20"></div>
      <div className="h-4 w-3/4 animate-pulse rounded-xl bg-orange-950/20"></div>
      <div className="flex gap-4">
        <div className="h-8 w-20 animate-pulse rounded-full bg-orange-950/20"></div>
        <div className="h-8 w-20 animate-pulse rounded-full bg-orange-950/20"></div>
        <div className="h-8 w-20 animate-pulse rounded-full bg-orange-950/20"></div>
      </div>
    </div>
  );
};

export const LoadingHomeBanner = () => {
  return (
    <>
      <div className="flex-[2_2_0%] space-y-6">
        <div className="h-4 w-16 animate-pulse rounded-full bg-orange-950/20"></div>
        <div className="h-24 animate-pulse rounded-xl bg-orange-950/20"></div>
        <div className="h-6 animate-pulse rounded-full bg-orange-950/20"></div>
        <div className="flex h-10 gap-6">
          <div className="w-28 animate-pulse rounded-full bg-orange-950/20"></div>
          <div className="w-28 animate-pulse rounded-full bg-orange-950/20"></div>
        </div>
      </div>

      <div className="h-[16rem] flex-[0_0_16rem]  animate-pulse rounded-xl bg-orange-950/20"></div>
    </>
  );
};

export const LoadingRecently = () => {
  return (
    <div className="flex gap-10">
      <div className="flex-1 space-y-3">
        <div className="aspect-square animate-pulse rounded-xl bg-orange-950/20"></div>
        <div className="h-6 animate-pulse rounded-full bg-orange-950/20"></div>
        <div className="h-4 animate-pulse rounded-full bg-orange-950/20"></div>
      </div>
      <div className="flex-[2_2_0%] space-y-4 xl:flex-[3_3_0%]">
        <div className="flex  h-[4.3rem] items-center justify-between gap-4 rounded-xl bg-orange-950/10 px-3 py-2">
          <div className="flex h-full items-center gap-4">
            <div className="h-full w-[3.3rem] animate-pulse rounded-xl bg-orange-950/20"></div>
            <div className="space-y-3">
              <div className="h-5 w-52 animate-pulse rounded-xl bg-orange-950/20"></div>
              <div className="h-3 w-40 animate-pulse rounded-xl bg-orange-950/20"></div>
            </div>
          </div>
          <div className="h-4 w-8 animate-pulse rounded-xl bg-orange-950/20"></div>
        </div>
        <div className="flex  h-[4.3rem] items-center  justify-between gap-4 rounded-xl bg-orange-950/10 px-3 py-2">
          <div className="flex h-full items-center gap-4">
            <div className="h-full w-[3.3rem] animate-pulse rounded-xl bg-orange-950/20"></div>
            <div className="space-y-3">
              <div className="h-5 w-52 animate-pulse rounded-xl bg-orange-950/20"></div>
              <div className="h-3 w-40 animate-pulse rounded-xl bg-orange-950/20"></div>
            </div>
          </div>
          <div className="h-4 w-8 animate-pulse rounded-xl bg-orange-950/20"></div>
        </div>
        <div className="flex  h-[4.3rem] items-center  justify-between gap-4 rounded-xl bg-orange-950/10 px-3 py-2">
          <div className="flex h-full items-center gap-4">
            <div className="h-full w-[3.3rem] animate-pulse rounded-xl bg-orange-950/20"></div>
            <div className="space-y-3">
              <div className="h-5 w-52 animate-pulse rounded-xl bg-orange-950/20"></div>
              <div className="h-3 w-40 animate-pulse rounded-xl bg-orange-950/20"></div>
            </div>
          </div>
          <div className="h-4 w-8 animate-pulse rounded-xl bg-orange-950/20"></div>
        </div>
        <div className="flex  h-[4.3rem] items-center  justify-between gap-4 rounded-xl bg-orange-950/10 px-3 py-2">
          <div className="flex h-full items-center gap-4">
            <div className="h-full w-[3.3rem] animate-pulse rounded-xl bg-orange-950/20"></div>
            <div className="space-y-3">
              <div className="h-5 w-52 animate-pulse rounded-xl bg-orange-950/20"></div>
              <div className="h-3 w-40 animate-pulse rounded-xl bg-orange-950/20"></div>
            </div>
          </div>
          <div className="h-4 w-8 animate-pulse rounded-xl bg-orange-950/20"></div>
        </div>
      </div>
    </div>
  );
};

export const LoaidingAlbumPlaylistBanner = () => {
  return (
    <>
      <div className="flex flex-col gap-10 px-4 md:flex-row md:items-end">
        <div className="h-[20rem] w-[80%]  animate-pulse self-center rounded-xl bg-orange-950/20 md:w-auto md:flex-[0_0_20rem]"></div>
        <div className="flex-1 space-y-6">
          <div className="h-8 w-20 animate-pulse rounded-full bg-orange-950/20"></div>
          <div className="h-20 animate-pulse rounded-xl bg-orange-950/20"></div>
          <div className="h-8  animate-pulse rounded-full bg-orange-950/20"></div>
          <div className="flex gap-4">
            <div className="h-12 w-28 animate-pulse rounded-full bg-orange-950/20"></div>
            <div className="h-12 w-28 animate-pulse rounded-full bg-orange-950/20"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export const LoadingAlbumPlaylistSongs = () => {
  return (
    <div className="mt-2 flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-4 px-8">
        <div className="h-12 w-12 animate-pulse rounded-[8px] bg-orange-950/40"></div>
        <div className="space-y-2">
          <div className="h-4 w-52 animate-pulse rounded-full bg-orange-950/40"></div>
          <div className="h-3 w-32 animate-pulse rounded-full bg-orange-950/40"></div>
        </div>
      </div>
      <div>
        <div className="h-4 w-8 animate-pulse rounded-full bg-orange-950/40"></div>
      </div>
    </div>
  );
};

export const LoadingSearchTopResult = () => {
  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-xl font-semibold">Top Result</h2>
      <div className="flex animate-pulse flex-row  gap-4 rounded-xl bg-orange-950/40 p-6 md:flex-col  md:justify-end">
        <div className="h-20 w-20 animate-pulse rounded-full bg-orange-950/40 md:h-32 md:w-32"></div>
        <div className="flex-1 space-y-2">
          <div className="h-12 animate-pulse rounded-xl bg-orange-950/40 md:h-16"></div>
          <div className="h-8 w-20 animate-pulse rounded-lg bg-orange-950/40"></div>
        </div>
      </div>
    </div>
  );
};
export const LoadingSearchSongs = () => {
  return (
    <div className="flex-1 space-y-4">
      <h2 className="text-xl font-semibold">Songs</h2>
      <div className=" space-y-4">
        <div className="flex h-[4.3rem] items-center justify-between gap-4 rounded-xl bg-orange-950/10 px-3 py-2">
          <div className="flex h-full flex-1 items-center gap-6">
            <div className="h-full w-[3.3rem] animate-pulse rounded-xl bg-orange-950/20"></div>
            <div className=" flex-1 space-y-3">
              <div className="h-5 max-w-full animate-pulse rounded-xl bg-orange-950/20"></div>
              <div className="h-3 w-40 animate-pulse rounded-xl bg-orange-950/20"></div>
            </div>
          </div>
          <div className="h-4 w-8 animate-pulse rounded-xl bg-orange-950/20"></div>
        </div>
        <div className="flex h-[4.3rem] items-center justify-between gap-4 rounded-xl bg-orange-950/10 px-3 py-2">
          <div className="flex h-full flex-1 items-center gap-6">
            <div className="h-full w-[3.3rem] animate-pulse rounded-xl bg-orange-950/20"></div>
            <div className=" flex-1 space-y-3">
              <div className="h-5 max-w-full animate-pulse rounded-xl bg-orange-950/20"></div>
              <div className="h-3 w-40 animate-pulse rounded-xl bg-orange-950/20"></div>
            </div>
          </div>
          <div className="h-4 w-8 animate-pulse rounded-xl bg-orange-950/20"></div>
        </div>
        <div className="flex h-[4.3rem] items-center justify-between gap-4 rounded-xl bg-orange-950/10 px-3 py-2">
          <div className="flex h-full flex-1 items-center gap-6">
            <div className="h-full w-[3.3rem] animate-pulse rounded-xl bg-orange-950/20"></div>
            <div className=" flex-1 space-y-3">
              <div className="h-5 max-w-full animate-pulse rounded-xl bg-orange-950/20"></div>
              <div className="h-3 w-40 animate-pulse rounded-xl bg-orange-950/20"></div>
            </div>
          </div>
          <div className="h-4 w-8 animate-pulse rounded-xl bg-orange-950/20"></div>
        </div>
        <div className="flex h-[4.3rem] items-center justify-between gap-4 rounded-xl bg-orange-950/10 px-3 py-2">
          <div className="flex h-full flex-1 items-center gap-6">
            <div className="h-full w-[3.3rem] animate-pulse rounded-xl bg-orange-950/20"></div>
            <div className=" flex-1 space-y-3">
              <div className="h-5 max-w-full animate-pulse rounded-xl bg-orange-950/20"></div>
              <div className="h-3 w-40 animate-pulse rounded-xl bg-orange-950/20"></div>
            </div>
          </div>
          <div className="h-4 w-8 animate-pulse rounded-xl bg-orange-950/20"></div>
        </div>
      </div>
    </div>
  );
};
