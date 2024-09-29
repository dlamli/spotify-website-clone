import { UserContextType } from "@/lib/types";
import { createContext } from "react";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);
