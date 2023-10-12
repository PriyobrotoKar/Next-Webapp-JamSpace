import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaPlay } from "react-icons/fa6";
import parse from "html-react-parser";

const AlbumCard = ({ items }: { items: any[] }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 md:gap-4 2xl:gap-12 ">
      {items.map((item, i) => {
        if (!item) return;
        return (
          <Link key={item.id} href={`/${item.type}/${item.id}`}>
            <div className="group relative h-full space-y-4 rounded-xl p-4 hover:bg-orange-950/40">
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
                <div className="line-clamp-2 text-sm text-neutral-400">
                  {i === 0 && item.release_date
                    ? "Latest Release"
                    : item.release_date?.split("-")[0] ||
                      parse(item.description)}
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
  );
};

export default AlbumCard;
