"use client";

import { motion } from "framer-motion";
import { Mail, Shield, Download, ArrowRight ,Heart , WifiOff } from "lucide-react";

export function DownloadCTA() {
  return (
    <section
  id="cta-download"
  className="relative overflow-hidden bg-brand-pink py-24 md:py-28"
>
  {/* Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_35%)]" />
  <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:70px_70px]" />

  {/* Shapes */}
  <div className="absolute top-[-8rem] right-[-4rem] w-[22rem] h-[22rem] rounded-[5rem] border border-white/10 rotate-12" />
  <div className="absolute bottom-[-8rem] left-[-5rem] w-[18rem] h-[18rem] rounded-[4rem] bg-white/[0.05] -rotate-12" />

  <div className="container-custom relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto text-center"
    >

     

      {/* Heading */}
      <h2 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-[-0.05em] text-white">
        Track Every <br />
        <span className="text-white/70">
          Precious Kick
        </span>
      </h2>

      {/* Description */}
      <p className="mt-6 text-lg md:text-xl leading-relaxed text-white/85 font-medium max-w-2xl mx-auto">
        Calm, one-tap baby kick tracking built for peace of mind during pregnancy.
      </p>

      {/* CTA */}
      <div className="mt-14 flex flex-col items-center gap-8">

        {/* QR Card */}
        <div className="relative bg-white rounded-[2.5rem] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.22)] border border-white/60">
          
          <div className="w-48 h-48 rounded-[1.5rem] overflow-hidden bg-neutral-100 p-2">
            <img
              src="/assets/qr-code.png"
              alt="Download Bumpsy"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mt-4">
            <p className="text-brand-pink text-[10px] font-black tracking-[0.3em] uppercase">
              Scan To Download
            </p>
          </div>

        </div>

       

      </div>

    </motion.div>
  </div>
</section>
  );
}

export function SupportSection() {
  return (
    <section id="support" className="py-32 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center p-16 md:p-24 rounded-[4rem] bg-gray-50 border border-gray-100 premium-shadow">
          <div className="w-20 h-20 bg-brand-pink rounded-3xl flex items-center justify-center text-white mx-auto mb-10 shadow-lg shadow-brand-pink/20">
            <Mail size={40} strokeWidth={2.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-text-main">Need help?</h2>
          <p className="text-xl text-text-muted font-medium mb-12 leading-relaxed">
            If you have questions about kick logging, sessions, reports, or pricing, 
            our support team is here for you.
          </p>
          <a 
            href="mailto:support@bumpsy.app" 
            className="group inline-flex items-center gap-3 text-2xl md:text-3xl font-black text-brand-pink hover:translate-x-2 transition-transform"
          >
            support@bumpsy.app
            <ArrowRight size={32} strokeWidth={3} className="transition-transform group-hover:translate-x-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
