import Link from "next/link";
import { GoHomeFill } from "react-icons/go";
import { AiFillFire } from "react-icons/ai";
import { BsPersonHeart } from "react-icons/bs";
import { IoMdMusicalNote } from "react-icons/io";

const NavSideLinks = () => {
  return (
    <div>
      <h1 className="px-3 md:hidden lg:block">Browse Music</h1>
      <nav className="mt-6 w-[13rem] space-y-2 md:w-full">
        <Link
          className="flex items-center gap-3   rounded-xl p-3 transition-colors hover:bg-neutral-900"
          href={"/"}
        >
          <GoHomeFill className={"text-2xl"} />{" "}
          <div className="md:hidden xl:block">Home</div>
        </Link>
        <Link
          className="flex items-center gap-3   rounded-xl p-3 transition-colors hover:bg-neutral-900"
          href={"/new"}
        >
          <AiFillFire className={"text-2xl"} />
          <div className="md:hidden xl:block">New Release</div>
        </Link>
        <Link
          className="flex items-center gap-3  rounded-xl p-3 transition-colors hover:bg-neutral-900"
          href={"/artists"}
        >
          <BsPersonHeart className={"text-2xl"} />
          <div className="md:hidden xl:block">Artists</div>
        </Link>
        <Link
          className="flex items-center gap-3  rounded-xl p-3 transition-colors hover:bg-neutral-900"
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
