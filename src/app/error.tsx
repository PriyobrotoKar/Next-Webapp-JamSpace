"use client"; // Error components must be Client Components

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center gap-8">
      <div className="space-y-4">
        <h2 className="text-center text-5xl font-bold">
          Something went wrong!
        </h2>
        <Link
          className="mx-auto block w-fit text-sm text-neutral-300 underline"
          href={"/help"}
        >
          Encountered this error while playing a song?
        </Link>
      </div>
      <Button
        size={"lg"}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
