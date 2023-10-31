import NextAuthProvider from "@/Providers/NextAuthProvider";
import "../globals.css";
import type { Metadata } from "next";

import SidebarRight from "@/components/SidebarRight";
import SidebarLeft from "@/components/SidebarLeft";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Player from "@/components/Player";
import ReduxProvider from "@/Providers/ReduxProvider";
import BottomNav from "@/components/BottomNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <ReduxProvider>
        <Player />
        <BottomNav />
        <main className="mx-auto flex min-h-screen max-w-[2000px] justify-between gap-0 lg:gap-6">
          <SidebarLeft />
          <section className="flex flex-1 flex-col  2xl:flex-[3_2_0%] ">
            <Navbar />
            {children}
            <Footer />
          </section>

          <SidebarRight />
        </main>
      </ReduxProvider>
    </NextAuthProvider>
  );
}
