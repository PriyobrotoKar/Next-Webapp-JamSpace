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
        "ml-auto flex min-w-[10rem] max-w-fit items-center gap-4 rounded-full bg-orange-600/10 pr-8 transition-colors hover:bg-orange-600/20",
        !data && "animate-pulse",
      )}
    >
      <Avatar>
        <AvatarImage src={data?.user?.image || ""} />
        <AvatarFallback>
          <div className="text-center text-[1.1rem]  font-medium ">
            {data?.user?.name?.at(0)?.toUpperCase()}
          </div>
        </AvatarFallback>
      </Avatar>
      <DropdownMenu>
        <DropdownMenuTrigger>{data?.user?.name}</DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 origin-top rounded-[10px] border-none bg-[#150906bd] p-2  backdrop-blur-md">
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
