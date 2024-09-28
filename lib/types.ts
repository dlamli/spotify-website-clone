import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import React from "react";
import { IconType } from "react-icons";

export type SidebarProps = {
  children: React.ReactNode;
};

export type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

export type HeaderDesktopProps = {
  router: AppRouterInstance;
};

export type ListItemProps = {
  image: string;
  name: string;
  href: string;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export type HeaderProps = {
  children: React.ReactNode;
  className?: string;
};
export type SidebarItemProps = {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
};
