"use client";

import { UserContextProvider } from "@/contexts/UserProvider";
import { UserProviderProps } from "@/lib/types";
import React from "react";

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};
