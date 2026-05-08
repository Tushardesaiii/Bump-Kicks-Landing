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
        
        {/* Strictly using provided DM Sans embed code */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
