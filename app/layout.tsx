import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoGambling.app — Quit Gambling, Track Recovery, Rebuild",
  description:
    "The complete iOS gambling recovery app. Tracker, 5-step panic button, savings dashboard, community. Free trial · monthly, yearly, or one-time lifetime purchase · offline-first · anonymous.",
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
