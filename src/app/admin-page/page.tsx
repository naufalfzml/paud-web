"use client"

import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "../globals.css";

const fredoka = Fredoka({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-fredoka',
  display: 'block'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}