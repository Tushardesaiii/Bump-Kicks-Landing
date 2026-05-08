"use client";
import { useState } from "react";

const faqData = [
  { q: "Is my data safe and private with the Nogambling app?", a: "Yes, absolutely. Nogambling uses end-to-end encryption, is HIPAA compliant, and offers complete anonymity. All data is stored locally on your device, and no personal information is required to use the app." },
  { q: "How does the Nogambling app help during gambling urges?", a: "Our 6-step crisis intervention system guides you through breathing exercises, personal motivation reminders, urge tracking, financial reality checks, educational content, and instant access to your support network." },
  { q: "What happens if I relapse?", a: "Relapses are part of recovery, not failures. Nogambling provides compassionate support, allows immediate restart of your streak, helps you learn from patterns, and maintains a judgment-free environment." },
  { q: "How effective is the Nogambling app for recovery?", a: "Studies show that people with community support have 70% better recovery outcomes. Nogambling combines evidence-based methods with peer support and professional-grade tracking tools." },
  { q: "Can I use it without anyone knowing?", a: "Yes, complete anonymity is guaranteed. No personal information is required, all data stays on your device." },
  { q: "How long does recovery take?", a: "Recovery is a personal journey that varies for everyone. Nogambling provides daily progress tracking, debt payoff plan, milestone celebrations and long-term support to help you succeed at your own pace." },
  { q: "How do I stop gambling urges immediately?", a: "When gambling urges hit, use our 6-step crisis intervention: (1) Guided breathing exercises to calm immediate anxiety, (2) View personal motivation reminders you've set, (3) Track the urge to understand patterns, (4) Review financial reality of gambling costs, (5) Access educational content about addiction, (6) Connect with support community." },
  { q: "Does Nogambling work for sports betting addiction?", a: "Yes, Nogambling works for all types of gambling addiction including sports betting, casino games, online poker, slots, and lottery. The recovery principles are the same." },
  { q: "Can Nogambling help me pay off gambling debt?", a: "Yes, Nogambling includes a debt recovery calculator using the proven snowball method. Track all your gambling debts, input your available monthly payment, and the app automatically calculates your optimal payoff strategy." },
  { q: "What makes Nogambling different from Gamban, BetBlocker, or GamStop?", a: "Gamban and BetBlocker are pure gambling blockers. GamStop is a UK self-exclusion register. Gambling Therapy is a counsellor chat service. NoGambling.app is a full recovery stack: real-time clean counter, 5-step panic button, debt-payoff dashboard, anonymous community, and a compassionate relapse flow." },
  { q: "Is NoGambling.app available on Android?", a: "No. NoGambling.app is currently iOS only, via the App Store. Android is not available. Our website provides free recovery resources accessible on any device." },
];

export function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2>Frequently asked questions</h2>
        <div className="faq-grid">
          {faqData.map((item, i) => (
            <div key={i} className={`faq-item animate-on-scroll${active === i ? " active" : ""}`}>
              <button className="faq-question" onClick={() => setActive(active === i ? null : i)}>
                <span>{item.q}</span>
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
