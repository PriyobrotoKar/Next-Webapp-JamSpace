import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { BsPersonHeart } from "react-icons/bs";
import { IoMdMusicalNote } from "react-icons/io";

const NavSideLinks = () => {
  return (
    <div>
      <h1 className="px-3 md:hidden lg:block">Browse Music</h1>
      <nav className="space-y-2 mt-6 w-[13rem] md:w-full">
        <Link
          className="flex items-center gap-3   hover:bg-neutral-900 transition-colors p-3 rounded-xl"
          href={"/"}
        >
          <GoHomeFill className={"text-2xl"} />{" "}
          <div className="md:hidden xl:block">Home</div>
        </Link>
        <Link
          className="flex items-center gap-3   hover:bg-neutral-900 transition-colors p-3 rounded-xl"
          href={"/new"}
        >
          <AiFillFire className={"text-2xl"} />
          <div className="md:hidden xl:block">New Release</div>
        </Link>
        <Link
          className="flex items-center gap-3  hover:bg-neutral-900 transition-colors p-3 rounded-xl"
          href={"/artists"}
        >
          <BsPersonHeart className={"text-2xl"} />
          <div className="md:hidden xl:block">Artists</div>
        </Link>
        <Link
          className="flex items-center gap-3  hover:bg-neutral-900 transition-colors p-3 rounded-xl"
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
