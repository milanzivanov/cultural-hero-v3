import { SpeedInsights } from "@vercel/speed-insights/next";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Kulturni heroj",
  description:
    "Kulturni heroj je portal za kulturne heroje i za one koji to žele da postanu..."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth">
      <head>
        <link rel="preload" href="/fotelja.webp" as="image" type="image/webp" />
        <link
          rel="preload"
          href="/kh-logo.svg"
          as="image"
          type="image/svg+xml"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
