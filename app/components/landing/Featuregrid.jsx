import React from 'react';
import { 
  PiHeartFill, 
  PiBellRingingFill, 
  PiChartBarFill, 
  PiLockKeyFill, 
  PiStarFill, 
  PiShareNetworkFill 
} from "react-icons/pi";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center bg-transparent transition-transform duration-300 hover:scale-105">
    {/* Exact Icon Container Style */}
    <div className="w-[72px] h-[72px] bg-[#FF5A6E]/10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center mb-5 border border-gray-50">
      <Icon className="w-10 h-10 text-[#FF5A6E]" />
    </div>
    
    <h3 className="text-[17px] font-bold text-[#1F2937] mb-2">{title}</h3>
    <p className="text-[14px] text-[#6B7280] leading-[1.6] text-center max-w-[220px]">
      {description}
    </p>
  </div>
);

const FeatureGrid = () => {
  const features = [
    {
      icon: PiHeartFill,
      title: "Smart Tracking",
      description: "Track every kick, movement, and milestone with ease."
    },
    {
      icon: PiBellRingingFill,
      title: "Personalized Reminders",
      description: "Never forget a check or important moment."
    },
    {
      icon: PiChartBarFill,
      title: "Insights & Reports",
      description: "Understand your baby's activity with easy-to-read insights."
    },
    {
      icon: PiLockKeyFill,
      title: "Privacy First",
      description: "Your data is safe, secure, and always private."
    },
    {
      icon: PiStarFill,
      title: "Made for Moms",
      description: "Simple, gentle, and intuitive design made just for you."
    },
    {
      icon: PiShareNetworkFill,
      title: "Share & Connect",
      description: "Share progress with your partner or family in one tap."
    }
  ];

  return (
    <section className="relative py-24 px-6 bg-[#FFFBFC] overflow-hidden">
      {/* Background soft glow to match reference */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,#FFF1F2_0%,transparent_50%)] opacity-50" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-[#FFF1F2] text-[#FF5A6E] text-[12px] font-bold tracking-wide uppercase mb-4">
            Powerful Features for Every Mom
          </span>
          <h2 className="text-[38px] md:text-[44px] font-black text-[#111827] leading-[1.1] tracking-tight">
            Everything You Need, <br />
            <span className="text-[#FF5A6E]">All in One Place</span>
          </h2>
          <p className="mt-5 text-[#6B7280] text-[16px] md:text-[18px] max-w-xl mx-auto font-medium">
            Smart, simple, and designed with love to support your pregnancy journey.
          </p>
        </div>

        {/* The Grid - Tighter gaps and 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-14">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;  