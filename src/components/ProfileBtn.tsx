"use client";
import { signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { twJoin } from "tailwind-merge";
import Link from "next/link";

const ProfileBtn = () => {
  const { data } = useSession();
  return (
    <div className="flex justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div
            className={twJoin(
              " flex max-w-fit items-center gap-4 rounded-full bg-orange-600/10 transition-colors hover:bg-orange-600/20 md:min-w-[10rem] md:pr-8",
              !data && "animate-pulse",
            )}
          >
            <Avatar>
              <AvatarImage src={data?.user?.image || ""} />
              <AvatarFallback>
                <div className=" text-center text-[1.1rem]  font-medium ">
                  {data?.user?.name?.at(0)?.toUpperCase()}
                </div>
              </AvatarFallback>
            </Avatar>
            <span className="hidden md:block">{data?.user?.name}</span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 origin-top rounded-[10px] border-none bg-[#150906bd] p-2  backdrop-blur-md">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="rounded-[10px]">
            <Link
              href={`https://open.spotify.com/user/${data?.providerAccountId}`}
            >
              Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-[10px]">
            <Link href={`/user/${data?.providerAccountId}`}>Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => signOut()}
            className="rounded-[10px]"
          >
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ProfileBtn;
