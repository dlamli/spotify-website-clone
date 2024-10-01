"use client";

import React from "react";
import { UserContextProvider } from "@/contexts/UserProvider";
import { UserProviderProps } from "@/lib/types";

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};
