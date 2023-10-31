import React from "react";

const page = () => {
  return (
    <div className="container mx-auto space-y-4  px-6 py-6 xl:max-w-screen-lg">
      <h1 className="text-5xl font-bold">How to play a song in JamSpace</h1>
      <h2>Step 1: Open Spotify App</h2>
      <video controls>
        <source src="/help/openingSpotifyApp.mp4" />
      </video>
      <h2>Step 2: Play a song in the app</h2>
      <video controls>
        <source src="/help/playingASong.mp4" />
      </video>
      <h2>Step 3: Pause that song</h2>
      <video controls>
        <source src="/help/pausingSong.mp4" />
      </video>
      <h2>Step 4: Go Back to JamSpace and try to play any song</h2>
      <video controls>
        <source src="/help/playingSongJamSpace.mp4" />
      </video>
    </div>
  );
};

export default page;
