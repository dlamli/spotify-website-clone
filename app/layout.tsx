import type { Metadata } from "next";
// Supports weights 300-900
import "@fontsource-variable/figtree";

import "./globals.css";
import { Player, SideBar } from "@/components";
import { ModalProvider, SupabaseProvider, ToasterProvider } from "@/providers";
import { UserProvider } from "@/providers/UserProvider";
import { getActiveProductsWithPrices, getSongsByUserId } from "@/actions";

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
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={`font-figtree antialiased`}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <SideBar songs={userSongs}>{children}</SideBar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
