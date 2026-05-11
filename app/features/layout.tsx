import type { ReactNode } from "react";
import { Navbar } from "../components/landing/Navbar";
import { Footer } from "../components/landing/Footer";

type FeatureLayoutProps = {
  children: ReactNode;
};

export default function FeatureLayout({ children }: FeatureLayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
