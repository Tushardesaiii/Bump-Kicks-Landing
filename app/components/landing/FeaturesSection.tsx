const CheckIcon = () => (
  <svg className="checkmark" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#5DADE2"/><path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const APP_STORE = "https://apps.apple.com/rs/app/no-gambling-stop-gambling-now/id6751584830";

const features = [
  {
    label: "Track Your Progress",
    title: "Finally see progress instead of destruction",
    desc: "After years of watching everything go backwards, track something going the right way for once. Your streak, your daily promises, your milestones. Proof that you're not stuck anymore.",
    benefits: ["Live counter tracking every second gambling-free","Daily promises to set your intentions","Mood tracking and positive activity planning","Milestone achievements to celebrate progress"],
    btn: "Get Started",
    img: "/assets/app_screenshots/streak.png",
    alt: "Streak tracker screenshot",
    reverse: false,
  },
  {
    label: "Urge Management",
    title: "Your urges have a pattern. Learn it and plan around it.",
    desc: "Track when they hit and after a week you'll see it - maybe 9pm-midnight, maybe payday, maybe when you fight with someone. Once you know your danger zones you can prepare instead of just white-knuckling through.",
    benefits: ["Guided breathing exercises for immediate calm","Personal motivation reminders when you need them","Track urge patterns to understand triggers","Instant support tools available 24/7"],
    btn: "Learn More",
    img: "/assets/app_screenshots/urge.png",
    alt: "Urge management screenshot",
    reverse: true,
  },
  {
    label: "Financial Recovery",
    title: "Watch your money go up for the first time in years",
    desc: "After years of watching it disappear, finally see numbers moving the right way. Track daily savings from not gambling, plan your debt payoff, and prove to yourself that you're digging out not deeper in.",
    benefits: ["Smart debt payoff strategy with automatic calculations","Daily savings tracker to stay motivated","Visual progress charts showing your recovery","Financial milestones to celebrate wins"],
    btn: "Start Recovering",
    img: "/assets/app_screenshots/debt.png",
    alt: "Debt recovery screenshot",
    reverse: false,
  },
  {
    label: "Community & Support",
    title: "You're hiding it from everyone. You don't have to hide here.",
    desc: "You've been fighting this alone and it's not working. Connect with people on the same path, read what worked for them, share what's working for you. All anonymous, all judgment-free.",
    benefits: ["Connect with people on the same journey","Access educational content and recovery strategies","Personal journal for reflection and growth","100% confidential and private recovery"],
    btn: "Join Community",
    img: "/assets/app_screenshots/community.png",
    alt: "Community screenshot",
    reverse: true,
  },
  {
    label: "App Protection",
    title: "Block everything and make it impossible to relapse",
    desc: "One app blocked means nothing. Your addiction will find another. Remove them all and sleep knowing you literally can't relapse tonight.",
    benefits: ["Instantly block betting apps that cost you thousands","Eliminate the \"just one more bet\" trap forever","Add friction between you and financial ruin","Sleep peacefully knowing you can't relapse at 3 AM"],
    btn: "Block Apps Now",
    img: "/assets/app_screenshots/block-apps.png",
    alt: "Block apps screenshot",
    reverse: false,
  },
  {
    label: "Daily Habits",
    title: "Reclaim the hours you lost to gambling and build the life you deserve",
    desc: "Gambling didn't just steal your money. It stole your time, energy, and potential. Fill that void with habits that compound into the future you actually want. Start small. Win big.",
    benefits: ["Replace gambling time with productive routines","Build streaks that compound into real change","Connect with people who quit before you","Every restart is strength"],
    btn: "Start Your Transformation",
    img: "/assets/app_screenshots/daily-habits.png",
    alt: "Daily habits screenshot",
    reverse: true,
  },
  {
    label: "30-Day Challenge",
    title: "Thirty days, unlocked one at a time, until you're someone who doesn't gamble",
    desc: "Thirty days is the science-backed threshold where cravings fade and new wiring holds. One day unlocks at midnight - you can't binge your way out of this, and that's exactly the point. By Day 30 you're not trying to quit anymore - you're someone who built something else.",
    benefits: [],
    btn: "Start the Challenge",
    img: "/assets/app_screenshots/30-day-challenge.png",
    alt: "30-day challenge screenshot",
    reverse: false,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>Nogambling app features - tools to stop gambling addiction</h2>
        <p>Everything you need to stay strong, resist urges, and rebuild your life. All in the Nogambling app.</p>
        <div className="features-list">
          {features.map((f, i) => (
            <div key={i} className={`feature-block animate-on-scroll${f.reverse ? " reverse" : ""}`}>
              <div className="feature-content">
                <span className="feature-label">{f.label}</span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                {f.benefits.length > 0 && (
                  <div className="feature-benefits">
                    {f.benefits.map((b, j) => (
                      <div key={j} className="benefit-item">
                        <CheckIcon />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
                <a className="feature-btn" href={APP_STORE} target="_blank" rel="noopener noreferrer">{f.btn}</a>
              </div>
              <div className="feature-visual">
                <img src={f.img} alt={f.alt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
