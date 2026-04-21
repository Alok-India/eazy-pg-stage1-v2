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
  title: "Eazy-PG | PG for Working Professionals in Greater Noida West",
  description:
    "Simple and comfortable PG living for working professionals in Greater Noida West. Explore room options, amenities, and enquire easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="icon" href="/images/eazy-pg-logo.png" type="image/png" />
      </head>
      <body className="min-h-full bg-white text-slate-900">{children}</body>
    </html>
  );
}
