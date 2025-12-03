'use client';

import { Geist } from "next/font/google";
import "./globals.css";
import TopBar from '../components/TopBar';
import { Analytics } from "@vercel/analytics/react"

const geist = Geist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Template Yellow - Stripe x Next.js MVP</title>
        <meta name="description" content="Minimal MVP template with Next.js, Stripe integration, and yellow theme" />
      </head>
      <body className={geist.className}>
        <Analytics mode="auto" />
        <TopBar />    
        <main>{children}</main>
      </body>
    </html>
  );
}
