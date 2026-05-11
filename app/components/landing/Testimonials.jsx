"use client";

import React, { useEffect, useRef } from 'react';
import { Star, Heart } from 'lucide-react';

const TestimonialCard = ({ quote, name, image }) => (
  <div className="shrink-0 w-[85vw] md:w-full h-96 flex flex-col items-center p-8 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-pink-50/50 text-center transition-all duration-300">
    {/* Five Star Rating */}
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-[#4B5563] text-[15px] md:text-[16px] leading-relaxed mb-8 font-medium italic flex-1 overflow-hidden line-clamp-4">
      "{quote}"
    </p>

    {/* Profile Section */}
    <div className="flex flex-col items-center mt-auto">
      <div className="relative mb-3">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
        />
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm">
          <Heart size={10} className="fill-[#FF5A6E] text-[#FF5A6E]" />
        </div>
      </div>
      <h4 className="text-[#111827] font-bold text-[16px]">{name}</h4>
    </div>
  </div>
);

const Testimonials = () => {
  // Fixed: Standard JS initialization without TypeScript types
  const scrollRef = useRef(null);
  
  const reviews = [
    {
      quote: "Bumpi Kicks has been a game changer for me! It's so easy to track my baby's movements and the reminders keep me on track.",
      name: "Anita P.",
      image: "https://plus.unsplash.com/premium_photo-1661964243697-734d7bd664ff?w=600&auto=format&fit=crop&q=60"
    },
    {
      quote: "I love how simple and beautiful the app is. The insights help me feel more connected to my baby every single day.",
      name: "Priyanka M.",
      image: "https://images.unsplash.com/photo-1631005436794-ccaa79de61ba?w=600&auto=format&fit=crop&q=60"
    },
    {
      quote: "Finally an app that feels made for moms. It's gentle, intuitive, and gives me so much peace of mind.",
      name: "Komal R.",
      image: "https://images.unsplash.com/photo-1663560455456-7c2fb0c8cfca?q=80&w=688&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      // Only auto-scroll on mobile views
      if (window.innerWidth < 768) {
        const isAtEnd = scrollContainer.scrollLeft + scrollContainer.offsetWidth >= scrollContainer.scrollWidth - 10;
        
        if (isAtEnd) {
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Move forward by roughly one card width
          scrollContainer.scrollBy({ left: scrollContainer.offsetWidth * 0.85, behavior: 'smooth' });
        }
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-[#FFFBFC] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 mb-4">
             <Heart size={12} className="fill-[#FF5A6E] text-[#FF5A6E]" />
             <span className="text-[#FF5A6E] text-[11px] font-black uppercase tracking-[0.2em]">
               Loved by Thousands
             </span>
          </div>
          <h2 className="text-[36px] md:text-[48px] font-black text-[#111827] tracking-tight leading-tight">
            Real Stories, <span className="text-[#FF5A6E]">Real Love</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg font-medium max-w-xl mx-auto">
            Join thousands of moms who trust Bumpi Kicks every day.
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="relative mb-12">
          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
          >
            {reviews.map((review, index) => (
              <div key={index} className="snap-center shrink-0 md:shrink">
                <TestimonialCard {...review} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Summary Footer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-10 border-t border-pink-100/50">
          <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-gray-50">
            <span className="text-lg font-black text-[#111827]">4.8/5</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
          </div>
          <span className="text-[#6B7280] font-bold text-[15px]">
            10K+ Happy Moms
          </span>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Testimonials;