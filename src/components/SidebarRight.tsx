import React from "react";
import AboutArtist from "./AboutArtist";
import SideQueue from "./SideQueue";

const SidebarRight = () => {
  return (
    <div className="px-6 pt-6 hidden lg:block lg:w-[16rem] 2xl:flex-1 space-y-8">
      <AboutArtist />
      <SideQueue />
    </div>
  );
};

export default SidebarRight;
