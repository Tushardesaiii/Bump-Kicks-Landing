export function WhySection() {
  return (
    <section id="why" className="why-nogambling">
      <div className="why-container">
        <h2>Why Bumpsy is different</h2>
        <div className="why-lede">
          <p>
            <strong>Bumpsy is built for calm, one-tap fetal movement tracking, not cluttered pregnancy management.</strong>{" "}
            It focuses on the moments that matter most: logging kicks quickly, reviewing session history, spotting movement patterns, timing contractions, and sharing reports when you want a clearer picture for doctor visits. The app is minimal, stress-free, and designed for reassurance during the second and third trimester — especially the 28–40 week stage when many users are most focused on kick counting. Offline support keeps it reliable anywhere, and the product positioning stays simple: every kick matters.
          </p>
        </div>
        <div className="why-pills">
          {["One-tap logging","Offline support","Doctor reports","Kick reminders","Free download","Health & Fitness"].map(p=>(
            <span key={p} className="why-pill">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
