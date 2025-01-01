import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CursorWrapper from "@/utils/custommouse";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const routes = ['/', '/about','/project','/education']; 

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Preeti Chib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <div className="h-screen w-screen bg-center bg-[150%] bg-cover bg-no-repeat bg-[url('/bg.png')] overflow-hidden relative">
      <CursorWrapper routes={routes}>{children}</CursorWrapper>
      </div>
    </body>
  </html>
  );
}
