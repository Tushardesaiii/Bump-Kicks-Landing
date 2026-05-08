import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baby Kick Counter - Bumpsy | Fetal Movement & Pregnancy Log",
  description:
    "Baby Kick Counter - Bumpsy helps pregnant mothers track fetal kicks, monitor movement patterns, time contractions, and share doctor-ready reports. Minimal, calm, offline, and built for reassurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
