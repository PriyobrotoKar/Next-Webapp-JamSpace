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

const ProfileBtn = () => {
  const { data } = useSession();
  return (
    <div
      className={twJoin(
        "flex gap-4 min-w-[10rem] items-center bg-orange-600/10 hover:bg-orange-600/20 transition-colors rounded-full pr-8",
        !data && "animate-pulse"
      )}
    >
      <Avatar>
        <AvatarImage src={data?.user?.image || ""} />
        <AvatarFallback>
          <div className="text-[1.1rem] font-medium  text-center ">
            {data?.user?.name?.at(0)?.toUpperCase()}
          </div>
        </AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger>{data?.user?.name}</DropdownMenuTrigger>
        <DropdownMenuContent className="rounded-[10px] border-none mt-2 bg-neutral-800/40 p-2  origin-top">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="rounded-[10px]">
            Account
          </DropdownMenuItem>
          <DropdownMenuItem className="rounded-[10px]">
            Profile
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
