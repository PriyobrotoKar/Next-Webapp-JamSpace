import HomeBanner from "@/components/HomeBanner";
import NavLinks from "@/components/NavLinks";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <section className="space-y-8 pr-6 lg:pr-0 ">
        <HomeBanner />
        <RecentlyPlayed />
      </section>
    </>
  );
}
