import HomeBanner from "@/components/HomeBanner";
import RecentlyPlayed from "@/components/RecentlyPlayed";

export default function Home() {
  return (
    <section className="py-6 pr-6 lg:pr-0 overflow-y-auto 2xl:flex-[3_2_0%] space-y-8">
      <HomeBanner />
      <RecentlyPlayed />
    </section>
  );
}
