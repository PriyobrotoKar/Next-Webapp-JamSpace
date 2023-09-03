import Library from "./Library";
import NavSideLinks from "./NavSideLinks";
import { VscLibrary } from "react-icons/vsc";

const SidebarLeft = () => {
  return (
    <aside className="px-6 pt-6 xl:w-[16rem] 2xl:flex-1 md:w-[6rem] flex flex-col">
      <h1 className="px-3 md:hidden lg:block">Browse Music</h1>
      <NavSideLinks />
      <h2 className=" mt-8">
        <div className="lg:hidden ">
          <VscLibrary className={"text-neutral-400 text-2xl mx-auto"} />
        </div>
        <div className="hidden lg:block">Library</div>
      </h2>
      <Library />
    </aside>
  );
};

export default SidebarLeft;
