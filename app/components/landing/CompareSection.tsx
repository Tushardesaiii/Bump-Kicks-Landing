const comparisons = [
  { title: "One-Tap Kick Logging", desc: "Start a session instantly and tap for each movement without a complicated setup.", link: "#features", cta: "See how it works →" },
  { title: "Session History", desc: "Review past kick sessions and compare movement timelines across days.", link: "#features", cta: "See how it works →" },
  { title: "Pattern Tracking", desc: "Spot active periods and notice changes in fetal movement over time.", link: "#features", cta: "See how it works →" },
  { title: "Contraction Timer", desc: "Record contraction timing, duration, and frequency for later pregnancy.", link: "#features", cta: "See how it works →" },
  { title: "Doctor-Ready Reports", desc: "Export movement summaries you can bring to appointments.", link: "#features", cta: "See how it works →" },
];

const pillar = {
  title: "Bumpsy at a glance",
  desc: "A calm pregnancy log for kick counting, movement awareness, reminders, and doctor-friendly reporting.",
  link: "",
  cta: "Open download section →",
};

export function CompareSection() {
  return (
    <section className="compare-section">
      <div className="compare-container">
        <h2>What Bumpsy helps you do</h2>
        <p className="compare-lede">A quick look at the core pregnancy-tracking actions built into the app: logging kicks, reviewing movement, timing contractions, and sharing reports with confidence.</p>
        <div className="compare-grid">
          {comparisons.map((c, i) => (
            <a key={i} className="compare-card" href={c.link} target={c.link.startsWith("#") ? undefined : "_blank"} rel={c.link.startsWith("#") ? undefined : "noopener noreferrer"}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <span className="compare-link">{c.cta}</span>
            </a>
          ))}
          <a className="compare-card compare-card-pillar" href={pillar.link} target="_blank" rel="noopener noreferrer">
            <h3>{pillar.title}</h3>
            <p>{pillar.desc}</p>
            <span className="compare-link">{pillar.cta}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
