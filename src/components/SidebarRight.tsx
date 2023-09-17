import React from "react";
import AboutArtist from "./AboutArtist";
import SideQueue from "./SideQueue";
import ProfileBtn from "./ProfileBtn";

const SidebarRight = () => {
  return (
    <div className="px-6 pt-6 hidden lg:block lg:w-[20rem] xl:w-[22rem] 2xl:flex-1 space-y-8">
      <ProfileBtn />
      <AboutArtist />
      <SideQueue />
    </div>
  );
};

export default SidebarRight;
