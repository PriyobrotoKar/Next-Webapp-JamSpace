"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";

export function Discography({
  albums,
  singles,
}: {
  albums: any[];
  singles: any[];
}) {
  const [items, setitems] = useState(albums);
  const [activeTab, setActiveTab] = useState("Albums");

  const handleTabChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.currentTarget.innerText === "Albums") {
      setitems(albums);
      setActiveTab("Albums");
    } else {
      setitems(singles);
      setActiveTab("Singles");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="px-3 text-lg font-medium tracking-wide">DISCOGRAPHY</h2>

      <div className="flex gap-4 ">
        <button
          onClick={handleTabChange}
          className={`rounded-full  bg-neutral-950  px-4 py-2 text-sm text-neutral-400 transition-colors hover:bg-orange-950/40 hover:text-white ${
            activeTab === "Albums" ? "bg-orange-950/40 text-white" : ""
          }`}
        >
          Albums
        </button>
        <button
          onClick={handleTabChange}
          className={`rounded-full  bg-neutral-950  px-4 py-2 text-sm text-neutral-400 transition-colors hover:bg-orange-950/40 hover:text-white ${
            activeTab === "Singles" ? "bg-orange-950/40 text-white" : ""
          }`}
        >
          Singles and EPs
        </button>
      </div>

      <div className="grid grid-cols-4 grid-rows-1 md:gap-4 2xl:gap-12 ">
        {items.map((item, i) => {
          return (
            <Link key={item.id} href={`/album/${item.id}`}>
              <div className="group relative space-y-4 rounded-xl p-4 hover:bg-orange-950/40">
                <div>
                  <Image
                    className="w-full rounded-xl transition-shadow group-hover:shadow-2xl"
                    src={item.images[0].url}
                    alt=""
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <div className="line-clamp-1 font-semibold">{item.name}</div>
                  <div className="text-sm text-neutral-400">
                    {i === 0
                      ? "Latest Release"
                      : item.release_date.split("-")[0]}
                  </div>
                </div>
                <Button
                  size={"sm"}
                  className="absolute bottom-[20%] left-1/2 -translate-x-1/2 space-x-2 px-4 text-lg text-white opacity-0  transition-all duration-300 group-hover:bottom-1/4 group-hover:opacity-100"
                >
                  <FaPlay />
                  <div>PLAY</div>
                </Button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Discography;
