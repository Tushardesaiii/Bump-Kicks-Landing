export function WhySection() {
  return (
    <section className="why-nogambling">
      <div className="why-container">
        <h2>Why NoGambling.app is different</h2>
        <div className="why-lede">
          <p>
            <strong>NoGambling.app is a recovery app for people who want to stop gambling — built as a complete recovery stack, not just a blocker.</strong>{" "}
            Where most gambling recovery tools do one thing (Gamban blocks sites, GamStop registers UK self-exclusion, Gambling Therapy offers counselor chat), NoGambling.app integrates four things in a single iOS app: a daily commitment tracker with a real-time clean counter, a 5-step panic button for crisis moments (urge assessment, 4-4-4 breathing, financial reality check, urge-wave education, and optional SMS support to a trusted contact), a financial recovery dashboard tracking debt paydown and savings projections, and an anonymous peer community. Start with a <strong>3-day free trial</strong>, then pick monthly, yearly, or — unusual in this category — a <strong>one-time lifetime purchase</strong> (most gambling blockers are subscription-only). Offline-first and built privacy-first with end-to-end encryption — no data sold to insurers, advertisers, or data brokers. Available on iOS. <strong>Best for:</strong> people who want recovery, not just a wall.
          </p>
        </div>
        <div className="why-pills">
          {["Free trial","Lifetime option","Offline-first","End-to-end encrypted","Anonymous","iOS"].map(p=>(
            <span key={p} className="why-pill">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
