import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { HiTrendingUp } from "react-icons/hi";
import { IoMdMusicalNote } from "react-icons/io";

const NavSideLinks = () => {
  return (
    <div>
      <h1 className="px-3 md:hidden lg:block">Browse Music</h1>
      <nav className="mt-6 w-[13rem] space-y-2 md:w-full">
        <Link
          className="flex items-center gap-3   rounded-xl p-3 transition-colors hover:bg-orange-950/40"
          href={"/"}
        >
          <GoHomeFill className={"text-2xl"} />{" "}
          <div className="md:hidden xl:block">Home</div>
        </Link>
        <Link
          className="flex items-center gap-3   rounded-xl p-3 transition-colors hover:bg-orange-950/40"
          href={"/newrelease"}
        >
          <AiFillFire className={"text-2xl"} />
          <div className="md:hidden xl:block">New Release</div>
        </Link>
        <Link
          className="flex items-center gap-3  rounded-xl p-3 transition-colors hover:bg-orange-950/40"
          href={"/trending"}
        >
          <HiTrendingUp className={"text-2xl"} />
          <div className="md:hidden xl:block">Trending</div>
        </Link>
        <Link
          className="flex items-center gap-3  rounded-xl p-3 transition-colors hover:bg-orange-950/40"
          href={"/genres"}
        >
          <IoMdMusicalNote className={"text-2xl"} />
          <div className="md:hidden xl:block">Genres</div>
        </Link>
      </nav>
    </div>
  );
};

export default NavSideLinks;
