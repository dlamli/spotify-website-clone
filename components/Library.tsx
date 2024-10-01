"use client";

import { useUploadModal, useAuthModal, useOnPlay } from "@/hooks";
import { useUser } from "@/hooks/useUser";
import { LibraryProps } from "@/lib/types";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import { MediaItem } from "@/components";

export const Library: React.FC<LibraryProps> = ({ songs }) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const { handlePlay } = useOnPlay(songs);
  const handleClick = () => {
    //Handle upload later
    if (!user) return authModal.onOpen();

    return uploadModal.onOpen();
  };

  return (
    <div
      className="
        flex
        flex-col"
    >
      <div
        className="
          flex
          justify-between
          px-5
          pt-4"
      >
        <div
          className="
            inline-flex
            items-center
            gap-x-2"
        >
          <TbPlaylist className="text-neutral" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          onClick={handleClick}
          size={20}
          className="
            text-neutral-400 
            cursor-pointer 
            hover:text-white 
            transition"
        />
      </div>
      <div
        className="
          flex
          flex-col
          gap-y-2
          mt-4
          px-3"
      >
        {songs.map((song) => (
          <MediaItem
            key={song.id}
            onClick={(id: string) => handlePlay(id)}
            data={song}
          />
        ))}
      </div>
    </div>
  );
};
