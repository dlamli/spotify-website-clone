"use client";

import { useLoadImage } from "@/hooks";
import Image from "next/image";

import { SongItemProps } from "@/lib/types";
import { PlayButton } from "./PlayButton";

export const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imgPath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="
        relative
        group
        flex
        flex-col
        items-center
        justify-center
        gap-x-4
        rounded-md
        overflow-hidden
        bg-neutral-400/5
        cursor-pointer
        hover:bg-neutral-400/10
        transition
        p-3
      "
    >
      <div
        className="
          relative
          aspect-square
          w-full
          h-full
          rounded-md
          overflow-hidden
        "
      >
        <Image
          className="object-cover"
          src={imgPath || "/images/liked.png"}
          fill
          alt="Image Song"
        />
      </div>
      <div className="flex flex-col items-start w-full pt-4 gap-y-1">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 text-sm pb-4 w-full truncate">
          By {data.author}
        </p>
      </div>
      <div className="absolute bottom-24 right-5">
        <PlayButton />
      </div>
    </div>
  );
};
