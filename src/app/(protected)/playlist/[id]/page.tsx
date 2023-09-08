import NavLinks from "@/components/NavLinks";
import PlaylistBanner from "@/components/PlaylistBanner";
import { Input } from "@/components/ui/input";
import React from "react";
import { FiSearch } from "react-icons/fi";

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <header className="backdrop-blur-md py-6">
        <div className="flex justify-between items-center">
          <NavLinks />
          <div className="flex gap-1 items-center w-[18rem] border rounded-full px-4 focus-within:ring-1 ring-white">
            <FiSearch />
            <Input
              type="text"
              placeholder="Want do you want to listen to?"
              className="border-none bg-transparent focus-visible:ring-offset-0 focus-visible:ring-0"
            />
          </div>
        </div>
      </header>
      <PlaylistBanner params={params} />
    </div>
  );
};

export default page;
