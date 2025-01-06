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
  title: "Kares",
  description: "Chat with your favorite anime characters",
  openGraph: {
    type: "website",
    url: "https://kares69.vercel.app",
    title: "Kares",
    description: "Chat with your favorite anime characters",
    images: [
      {
        url: "https://tse4.mm.bing.net/th?id=OIP.wIZ5OigXRUoEu8brseg_0wHaHa&pid=Api&P=0&h=220",
        width: 1200,
        height: 630,
        alt: "Kares",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
