"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6">
      <Link
        className={
          pathname == "/"
            ? ""
            : "text-neutral-400 hover:text-neutral-200 transition-colors"
        }
        href={"/"}
      >
        Music
      </Link>
      <Link
        className={
          pathname == "/podcasts"
            ? ""
            : "text-neutral-400 hover:text-neutral-200 transition-colors"
        }
        href={"/"}
      >
        Podcasts
      </Link>
      <Link
        className={
          pathname == "/live"
            ? ""
            : "text-neutral-400 hover:text-neutral-200 transition-colors"
        }
        href={"/"}
      >
        Live
      </Link>
    </nav>
  );
};

export default NavLinks;
