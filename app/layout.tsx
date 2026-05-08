import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <head>
          <link rel="icon" type="image/png" sizes="48x48" href="/playstore.png?v=2" />
          <link rel="shortcut icon" href="/playstore.png?v=2" />
          <link rel="apple-touch-icon" href="/playstore.png?v=2" />
        </head>
      <body>{children}</body>
    </html>
  );
}
