import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import CopyProfileLinkBtn from "@/components/CopyProfileLinkBtn";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);
  const profile = await fetchApi("me", session!.accessToken);
  return (
    <div>
      <div className="flex items-end gap-10">
        <div>
          <Image
            className="h-52 w-52 rounded-full object-cover "
            src={profile.images[1].url}
            alt=""
            width={200}
            height={200}
          />
        </div>
        <div className=" space-y-4">
          <div>Profile</div>
          <div className="relative w-fit font-semibold fluid-4xl">
            <CopyProfileLinkBtn />
            {profile.display_name}
          </div>
          <div className="text-neutral-300">
            {profile.followers.total} Followers
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
