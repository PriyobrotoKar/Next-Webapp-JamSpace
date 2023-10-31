import NextAuthProvider from "@/Providers/NextAuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    template: `%s | JamSpace`,
    default: "JamSpace", // a default is required when creating a template
  },
  openGraph: {
    title: "JamSpace",
    description:
      "Discover a vast library of songs, albums, and playlists. Enjoy personalized recommendations, secure authentication, and effortless playlist creation. Immerse yourself in the magic of music with JamSpace today.",
    url: "https://thejamspace.vercel.app",
    siteName: "JamSpace",
    images: [
      {
        url: "https://raw.githubusercontent.com/PriyobrotoKar/Next-Webapp-JamSpace/develop/public/loginDesktop.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JamSpace",
    description:
      "Discover a vast library of songs, albums, and playlists. Enjoy personalized recommendations, secure authentication, and effortless playlist creation. Immerse yourself in the magic of music with JamSpace today.",
    creator: "@priyobrotokar",
    images: [
      "https://raw.githubusercontent.com/PriyobrotoKar/Next-Webapp-JamSpace/develop/public/loginDesktop.png",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextAuthProvider>
        <body className="relative bg-gradient-to-b from-orange-900/25 to-[30rem]  font-Poppins">
          <Toaster position="top-center" />
          {children}
        </body>
      </NextAuthProvider>
    </html>
  );
}
