import React from "react";
import NavLinks from "./NavLinks";
import { FiSearch } from "react-icons/fi";
import { Input } from "./ui/input";

export const LoadingLib = () => {
  return (
    <div className="flex  gap-4">
      <div className="bg-orange-950/20 animate-pulse md:w-12 md:h-12 xl:w-14 xl:h-14 rounded-xl"></div>
      <div className="flex-1 space-y-2 md:hidden xl:block">
        <div className="h-5 rounded-xl animate-pulse bg-orange-950/20"></div>
        <div className="h-4 w-3/4 rounded-xl animate-pulse bg-orange-950/20"></div>
      </div>
    </div>
  );
};

export const LoadingAbout = () => {
  return (
    <div className="w-full bg-orange-950/20 p-4 rounded-2xl space-y-4">
      <div className="h-52 bg-orange-950/20 animate-pulse rounded-xl"></div>
      <div className="h-6 bg-orange-950/20 animate-pulse rounded-xl"></div>
      <div className="h-4 w-3/4 bg-orange-950/20 animate-pulse rounded-xl"></div>
      <div className="flex gap-4">
        <div className="w-20 h-8 bg-orange-950/20 animate-pulse rounded-full"></div>
        <div className="w-20 h-8 bg-orange-950/20 animate-pulse rounded-full"></div>
        <div className="w-20 h-8 bg-orange-950/20 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
};

export const LoadingHomeBanner = () => {
  return (
    <>
      <div className="flex-[2_2_0%] space-y-6">
        <div className="h-4 w-16 bg-orange-950/20 rounded-full animate-pulse"></div>
        <div className="h-24 bg-orange-950/20 rounded-xl animate-pulse"></div>
        <div className="h-6 bg-orange-950/20 rounded-full animate-pulse"></div>
        <div className="h-10 flex gap-6">
          <div className="w-28 bg-orange-950/20 rounded-full animate-pulse"></div>
          <div className="w-28 bg-orange-950/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="flex-[0_0_16rem] h-[16rem]  bg-orange-950/20 rounded-xl animate-pulse"></div>
    </>
  );
};

export const LoadingRecently = () => {
  return (
    <div className="flex gap-10">
      <div className="space-y-3 flex-1">
        <div className="bg-orange-950/20 animate-pulse aspect-square rounded-xl"></div>
        <div className="bg-orange-950/20 animate-pulse h-6 rounded-full"></div>
        <div className="bg-orange-950/20 animate-pulse h-4 rounded-full"></div>
      </div>
      <div className="flex-[2_2_0%] xl:flex-[3_3_0%] space-y-4">
        <div className="bg-orange-950/10  h-[4.3rem] rounded-xl px-3 py-2 flex gap-4 justify-between items-center">
          <div className="h-full flex gap-4 items-center">
            <div className="bg-orange-950/20 animate-pulse rounded-xl w-[3.3rem] h-full"></div>
            <div className="space-y-3">
              <div className="bg-orange-950/20 animate-pulse rounded-xl w-52 h-5"></div>
              <div className="bg-orange-950/20 animate-pulse rounded-xl w-40 h-3"></div>
            </div>
          </div>
          <div className="bg-orange-950/20 animate-pulse rounded-xl h-4 w-8"></div>
        </div>
        <div className="bg-orange-950/10  h-[4.3rem] rounded-xl  px-3 py-2 flex gap-4 justify-between items-center">
          <div className="h-full flex gap-4 items-center">
            <div className="bg-orange-950/20 animate-pulse rounded-xl w-[3.3rem] h-full"></div>
            <div className="space-y-3">
              <div className="bg-orange-950/20 animate-pulse rounded-xl w-52 h-5"></div>
              <div className="bg-orange-950/20 animate-pulse rounded-xl w-40 h-3"></div>
            </div>
          </div>
          <div className="bg-orange-950/20 animate-pulse rounded-xl h-4 w-8"></div>
        </div>
        <div className="bg-orange-950/10  h-[4.3rem] rounded-xl  px-3 py-2 flex gap-4 justify-between items-center">
          <div className="h-full flex gap-4 items-center">
            <div className="bg-orange-950/20 animate-pulse rounded-xl w-[3.3rem] h-full"></div>
            <div className="space-y-3">
              <div className="bg-orange-950/20 animate-pulse rounded-xl w-52 h-5"></div>
              <div className="bg-orange-950/20 animate-pulse rounded-xl w-40 h-3"></div>
            </div>
          </div>
          <div className="bg-orange-950/20 animate-pulse rounded-xl h-4 w-8"></div>
        </div>
        <div className="bg-orange-950/10  h-[4.3rem] rounded-xl  px-3 py-2 flex gap-4 justify-between items-center">
          <div className="h-full flex gap-4 items-center">
            <div className="bg-orange-950/20 animate-pulse rounded-xl w-[3.3rem] h-full"></div>
            <div className="space-y-3">
              <div className="bg-orange-950/20 animate-pulse rounded-xl w-52 h-5"></div>
              <div className="bg-orange-950/20 animate-pulse rounded-xl w-40 h-3"></div>
            </div>
          </div>
          <div className="bg-orange-950/20 animate-pulse rounded-xl h-4 w-8"></div>
        </div>
      </div>
    </div>
  );
};

export const LoaidingAlbumPlaylistBanner = () => {
  return (
    <>
      <div className="flex gap-10 items-end">
        <div className="flex-[0_0_20rem] h-[20rem] bg-orange-950/20 animate-pulse rounded-xl"></div>
        <div className="flex-1 space-y-6">
          <div className="h-8 w-20 bg-orange-950/20 animate-pulse rounded-full"></div>
          <div className="h-20 bg-orange-950/20 animate-pulse rounded-xl"></div>
          <div className="h-8  bg-orange-950/20 animate-pulse rounded-full"></div>
          <div className="flex gap-4">
            <div className="h-12 w-28 bg-orange-950/20 animate-pulse rounded-full"></div>
            <div className="h-12 w-28 bg-orange-950/20 animate-pulse rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};
