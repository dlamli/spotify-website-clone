import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { IconType } from "react-icons";
import Stripe from "stripe";
import { User } from "@supabase/auth-helpers-nextjs";

// Sidebar.tsx
export type SidebarProps = {
  children: React.ReactNode;
  songs: Song[];
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
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
  // Button Props ...


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
  products?: Product;
};

export interface ProductWithPrice extends Product {
  prices?: Price[];
}

export type ModalProviderProps = {
  products: ProductWithPrice[];
};

export type SubscribeModalProps = {
  products: ProductWithPrice[];
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
export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export type Song = {
  id: string;
  user_id: string;
  author: string;
  title: string;
  song_path: string;
  image_path: string;
};

// PageContent.tsx
export type PageContentProps = {
  songs: Song[];
};

// SongItem.tsx
export type SongItemProps = {
  data: Song;
  onClick: (id: string) => void;
};

// Library.tsx
export type LibraryProps = {
  songs: Song[];
};

// MediaItem.tsx
export type MediaItemProps = {
  data: Song;
  onClick?: (id: string) => void;
};

// Search
export type SearchProps = {
  searchParams: {
    title: string;
  };
};

// SearchContent.tsx
export type SearchContentProps = {
  songs: Song[];
};

// LikeButton.tsx
export type LikeButtonProps = {
  songId: string;
};

// LikedContent.tsx
export type LikedContentProps = {
  songs: Song[];
};

// usePlayer.tsx
export type PlayerStore = {
  ids: string[];
  activeId?: string;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
};

// PlayerContent.tsx
export type PlayerContentProps = {
  song: Song;
  songUrl: string;
};

// Slider.tsx
export type SliderProps = {
  value?: number;
  onChange?: (value: number) => void;
};
