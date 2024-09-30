"use client";

import { useUploadModal, useAuthModal } from "@/hooks";
import { useUser } from "@/hooks/useUser";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

export const Library = () => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user, subscription } = useUser();
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
        List of Songs
      </div>
    </div>
  );
};
