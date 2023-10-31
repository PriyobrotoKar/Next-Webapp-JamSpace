import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "../globals.css";

export default function ComingSoonLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-[100svh] flex-col ">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
