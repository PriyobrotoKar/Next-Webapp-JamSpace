import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";

const ArtistCard = ({ artists }: { artists: any[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 md:text-center 2xl:gap-10">
      {artists.map((artist, i) => {
        if (i > 3) return;
        return (
          <Link
            key={artist.id}
            href={`/artist/${artist.id}`}
            className="group relative flex flex-row items-center gap-4 rounded-xl p-4 hover:bg-orange-950/40 md:flex-col "
          >
            <div>
              <Image
                className="aspect-square w-16 rounded-full object-cover group-hover:shadow-2xl md:w-full"
                src={
                  artist.images.length !== 0
                    ? artist.images[0].url
                    : "/artitst-fallback.svg"
                }
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div>
              <div className="line-clamp-1 font-semibold">{artist.name}</div>
              <div className="text-sm text-neutral-400">Artist</div>
            </div>
            <Button
              size={"sm"}
              className="absolute bottom-[20%] left-1/2 -translate-x-1/2 space-x-2 px-4 text-lg text-white opacity-0  transition-all duration-300 group-hover:bottom-1/4 group-hover:opacity-100"
            >
              <FaPlay />
              <div>PLAY</div>
            </Button>
          </Link>
        );
      })}
    </div>
  );
};

export default ArtistCard;
