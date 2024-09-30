"use client";

import { HeaderProps } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Button, HeaderDesktop, HeaderMobile } from "@/components";
import { useAuthModal } from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const authModal = useAuthModal();
  const router = useRouter();
  const supabaseClient = useSupabaseClient();
  const { user } = useUser();

  const handleLogout = async () => {
    //Handle Logout
    const { error } = await supabaseClient.auth.signOut();
    //Reset any playing songs
    router.refresh();

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Logged out successfully");
    }
  };

  return (
    <div
      className={twMerge(
        `
          h-fit
          w-full 
          bg-gradient-to-b from-emerald-800
          p-6
        `,
        className
      )}
    >
      <div
        className="
          w-full
          mb-4
          flex
          items-center
          justify-between
        "
      >
        <HeaderDesktop />
        <HeaderMobile />
        <div
          className="
            flex
            justify-between
            items-center
            gap-x-4
          "
        >
          {user ? (
            <div
              className="
                flex
                gap-x-4
                items-center
              "
            >
              <Button
                className="
                bg-white
                  px-6
                  py-2
                "
                onClick={handleLogout}
              >
                Logout
              </Button>
              <Button
                onClick={() => router.push("/account")}
                className="bg-white"
              >
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
                  bg-transparent
                  text-neutral-300
                  font-medium
                "
                >
                  Sign up
                </Button>
              </div>
              <div>
                <Button
                  onClick={authModal.onOpen}
                  className="
                  bg-white
                  px-6
                  py-2
                "
                >
                  Log in
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};
