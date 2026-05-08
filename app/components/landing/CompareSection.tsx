const comparisons = [
  { title: "Gamban vs NoGambling.app", desc: "Paid blocker with 60,000+ site list versus a full recovery stack with panic button and savings tracker.", link: "https://nogambling.app/compare/gamban-vs-nogambling.html", cta: "Read the comparison →" },
  { title: "BetBlocker vs NoGambling.app", desc: "Free charity blocker versus a free recovery app that also tracks, intervenes in urges, and rebuilds savings.", link: "https://nogambling.app/compare/betblocker-vs-nogambling.html", cta: "Read the comparison →" },
  { title: "GamStop vs NoGambling.app", desc: "UK self-exclusion register versus a daily recovery app. Here is how UK residents stack both for the strongest defence.", link: "https://nogambling.app/compare/gamstop-vs-nogambling.html", cta: "Read the comparison →" },
  { title: "Gambling Therapy vs NoGambling.app", desc: "Counsellor chat support versus a full recovery stack with 5-step panic button and financial tools.", link: "https://nogambling.app/compare/gambling-therapy-vs-nogambling.html", cta: "Read the comparison →" },
  { title: "Kick the Bet vs NoGambling.app", desc: "Minimal day-counter versus a full recovery system with crisis tools, community, and debt payoff dashboards.", link: "https://nogambling.app/compare/kick-the-bet-vs-nogambling.html", cta: "Read the comparison →" },
];

const pillar = {
  title: "7 Best Gamban alternatives for 2026",
  desc: "We tested seven gambling recovery apps — free and paid — and ranked them on blocking, tracking, crisis support, and price.",
  link: "https://nogambling.app/blog/best-gamban-alternatives-2026.html",
  cta: "Read the pillar guide →",
};

export function CompareSection() {
  return (
    <section className="compare-section">
      <div className="compare-container">
        <h2>Compare NoGambling.app to popular gambling blockers</h2>
        <p className="compare-lede">Choosing between gambling recovery tools? Here is how NoGambling.app stacks up against the most-searched alternatives. Every comparison below is honest about what each competitor does well — and where a pure blocker stops short of real recovery.</p>
        <div className="compare-grid">
          {comparisons.map((c, i) => (
            <a key={i} className="compare-card" href={c.link} target="_blank" rel="noopener noreferrer">
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
