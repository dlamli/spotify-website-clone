import { Song } from "@/lib/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const useLoadSong = (song: Song) => {
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return "";
  }

  const { data: songData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
};
