import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harmony Music Academy | Private Music Lessons in Nashville, TN",
  description:
    "Discover your musical potential at Harmony Music Academy. Expert private lessons in Piano, Guitar, Violin, Drums, Voice & Saxophone. In-person, online, and group formats available in Nashville, TN.",
  keywords: [
    "music lessons Nashville",
    "piano lessons Nashville TN",
    "guitar lessons Nashville",
    "violin lessons Nashville",
    "drum lessons Nashville",
    "voice lessons Nashville",
    "private music lessons",
    "online music lessons",
    "music academy Nashville",
    "Harmony Music Academy",
  ],
  authors: [{ name: "Harmony Music Academy" }],
  openGraph: {
    title: "Harmony Music Academy | Private Music Lessons in Nashville, TN",
    description:
      "Expert private music lessons in Piano, Guitar, Violin, Drums, Voice & Saxophone. Join Nashville's premier music academy today.",
    type: "website",
    locale: "en_US",
    siteName: "Harmony Music Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmony Music Academy | Private Music Lessons in Nashville, TN",
    description:
      "Expert private music lessons in Piano, Guitar, Violin, Drums, Voice & Saxophone in Nashville, TN.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://harmonymusicacademy.com" />
        <meta name="theme-color" content="#2d1b4e" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
