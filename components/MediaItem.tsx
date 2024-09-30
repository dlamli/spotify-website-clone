"use client";

import { useLoadImage } from "@/hooks";
import { MediaItemProps } from "@/lib/types";
import Image from "next/image";

export const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
  const imgUrl = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    //Default turn on player
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md overflow-hidden min-h-[48px] min-w-[48px]">
        <Image
          fill
          src={imgUrl || "/images/liked.png"}
          alt="Media Item"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-neutral-400 text-sm truncate">{data.author}</p>
      </div>
    </div>
  );
};
