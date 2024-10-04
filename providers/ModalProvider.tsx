"use client";
import { useEffect, useState } from "react";

import { AuthModal, UploadModal } from "@/components";
import { ModalProviderProps } from "@/lib";
import SubscribeModal from "@/components/SubscribeModal";

export const ModalProvider: React.FC<ModalProviderProps> = ({ products }) => {
  // export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  );
};
