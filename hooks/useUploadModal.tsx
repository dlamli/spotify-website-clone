import { UploadModalStore } from "@/lib/types";
import { create } from "zustand";

export const useUploadModal = create<UploadModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
