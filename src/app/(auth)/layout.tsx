import "../globals.css";
export default function LoginLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-[100svh] ">
      {/* Include shared UI here e.g. a header or sidebar */}

      {children}
    </section>
  );
}
