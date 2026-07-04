import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frienders.co"),
  title: "Frienders Collective | A Professionally Good Time",
  description:
    "Frienders Collective is an experiences company. Parties, private events, venue and equipment rentals, DJs, catering, staff, and in-house travel. NYC and everywhere else.",
  openGraph: {
    title: "Frienders Collective | A Professionally Good Time",
    description:
      "Parties, private events, venue and equipment rentals, DJs, catering, staff, and in-house travel. NYC and everywhere else.",
    images: ["/img/hero-hilltop.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
