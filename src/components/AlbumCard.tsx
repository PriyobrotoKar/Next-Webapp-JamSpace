import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import parse from "html-react-parser";
import PlayAllSongsBtn from "./PlayAllSongsBtn";
import { Session } from "next-auth";
import fetchApi from "@/lib/fetchApi";

const AlbumCard = ({ items }: { items: any[] }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-4 md:gap-4 2xl:gap-12 ">
      {items.map((item, i) => {
        if (!item) return;
        return (
          <Link key={item.id} href={`/${item.type}/${item.id}`}>
            <div className="group relative flex h-full flex-row items-center gap-4 rounded-xl p-4  hover:bg-orange-950/40 md:flex-col md:items-start">
              <div className=" flex-initial">
                <Image
                  className="w-16 rounded-xl transition-shadow group-hover:shadow-2xl md:w-full"
                  src={item.images[0].url || "/no-image.png"}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex-[2_2_0%]">
                <div className="line-clamp-1 font-semibold">{item.name}</div>
                <div className="line-clamp-2 text-sm text-neutral-400">
                  {i === 0 && item.release_date
                    ? "Latest Release"
                    : item.release_date?.split("-")[0] ||
                      parse(item.description)}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AlbumCard;
