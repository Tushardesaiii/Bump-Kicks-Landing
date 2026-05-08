import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: " Bumpsy | Fetal Movement & Pregnancy Log",
  description:
    "Baby Kick Counter - Bumpsy helps pregnant mothers track fetal kicks, monitor movement patterns, time contractions, and share doctor-ready reports. Minimal, calm, offline, and built for reassurance.",
  icons: {
    icon: '/playstore.png?v=2',
    apple: '/playstore.png?v=2',
    shortcut: '/playstore.png?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <head>
          <link rel="icon" type="image/png" sizes="48x48" href="/playstore.png?v=2" />
          <link rel="shortcut icon" href="/playstore.png?v=2" />
          <link rel="apple-touch-icon" href="/playstore.png?v=2" />
        </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  );
}
