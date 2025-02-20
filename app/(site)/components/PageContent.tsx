"use client";

import React from "react";

import { PageContentProps } from "@/lib/types";
import { SongItem } from "./SongItem";
import { useOnPlay } from "@/hooks";

export const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  const { handlePlay } = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available</div>;
  }
  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-4
        mt-4
      "
    >
      {songs.map((song) => (
        <SongItem
          key={song.id}
          data={song}
          onClick={(id: string) => handlePlay(id)}
        />
      ))}
    </div>
  );
};
