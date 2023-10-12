import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import fetchApi from "@/lib/fetchApi";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  const { categories } = await fetchApi(
    "browse/categories",
    session!.accessToken,
  );

  return (
    <div className="space-y-6">
      <h1 className="mt-6 font-semibold fluid-4xl">Genres</h1>
      <div className=" grid grid-cols-4 grid-rows-1 md:gap-4 2xl:gap-12 ">
        {categories.items.map((category: any, i: number) => {
          if (i === 0) return;
          return (
            <Link href={`/genres/${category.id}`} key={category.id}>
              <div>
                <Image
                  className="rounded-xl"
                  src={category.icons[0].url}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default page;
