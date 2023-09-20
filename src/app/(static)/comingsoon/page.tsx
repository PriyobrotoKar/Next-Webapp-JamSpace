import Link from "next/link";
import type { Metadata } from "next";
import "./style.css";
import { BsArrowRight } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Coming Soon",
};
export default function ComingSoon() {
  return (
    <section className=" flex flex-1 flex-col justify-center space-y-6 pb-8 text-center">
      <h1 className="animate-gradient bg-gradient-to-r from-gray-100 via-orange-600 to-orange-400 bg-clip-text text-5xl font-extrabold leading-loose text-transparent md:text-8xl md:leading-[8rem]">
        Coming Soon
      </h1>
      <div className="space-y-6">
        <p className="text-2xl">JamSpace is currently in development phase</p>
        <div className="mx-auto max-w-[22rem] text-gray-400 md:max-w-full">
          <p>
            This site will update automatically when there&#39;s a new feature
            release so hold tight.
          </p>
          <p> JamSpace will be live soon!</p>
        </div>
        <button className=" mx-auto rounded-full bg-white font-medium text-black transition-colors hover:bg-orange-500 md:text-xl ">
          <Link
            className="group  flex items-center gap-2 px-6 py-3"
            href={"/about"}
          >
            <span>Learn More</span>
            <BsArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </button>
      </div>
    </section>
  );
}
