import Library from "./Library";
import NavSideLinks from "./NavSideLinks";

const SidebarLeft = () => {
  return (
    <aside className="px-6 pt-6 xl:w-[16rem] 2xl:flex-1 md:w-[6rem] flex flex-col gap-8">
      <div className="text-xl md:text-2xl font-medium  ">
        Jam<span className="text-gray-400">Space</span>
      </div>
      <NavSideLinks />
      <Library />
    </aside>
  );
};

export default SidebarLeft;
