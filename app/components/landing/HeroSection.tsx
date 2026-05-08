export function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Baby Kick Counter - Bumpsy</h1>
              <p>Fetal Movement &amp; Pregnancy Log for simple kick counting, contraction tracking, and doctor-ready movement reports. Every kick matters. Feel every kick. Count every moment. Minimal, stress-free, and made for calm reassurance.</p>
            </div>
            <div className="hero-image">
              <img src="/assets/3screens.png" alt="Bumpsy app screenshots showing kick logging, movement history, and contraction tracking" />
            </div>
            <div className="hero-downloads">
              <a className="apple-store-btn" href="#cta-download">
                <img className="apple-store-img" src="/assets/apple-store.png" alt="Download Bumpsy from the App Store" />
              </a>
              <div className="qr-section">
                <p className="qr-text">Or scan the QR code to open the listing instantly</p>
                <div className="qr-code">
                  <img src="/assets/qr-code.png" alt="QR code for the Bumpsy App Store listing" />
                </div>
              </div>
              <div className="privacy-badge">
                <svg className="privacy-icon" viewBox="0 0 24 24" fill="none" stroke="#5DADE2" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" stroke="#5DADE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div className="privacy-text">
                  <strong>No data collection declared</strong>
                  <span>The app is positioned for private, on-device pregnancy tracking with no declared data harvesting.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="container">
          <div className="stat-item"><strong>iPhone</strong><span>iOS 13+</span></div>
          <div className="stat-item"><strong>iPad</strong><span>iPadOS 13+</span></div>
          <div className="stat-item"><strong>Mac</strong><span>Apple Silicon</span></div>
          <div className="stat-item"><strong>Free</strong><span>Download with in-app purchases</span></div>
        </div>
      </section>
    </>
  );
}
