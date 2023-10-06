import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import NewReleases from "@/components/NewReleases";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="mt-32 font-semibold fluid-4xl">New Releases</h1>
      <h2 className="mb-6 mt-20 text-2xl font-medium">
        New albums and singles
      </h2>
      <NewReleases />
    </div>
  );
};

export default page;
