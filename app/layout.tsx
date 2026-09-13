import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Smart India Hackathon — Ideas to Impact | National Innovation Platform",
  description:
    "Official reimagination and digital experience for Smart India Hackathon (SIH). A national-scale innovation platform turning college ingenuity into working prototypes over 36 hours.",
  keywords: [
    "Smart India Hackathon",
    "SIH",
    "Ministry of Education",
    "AICTE",
    "Innovation",
    "Hackathon",
    "Engineering",
    "Viksit Bharat",
    "Prototypes",
  ],
  authors: [{ name: "Ministry of Education's Innovation Cell & AICTE" }],
  openGraph: {
    title: "Smart India Hackathon — Ideas to Impact",
    description: "Where Ideas Meet Opportunity, and Innovation Builds a Better Tomorrow.",
    siteName: "Smart India Hackathon",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${instrumentSans.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <body className="bg-[var(--ink)] text-[var(--chalk)] min-h-screen antialiased selection:bg-[#E7962B]/30 selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
