import HomeBanner from "@/components/HomeBanner";
import NavLinks from "@/components/NavLinks";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <>
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
      <section className="pr-6 lg:pr-0 space-y-8 overflow-y-auto ">
        <HomeBanner />
        <RecentlyPlayed />
      </section>
    </>
  );
}
