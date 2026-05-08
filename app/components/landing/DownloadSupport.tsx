"use client";

import { motion } from "framer-motion";
import { Mail, Shield, Download } from "lucide-react";

export function DownloadCTA() {
  return (
    <section id="cta-download" className="section-padding bg-brand-pink relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full -ml-32 -mb-32 blur-2xl" />

      <div className="container-custom relative z-10 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8">
              Start Counting <br />
              Every Kick Today
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              Join thousands of moms using Bumpsy for calm, one-tap fetal movement 
              tracking and peace of mind throughout their pregnancy journey.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <div className="p-4 bg-white rounded-[2.5rem] shadow-2xl animate-float">
                <div className="w-48 h-48 p-2">
                  <img src="/assets/qr-code.png" alt="QR Code" className="w-full h-full object-contain" />
                </div>
                <p className="text-brand-pink font-bold text-sm mt-2">Scan to Download</p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-white/80">
                <span className="flex items-center gap-2"><Shield size={18} /> No Data Collection</span>
                <span className="flex items-center gap-2"><Download size={18} /> Free Download</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SupportSection() {
  return (
    <section id="support" className="py-24 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center p-12 rounded-[3rem] bg-gray-50 border border-gray-100">
          <div className="w-16 h-16 bg-brand-pink/10 rounded-2xl flex items-center justify-center text-brand-pink mx-auto mb-8">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl font-extrabold mb-4">Need help with Bumpsy?</h2>
          <p className="text-text-muted mb-8 leading-relaxed">
            If you have questions about kick logging, sessions, reports, or pricing, 
            our support team is here to help you through your journey.
          </p>
          <a 
            href="mailto:support@bumpsy.app" 
            className="inline-flex items-center gap-2 text-xl font-bold text-brand-pink hover:underline"
          >
            support@bumpsy.app
          </a>
        </div>
      </div>
    </section>
  );
}
