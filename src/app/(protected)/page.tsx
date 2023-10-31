import HomeBanner from "@/components/HomeBanner";
import RecentlyPlayed from "@/components/RecentlyPlayed";

export default function Home() {
  return (
    <>
      <section className="space-y-8 overflow-x-hidden md:pr-6 lg:pr-0 ">
        <HomeBanner />
        <RecentlyPlayed />
      </section>
    </>
  );
}
