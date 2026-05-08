import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, name, role, image }) => (
  <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-50 text-center">
    {/* Five Star Rating */}
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-[#4B5563] text-[15px] leading-relaxed mb-8 font-medium italic">
      "{quote}"
    </p>

    {/* Profile Section */}
    <div className="flex flex-col items-center">
      <img 
        src={image} 
        alt={name} 
        className="w-14 h-14 rounded-full object-cover mb-3 border-2 border-white shadow-sm"
      />
      <h4 className="text-[#111827] font-bold text-[15px] mb-0.5">{name}</h4>
      <p className="text-[#FF5A6E] text-[13px] font-semibold">{role}</p>
    </div>
  </div>
);

const Testimonials = () => {
  const reviews = [
    {
      quote: "Bumpi Kicks has been a game changer for me! It's so easy to track my baby's movements and the reminders keep me on track.",
      name: "Sarah J.",
      role: "Mom-to-Be",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
      quote: "I love how simple and beautiful the app is. The insights help me feel more connected to my baby every single day.",
      name: "Priya M.",
      role: "Mom-to-Be",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop"
    },
    {
      quote: "Finally an app that feels made for moms. It's gentle, intuitive, and gives me so much peace of mind.",
      name: "Anika R.",
      role: "Mom-to-Be",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&h=150&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#FFFBFC]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#FF5A6E] text-xs font-bold uppercase tracking-widest">
            Loved by Thousands of Moms
          </span>
          <h2 className="mt-3 text-[36px] md:text-[42px] font-black text-[#111827] tracking-tight">
            Real Stories, <span className="text-[#FF5A6E]">Real Love</span>
          </h2>
          <p className="mt-4 text-[#6B7280] text-lg font-medium">
            Join thousands of moms who trust Bumpi Kicks every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} {...review} />
          ))}
        </div>

        {/* Stats Summary Footer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-xl  text-[#111827]">4.8/5</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
              ))}
            </div>
          </div>
          <span className="text-[#6B7280] font-semibold text-[15px]">
            10K+ Happy Moms
          </span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;