import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: `%s | JamSpace`,
    default: "JamSpace", // a default is required when creating a template
  },
};

export default function ComingSoonLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-[100svh] flex flex-col ">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
