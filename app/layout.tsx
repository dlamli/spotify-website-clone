import type { Metadata } from "next";
// Supports weights 300-900
import "@fontsource-variable/figtree";

import "./globals.css";
import { SideBar } from "@/components";
import { ModalProvider, SupabaseProvider, ToasterProvider } from "@/providers";
import { UserProvider } from "@/providers/UserProvider";
import { getSongs } from "@/actions/getSongs";
import { getSongsByUserId } from "@/actions/getSongsByUserId";

export const metadata: Metadata = {
  title: "Spotify Clone App",
  description: "Spotify Listen music",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body className={`font-figtree antialiased`}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <SideBar songs={userSongs}>{children}</SideBar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
