import type { Metadata } from "next";
// Supports weights 300-900
import "@fontsource-variable/figtree";

import "./globals.css";
import { SideBar } from "@/components";
import { ModalProvider, SupabaseProvider, ToasterProvider } from "@/providers";
import { UserProvider } from "@/providers/UserProvider";

export const metadata: Metadata = {
  title: "Spotify Clone App",
  description: "Spotify Listen music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-figtree antialiased`}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <SideBar>{children}</SideBar>
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
