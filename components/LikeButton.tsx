"use client";

import React, { useEffect, useState } from "react";
import { AiFillLike, AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { useSessionContext } from "@supabase/auth-helpers-react";

import { useAuthModal, useUser } from "@/hooks";
import { LikeButtonProps } from "@/lib/types";
import toast from "react-hot-toast";

export const LikeButton: React.FC<LikeButtonProps> = ({ songId }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const { supabaseClient } = useSessionContext();
  const { user } = useUser();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from("liked_songs")
        .select("*")
        .eq("user_id", user?.id)
        .eq("song_id", songId)
        .single();

      if (!error && data) {
        setIsLiked(true);
      }
    };

    fetchData();
  }, [songId, supabaseClient, user?.id]);

  const Icon = isLiked ? AiFillLike : AiOutlineHeart;

  const handleLike = async () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from("liked_songs")
        .delete()
        .eq("user_id", user.id)
        .eq("song_id", songId);

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(false);
      }
    } else {
      const { error } = await supabaseClient
        .from("liked_songs")
        .insert([{ user_id: user.id, song_id: songId }]);

      if (error) {
        toast.error(error.message);
      } else {
        setIsLiked(true);
        toast.success("Liked!");
      }
    }

    router.refresh();
  };

  return (
    <button onClick={handleLike} className="hover:opacity-75 transition">
      <Icon color={isLiked ? "#22c55e" : "white"} size={25} />
    </button>
  );
};
