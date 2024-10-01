"use client";

import { useLoadSong, usePlayer } from "@/hooks";
import { useGetSongById } from "@/hooks/useGetSongById";
import { PlayerContent } from "./PlayerContent";

export const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  const songUrl = useLoadSong(song!);

  if (!songUrl || !song || !player.activeId) {
    return null;
  }

  return (
    <div className="fixed bottom-0 bg-black w-full py-2 h-[80px] px-4">
      <PlayerContent key={songUrl} song={song} songUrl={songUrl}/>
    </div>
  );
};
