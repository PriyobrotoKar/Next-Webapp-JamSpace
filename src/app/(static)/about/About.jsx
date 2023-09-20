"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const bannerRef = useRef(null);
  const mainRef = useRef(null);

  const stopScrolling = () => {
    document.body.classList.add("h-full");
    document.body.classList.add("overflow-hidden");
    setTimeout(() => {
      document.body.classList.remove("h-full");
      document.body.classList.remove("overflow-hidden");
    }, 2000);
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    stopScrolling();
    const tl = gsap.timeline();
    tl.fromTo(
      bannerRef.current,
      {
        scale: 1.1,
        autoAlpha: 0,
      },
      {
        autoAlpha: 1,
        scale: 1,
        duration: 2,
      },
    ).fromTo(
      mainRef.current,
      {
        y: "10%",
      },
      {
        y: "-10%",
        autoAlpha: 1,
        delay: -1,
        duration: 1.5,
      },
    );

    gsap.fromTo(
      bannerRef.current,
      {
        opacity: 1,
        scale: 1,
      },
      {
        opacity: 0,
        scale: 0.98,

        scrollTrigger: {
          trigger: bannerRef.current,
          start: "10% top",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }, []);
  return (
    <div className="">
      <div className="sticky top-24 -z-10 h-[45vh]  min-h-[20rem] w-full -translate-y-24 overflow-hidden before:absolute before:inset-0 before:z-10 before:block before:h-full before:bg-gradient-to-b before:from-transparent before:to-black">
        <Image
          ref={bannerRef}
          alt="about banner"
          className="h-full object-cover object-[50%_50%] opacity-0"
          fill
          src={"/aboutbanner.png"}
        />
      </div>
      <main
        ref={mainRef}
        className="container mx-auto  space-y-4 px-6 opacity-0 xl:max-w-screen-lg"
      >
        <div>
          <h1 className="py-6 text-5xl font-semibold md:py-10">
            About JamSpace
          </h1>
          <p className="text-sm leading-relaxed text-neutral-300 md:text-base">
            JamSpace combines NextJS, NextAuth, Spotify API, and Redux to offer
            a seamless music streaming experience. Discover a vast library of
            songs, albums, and playlists. Enjoy personalized recommendations,
            secure authentication, and effortless playlist creation. Immerse
            yourself in the magic of music with JamSpace today. Featuring a
            sleek and intuitive user interface. The SpotifyAPI allows you to
            effortlessly explore a vast library of songs, albums, and playlists
            from various genres and artists as well as you can access your
            favorite tracks and personalized recommendations, ensuring that you
            never miss a beat.
          </p>
        </div>
        <div>
          <h2 className="py-6 text-4xl font-medium">Role in this project</h2>
          <p className="text-sm md:text-base">Front-end Developer</p>
        </div>
        <div>
          <h2 className="py-6 text-4xl font-medium">Features Implemented</h2>
          <ul className="list-outside  list-disc space-y-2 pl-5 text-sm text-neutral-300 md:text-base">
            <li>
              Vast Music Library: Access a vast collection of songs, albums, and
              playlists across various genres and artists.
            </li>
            <li>
              Personalized Recommendations: Enjoy personalized music
              recommendations based on your listening history and preferences.
            </li>
            <li>
              Secure Authentication: Benefit from a secure and seamless
              authentication process powered by NextAuth.
            </li>
            <li>
              Effortless Playlist Creation: Create and curate your own playlists
              with ease, organizing your favorite tracks for any mood or
              occasion.
            </li>
            <li>
              Collaboration and Sharing: Share your playlists with friends and
              collaborate on music discoveries together.
            </li>
            <li>
              Seamless Playback Experience: Utilize Redux for efficient state
              management, ensuring a smooth and uninterrupted playback
              experience.
            </li>
            <li>
              Discover New Music: Explore new artists, genres, and trending
              tracks to expand your musical horizons.
            </li>
            <li>
              User-Friendly Interface: Experience a sleek and intuitive user
              interface for easy navigation and enjoyable music exploration.
            </li>
            <li>
              Mobile Compatibility: Access JamSpace on the go, as the web app is
              optimized for mobile devices.
            </li>
            <li>
              Next-Level Music Journey: Immerse yourself in the magic of music
              with JamSpace, where every beat and melody takes you on an
              unforgettable journey.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="py-6 text-4xl font-medium">Tech Stack</h2>
          <div className=" flex max-w-3xl flex-wrap items-center justify-center gap-6 md:justify-start [&>*]:flex-1">
            <div className="group flex flex-col items-center gap-1">
              <Image
                className="cursor-pointer"
                src={"/logos/react.svg"}
                alt=""
                width={40}
                height={40}
              />
              <div className="whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                React
              </div>
            </div>
            <div className="group flex flex-col items-center gap-1">
              <Image
                className="cursor-pointer"
                src={"/logos/nextjs.svg"}
                alt=""
                width={40}
                height={40}
              />
              <div className="whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                Next JS
              </div>
            </div>
            <div className="group flex flex-col items-center gap-1">
              <Image
                className="cursor-pointer"
                src={"/logos/redux.svg"}
                alt=""
                width={40}
                height={40}
              />
              <div className="whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                Redux
              </div>
            </div>
            <div className="group flex flex-col items-center gap-1">
              <Image
                className="cursor-pointer"
                src={"/logos/tailwind-css.svg"}
                alt=""
                width={40}
                height={40}
              />
              <div className="whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                Tailwind
              </div>
            </div>
            <div className="group flex flex-col items-center gap-1">
              <Image
                className="cursor-pointer"
                src={"/logos/spotify.svg"}
                alt=""
                width={40}
                height={40}
              />
              <div className="whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                Spotify API
              </div>
            </div>
            <div className="group flex flex-col items-center gap-1">
              <Image
                className="cursor-pointer"
                src={"/logos/nextauth.png"}
                alt=""
                width={40}
                height={40}
              />
              <div className="whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                NextAuth
              </div>
            </div>
            <div className="group flex flex-col items-center gap-1">
              <Image
                className="cursor-pointer"
                src={"/logos/git.svg"}
                alt=""
                width={40}
                height={40}
              />
              <div className="whitespace-nowrap opacity-0 transition-opacity group-hover:opacity-100">
                Git
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default About;
