const CheckIcon = () => (
  <svg className="checkmark" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#5DADE2"/><path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

const APP_STORE = "https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727";

const features = [
  {
    label: "One-Tap Kick Logging",
    title: "Start a session instantly and log every kick in real time",
    desc: "Open Bumpsy, start a session, and tap whenever fetal movement happens. The flow is designed to stay simple, calm, and fast so you can focus on the moment instead of the app.",
    benefits: ["Start a session instantly","Tap once for each movement","Minimal setup with low friction","Built for quick daily use"],
    btn: "Start Logging",
    img: "/assets/app_screenshots/streak.png",
    alt: "Kick logging screenshot",
    reverse: false,
  },
  {
    label: "Session History",
    title: "Review previous kick sessions and movement timelines",
    desc: "Bumpsy stores earlier sessions so you can look back on how fetal movement changed across the day or across different days of pregnancy.",
    benefits: ["See past sessions in one place","Compare movement across days","Review activity timelines","Keep a simple history of logs"],
    btn: "View History",
    img: "/assets/app_screenshots/urge.png",
    alt: "Session history screenshot",
    reverse: true,
  },
  {
    label: "Movement Patterns",
    title: "Recognize active times and changes in fetal movement",
    desc: "Track when the baby tends to be more active and notice shifts in movement patterns over time. The focus stays on reassurance and awareness.",
    benefits: ["Spot active periods more easily","Compare activity across sessions","Notice changes in routine movement","Keep tracking simple and consistent"],
    btn: "Explore Patterns",
    img: "/assets/app_screenshots/debt.png",
    alt: "Movement pattern screenshot",
    reverse: false,
  },
  {
    label: "Contraction Timer",
    title: "Track contractions by frequency, duration, and timing",
    desc: "Use Bumpsy later in pregnancy to time contractions and keep a clear record of what you noticed, when it started, and how long it lasted.",
    benefits: ["Record contraction timing quickly","Capture duration and frequency","Keep labor-related notes organized","Useful for later pregnancy monitoring"],
    btn: "Time Contractions",
    img: "/assets/app_screenshots/community.png",
    alt: "Contraction timer screenshot",
    reverse: true,
  },
  {
    label: "Doctor-Ready Reports",
    title: "Share movement reports with your doctor or midwife",
    desc: "Export kick logs and movement summaries so appointments feel more informed and your tracking is easy to review together.",
    benefits: ["Export movement data","Prepare for appointments quickly","Share clear session summaries","Keep reports easy to read"],
    btn: "Share Reports",
    img: "/assets/app_screenshots/block-apps.png",
    alt: "Report sharing screenshot",
    reverse: false,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2>Bumpsy features - simple tools for pregnancy reassurance</h2>
        <p>Everything you need to track kicks, understand movement patterns, and share pregnancy logs with confidence.</p>
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
