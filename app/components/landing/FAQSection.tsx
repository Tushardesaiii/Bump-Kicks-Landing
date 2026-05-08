"use client";

import { useState } from "react";

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
    a: "The app is primarily aimed at pregnant mothers in the second and third trimester, especially around 28 to 40 weeks or when kick counting is recommended by an OB/GYN or midwife.",
  },
  {
    q: "What platforms does Bumpsy support?",
    a: "The listing says iPhone, iPad, Mac with Apple Silicon, and Apple Vision compatibility.",
  },
  {
    q: "How much does Bumpsy cost?",
    a: "The app is a free download with in-app purchases, including a weekly subscription at ₹399 and a lifetime purchase at ₹2,999.",
  },
  {
    q: "What is Bumpsy's main message?",
    a: "The app centers on calm reassurance, simplicity, and emotional connection with the baby: every kick matters, and feel every kick. Count every moment.",
  },
];

export function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActive((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2>Frequently asked questions</h2>

        <div className="faq-grid">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${active === i ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(i)}
              >
                <span>{item.q}</span>

                <span className="faq-icon">
                  {active === i ? "−" : "+"}
                </span>
              </button>

              <div
                className="faq-answer"
                style={{
                  maxHeight: active === i ? "300px" : "0px",
                }}
              >
                <div className="faq-answer-content">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}