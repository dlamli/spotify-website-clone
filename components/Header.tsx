"use client";

import { HeaderProps } from "@/lib/types";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Button, HeaderDesktop, HeaderMobile } from "@/components";

export const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const handleLogout = () => {
    //Handle Logout
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
          <>
            <div>
              <Button
                onClick={() => {}}
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
                onClick={() => {}}
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
        </div>
      </div>
      {children}
    </div>
  );
};
