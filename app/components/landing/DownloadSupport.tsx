export function DownloadCTA() {
  return (
    <section id="cta-download" className="download-cta">
      <div className="container">
        <h2>Download Baby Kick Counter - Bumpsy today</h2>
        <p>Track fetal kicks, monitor movement patterns, and keep a calm pregnancy log with a simple app designed for reassurance and doctor-ready sharing.</p>
        <div className="download-qr">
          <div className="qr-code large">
            <img src="/assets/qr-code.png" alt="QR Code for App Store" />
          </div>
          <p>Scan to open the App Store listing</p>
        </div>
        <p className="download-privacy">🔒 Free download. In-app purchases available. No data collection declared.</p>
      </div>
    </section>
  );
}

export function SupportSection() {
  return (
    <section id="support" className="support-section">
      <div className="container">
        <h2>Need help with Bumpsy?</h2>
        <p>If you have questions about kick logging, sessions, reports, or pricing, the App Store developer contact is the best place to start.</p>
        <a className="support-email" href="mailto:support@bumpsy.app">support@bumpsy.app</a>
      </div>
    </section>
  );
}
