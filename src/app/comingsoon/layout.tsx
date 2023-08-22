import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function ComingSoonLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen flex flex-col">
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
