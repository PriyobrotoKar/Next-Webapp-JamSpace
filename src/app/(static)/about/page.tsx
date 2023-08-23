import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="min-h-[20rem] h-[40vh] w-full overflow-hidden  sticky -translate-y-24 top-24 -z-10 before:bg-gradient-to-b before:to-black before:h-full before:block before:z-10 before:from-transparent before:absolute before:inset-0">
        <Image
          alt="about banner"
          className="object-cover object-[50%_50%] h-full"
          fill
          src={"/aboutbanner.png"}
        />
      </div>
      <main className="px-6 max-w-screen-lg mx-auto -translate-y-10 space-y-4">
        <div>
          <h1 className="text-5xl font-semibold py-10">About JamSpace</h1>
          <p className="leading-relaxed text-neutral-300">
            JamSpace combines NextJS, NextAuth, Spotify API, and Redux to offer
            a seamless music streaming experience. Discover a vast library of
            songs, albums, and playlists. Enjoy personalized recommendations,
            secure authentication, and effortless playlist creation. Immerse
            yourself in the magic of music with JamSpace today. Featuring a
            sleek and intuitive user interface, HarmoniFi allows you to
            effortlessly explore a vast library of songs, albums, and playlists
            from various genres and artists. With the integration of Spotify
            API, you can access your favorite tracks and personalized
            recommendations, ensuring that you never miss a beat.
          </p>
        </div>
        <div>
          <h2 className="text-4xl font-medium py-6">Role in this project</h2>
          <p>Front-end Developer</p>
        </div>
        <div>
          <h2 className="text-4xl font-medium py-6">Features Implemented</h2>
          <ul className="list-disc  text-neutral-300">
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
      </main>
    </div>
  );
};

export default About;
