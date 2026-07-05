import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import Effects from "@/components/Effects";
import { djs } from "@/lib/content";
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
  title: {
    default: "Frienders Collective | A Professionally Good Time",
    template: "%s | Frienders Collective",
  },
  description:
    "Frienders Collective is a private event production and experiences company in New York City, founded in 2018. Parties, trips, venues, equipment, resident DJs, catering, staff, and an in-house travel desk for groups under 150.",
  openGraph: {
    title: "Frienders Collective | A Professionally Good Time",
    description:
      "Private event production and experiences in NYC. Groups under 150, production value without ceiling.",
    images: ["/img/hero-hilltop.jpg"],
    siteName: "Frienders Collective",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Frienders Collective",
  url: "https://frienders.co",
  foundingDate: "2018",
  description:
    "Frienders Collective is a private event production and experiences company in New York City, founded in 2018, specializing in groups under 150: private events, group trips, venue and equipment rentals, resident DJs, catering, staff, and an in-house travel desk.",
  email: "hello@frienders.co",
  areaServed: ["New York City", "United States", "International"],
  sameAs: djs.map((d) => d.url),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <Effects />
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
