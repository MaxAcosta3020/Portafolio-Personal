import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import { profile } from "@/content/profile";
import "./globals.css";

const plexSans = localFont({
  src: "../assets/fonts/plex-sans-latin.woff2",
  variable: "--font-plex-sans",
  weight: "100 700",
  display: "swap",
});

const plexMono = localFont({
  src: "../assets/fonts/plex-mono-latin.woff2",
  variable: "--font-plex-mono",
  weight: "400",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: profile.name,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`${plexSans.variable} ${plexMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
