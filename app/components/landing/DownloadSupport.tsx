export function DownloadCTA() {
  return (
    <section id="cta-download" className="download-cta">
      <div className="container">
        <h2>Download the Nogambling app today</h2>
        <p>Join thousands who have taken control of their gambling addiction with the Nogambling app. Your journey to freedom starts with a single download.</p>
        <div className="download-qr">
          <div className="qr-code large">
            <img src="/assets/qr-code.png" alt="QR Code for App Store" />
          </div>
          <p>Scan to download from App Store</p>
        </div>
        <p className="download-privacy">🔒 100% private. No judgment. Just support.</p>
      </div>
    </section>
  );
}

export function SupportSection() {
  return (
    <section id="support" className="support-section">
      <div className="container">
        <h2>Need Help with the Nogambling app?</h2>
        <p>We&apos;re here to support you on your recovery journey. Feel free to reach out to us for anything you need.</p>
        <a className="support-email" href="mailto:support@nogambling.app">support@nogambling.app</a>
      </div>
    </section>
  );
}
