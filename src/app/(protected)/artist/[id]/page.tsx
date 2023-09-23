import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import Discography from "@/components/Discography";
import { Button } from "@/components/ui/button";
import fetchApi from "@/lib/fetchApi";
import { duration, format } from "@/lib/utils";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { FaPlay } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";

export function ArtistBanner({
  name,
  images,
}: {
  name: string;
  images: any[];
}) {
  return (
    <div className="flex items-end gap-10">
      <div>
        <Image
          className="h-52 w-52 rounded-full object-cover "
          src={images[0].url}
          alt=""
          width={200}
          height={200}
        />
      </div>
      <div className=" space-y-4">
        <div className="relative w-fit font-semibold fluid-4xl">
          <div className="absolute left-full top-0 translate-x-2 text-2xl text-blue-400">
            <MdVerified />
          </div>
          {name}
        </div>
        <div className="flex">
          <Button className="space-x-2 p-6 text-xl text-white">
            <FaPlay />
            <div>PLAY</div>
          </Button>
          <Button variant={"link"} className="space-x-2 p-6 text-xl text-white">
            Follow
          </Button>
        </div>
      </div>
    </div>
  );
}

export function Overview({ topTracks, followers, genres, popularity }: any) {
  return (
    <div className="flex gap-10">
      <div className="flex-1 space-y-4">
        <h2 className="px-3 text-lg font-medium tracking-wide">POPULAR</h2>
        <div>
          {topTracks.tracks?.map((track: any, i: number) => {
            if (i > 4) return;
            return (
              <div
                key={track.id}
                className="group flex items-center justify-between gap-4 rounded-xl px-3 py-2 hover:bg-orange-950/40"
              >
                <div className="text-sm group-hover:text-orange-500">
                  <FaPlay />
                </div>
                <div className="flex-1">{track.name}</div>
                <div className="text-sm text-neutral-400">
                  {duration(track.duration_ms)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="grid flex-1 auto-rows-fr grid-cols-2 grid-rows-2 gap-6">
        <div className="row-span-2 flex flex-col items-center justify-center gap-6 rounded-xl bg-neutral-950 p-10">
          <div className="line-clamp-5">
            {genres.map((genre: string, i: number) => {
              if (i > 2) return;
              return (
                <div className="text-2xl font-semibold">
                  {genre[0].toUpperCase() + genre.slice(1)}
                  {i !== genres.length - 1 ? ", " : ""}
                </div>
              );
            })}
          </div>
          <div className="text-neutral-400">Genres</div>
        </div>
        <div className="row-span-1 flex flex-col items-center justify-center rounded-xl bg-neutral-950 p-3 ">
          <div className="text-2xl font-semibold">{format(followers)}</div>
          <div className="text-neutral-400">Monthly Active Listeners</div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl bg-neutral-950 p-3 ">
          <div className="text-2xl font-semibold">{popularity}</div>
          <div className="text-neutral-400">Popularity</div>
        </div>
      </div>
    </div>
  );
}

export function SimilarArtist({ artists }: { artists: any[] }) {
  return (
    <div className="space-y-4">
      <h2 className=" text-lg font-medium uppercase tracking-wide">
        Fans also like
      </h2>
      <div className="grid grid-cols-4 gap-10 text-center">
        {artists.map((artist, i) => {
          if (i > 3) return;
          return (
            <Link href={`/artist/${artist.id}`} className="space-y-4">
              <div>
                <Image
                  className="aspect-square w-full rounded-full object-cover"
                  src={artist.images[0].url}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <div className="font-semibold">{artist.name}</div>
                <div className="text-sm text-neutral-400">Artist</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const page = async ({ params }: { params: { id: string } }) => {
  const session = await getServerSession(authOptions);

  const [artist, albums, singles, topTracks, similarArtists] =
    await Promise.all([
      fetchApi(`artists/${params.id}`, session!.accessToken),
      fetchApi(`artists/${params.id}/albums`, session!.accessToken, {
        include_groups: "album",
        limit: 4,
      }),
      fetchApi(`artists/${params.id}/albums`, session!.accessToken, {
        include_groups: "single",
        limit: 4,
      }),
      fetchApi(`artists/${params.id}/top-tracks`, session!.accessToken, {
        market: "IN",
      }),
      fetchApi(`artists/${params.id}/related-artists`, session!.accessToken),
    ]);

  const {
    images,
    genres,
    name,
    popularity,
    followers: { total },
  } = artist;

  return (
    <div className="space-y-10">
      <ArtistBanner name={name} images={images} />
      <Overview
        topTracks={topTracks}
        followers={total}
        genres={genres}
        popularity={popularity}
      />
      <Discography albums={albums.items} singles={singles.items} />
      <SimilarArtist artists={similarArtists.artists} />
    </div>
  );
};

export default page;
