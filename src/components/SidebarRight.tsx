import React from "react";
import AboutArtist from "./AboutArtist";
import SideQueue from "./SideQueue";
import ProfileBtn from "./ProfileBtn";

const SidebarRight = () => {
  return (
    <div className="hidden space-y-8 px-6 pt-6 lg:block lg:w-[20rem] xl:w-[22rem] 2xl:flex-1">
      <ProfileBtn />
      <AboutArtist />
      <SideQueue />
    </div>
  );
};

export default SidebarRight;
