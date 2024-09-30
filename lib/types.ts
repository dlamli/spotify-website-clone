import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { IconType } from "react-icons";
import Stripe from "stripe";
import { User } from "@supabase/auth-helpers-nextjs";

// Sidebar.tsx
export type SidebarProps = {
  children: React.ReactNode;
};

// Box.tsx
export type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

// HeaderDesktop.tsx
export type HeaderDesktopProps = {
  router: AppRouterInstance;
};

// ListItem.tsx
export type ListItemProps = {
  image: string;
  name: string;
  href: string;
};

// Button.tsx
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Button Props ...
}

// Header.tsx
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

export type SupabaseProviderProps = {
  children: React.ReactNode;
};

// UserProvider.tsx
export type UserDetails = {
  id: string;
  first_name: string;
  last_name: string;
  full_name?: string;
  avatar_url?: string;
  billing_address?: Stripe.Address;
  payment_method?: Stripe.PaymentMethod[Stripe.PaymentMethod.Type];
};

export type Product = {
  id: string;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Metadata;
};

export type Price = {
  id: string;
  product_id?: string;
  active?: boolean;
  description?: string;
  unit_amount?: number;
  currency?: string;
  type?: Stripe.Price.Type;
  interval?: Stripe.Price.Recurring.Interval;
  interval_count?: number;
  trial_period_days?: number | null;
  metadata?: Stripe.Metadata;
  product?: Product;
};

export type Subscription = {
  id: string;
  user_id: string;
  status?: Stripe.Subscription.Status;
  metadata?: Stripe.Metadata;
  price_id?: string;
  quantity?: number;
  cancel_at_period_end?: boolean;
  created: string;
  current_period_start: string;
  current_period_end: string;
  ended_at?: string;
  cancel_at?: string;
  canceled_at?: string;
  trial_start?: string;
  trial_end?: string;
  prices?: Price;
};

export type UserProviderProps = {
  children: React.ReactNode;
};

// UserContext.tsx
export type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

// UserContextProvider.tsx
export type Props = {
  [propName: string]: any;
};

// Modal.tsx
export type ModalProps = {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
};

// useAuthModal.tsx
export type AuthModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

// useUploadModal.tsx
export type UploadModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

//Input.tsx
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
