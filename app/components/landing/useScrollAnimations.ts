"use client";
import { useEffect } from "react";

export function useScrollAnimations() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    const els = document.querySelectorAll(".animate-on-scroll");
    els.forEach((el) => observer.observe(el));

    // Navbar scroll shadow
    const navbar = document.querySelector(".navbar") as HTMLElement | null;
    const handleScroll = () => {
      if (!navbar) return;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      navbar.style.boxShadow = scrollTop > 10 ? "0 2px 10px rgba(0,0,0,0.1)" : "none";
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      els.forEach((el) => observer.unobserve(el));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
