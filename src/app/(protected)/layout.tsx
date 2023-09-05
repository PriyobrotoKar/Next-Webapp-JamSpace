import NextAuthProvider from "@/Providers/NextAuthProvider";
import "../globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

import SidebarRight from "@/components/SidebarRight";
import SidebarLeft from "@/components/SidebarLeft";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextAuthProvider>
      <section className="font-Poppins min-h-[100svh] bg-gradient-to-b from-orange-900/25 to-40%">
        <Navbar />
        <main className="mx-auto max-w-[2000px] flex gap-0 lg:gap-6 justify-between h-[calc(100svh-5.6rem)]">
          <SidebarLeft />
          {children}
          <SidebarRight />
        </main>
      </section>
    </NextAuthProvider>
  );
}
