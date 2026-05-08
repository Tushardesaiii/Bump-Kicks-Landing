"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    q: "Does Bumpsy collect my data?",
    a: "Apple lists the app as not collecting any data. The product is positioned around private pregnancy logging and simple on-device tracking.",
  },
  {
    q: "How do I log a kick in Bumpsy?",
    a: "Start a session and tap whenever you feel fetal movement. The app is designed for one-tap logging with minimal friction.",
  },
  {
    q: "Can I review earlier sessions?",
    a: "Yes. Bumpsy stores session history so you can look back at kick counts and movement timelines across days.",
  },
  {
    q: "Does Bumpsy track contractions too?",
    a: "Yes. The app includes a contraction timer for frequency, duration, and timing later in pregnancy.",
  },
  {
    q: "Can I share reports with my doctor?",
    a: "Yes. You can export movement reports and share the data with your healthcare provider.",
  },
  {
    q: "Does Bumpsy work offline?",
    a: "Yes. Offline support is part of the product positioning, so you can keep tracking without Wi-Fi.",
  },
  {
    q: "Who is Bumpsy best for?",
    a: "The app is primarily aimed at pregnant mothers in the second and third trimester, especially around 28 to 40 weeks.",
  },
  {
    q: "What platforms does Bumpsy support?",
    a: "The listing says iPhone, iPad, Mac with Apple Silicon, and Apple Vision compatibility.",
  },
  {
    q: "How much does Bumpsy cost?",
    a: "The app is a free download with in-app purchases, including a weekly subscription and a lifetime purchase option.",
  },
  {
    q: "What is Bumpsy's main message?",
    a: "The app centers on calm reassurance, simplicity, and emotional connection with the baby: every kick matters.",
  },
];

export function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-text-main">
            Common <span className="text-brand-pink">Questions</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto font-normal">
            Everything you need to know about Bumpsy and how it helps you 
            stay connected with your baby.
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`rounded-[2.5rem] border-2 transition-all duration-300 ${
                active === i 
                  ? "bg-white border-brand-pink shadow-2xl shadow-brand-pink/5" 
                  : "bg-white border-transparent hover:border-gray-200"
              }`}
            >
              <button
                className="w-full px-10 py-8 text-left flex justify-between items-center gap-6"
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className={`text-xl md:text-2xl font-bold transition-colors ${active === i ? "text-brand-pink" : "text-text-main"}`}>
                  {item.q}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${active === i ? "bg-brand-pink text-white rotate-180" : "bg-gray-100 text-text-muted"}`}>
                  {active === i ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
                </div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-10 pb-10 pt-0">
                      <div className="h-px bg-gray-100 mb-8" />
                      <p className="text-lg md:text-xl text-text-muted leading-relaxed font-normal">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}