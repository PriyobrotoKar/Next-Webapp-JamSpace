import Link from "next/link";
import Library from "./Library";
import NavSideLinks from "./NavSideLinks";

const SidebarLeft = () => {
  return (
    <aside className="sticky top-0 hidden h-[100svh] flex-col gap-8 px-6 pt-6 md:flex md:w-[6rem] xl:w-[16rem] 2xl:flex-1">
      <Link
        href={"/"}
        className="hidden text-xl font-medium md:text-2xl xl:block  "
      >
        Jam<span className="text-gray-400">Space</span>
      </Link>
      <NavSideLinks />
      <Library />
    </aside>
  );
};

export default SidebarLeft;
