export function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Nogambling app: Stop gambling addiction</h1>
              <p>You&apos;re not weak. You&apos;re fighting a system designed to break you. Willpower runs out. Systems don&apos;t. Track your streak, block the apps, survive the urges, and watch your money finally go the right direction. 100% private. No judgment. Just tools that actually work.</p>
            </div>
            <div className="hero-image">
              <img src="/assets/3screens.png" alt="Nogambling app screenshots showing streak tracker, urge management, and debt recovery features" />
            </div>
            <div className="hero-downloads">
              <a className="apple-store-btn" href="https://apps.apple.com/rs/app/no-gambling-stop-gambling-now/id6751584830" target="_blank" rel="noopener noreferrer">
                <img className="apple-store-img" src="/assets/apple-store.png" alt="Download on the App Store" />
              </a>
              <div className="qr-section">
                <p className="qr-text">Or scan the QR code to get started instantly</p>
                <div className="qr-code">
                  <img src="/assets/qr-code.png" alt="QR Code for App Store" />
                </div>
              </div>
              <div className="privacy-badge">
                <svg className="privacy-icon" viewBox="0 0 24 24" fill="none" stroke="#5DADE2" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" stroke="#5DADE2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <div className="privacy-text">
                  <strong>100% Anonymous &amp; Private</strong>
                  <span>No personal information required. Your recovery journey stays completely confidential.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-bar">
        <div className="container">
          <div className="stat-item"><strong>2,000+</strong><span>Active Users</span></div>
          <div className="stat-item"><strong>$5.2M+</strong><span>Saved from Gambling</span></div>
          <div className="stat-item"><strong>5.0</strong><span>App Store Rating</span></div>
          <div className="stat-item"><strong>Free</strong><span>To Try &amp; Anonymous</span></div>
        </div>
      </section>
    </>
  );
}
