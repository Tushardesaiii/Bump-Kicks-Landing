const APP_STORE = "https://apps.apple.com/us/app/bumpi-kicks-baby-kick-counter/id6765884727"


export function Footer(
  
) 


{
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/assets/icon.png" alt="Bumpsy App Icon" />
              <h3>Bumpsy</h3>
            </div>
            <p>Baby Kick Counter - Bumpsy is a calm pregnancy log for kick tracking, movement patterns, contraction timing, and doctor-ready reports. Free download with in-app purchases. Offline support and no declared data collection.</p>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Product</h4>
              <a className="footer-link" href="#features">Features</a>
              <a className="footer-link" href="#why">Why Bumpsy</a>
              <a className="footer-link" href={APP_STORE} target="_blank" rel="noopener noreferrer">Download</a>
              <a className="footer-link" href="mailto:support@bumpsy.app">Support</a>
            </div>
            <div className="footer-section">
              <h4>Explore</h4>
              <a className="footer-link" href="#faq">FAQ</a>
              <a className="footer-link" href="#features">Kick logging</a>
              <a className="footer-link" href="#features">Movement history</a>
              <a className="footer-link" href="#features">Contraction timer</a>
            </div>
            <div className="footer-section">
              <h4>Platforms</h4>
              <a className="footer-link" href="#cta-download">iPhone</a>
              <a className="footer-link" href="#cta-download">iPad</a>
              <a className="footer-link" href="#cta-download">Mac</a>
             </div>
          </div>
        </div>

        <div className="footer-legal-support">
          <div className="footer-section">
            <h4>Legal &amp; support</h4>
            <a className="footer-link" href="#">Terms of service</a>
            <a className="footer-link" href="#">Privacy policy</a>
            <a className="footer-link" href="#support">Help center</a>
            <a className="footer-link" href="mailto:support@bumpsy.app">Contact us</a>
          </div>
          <div className="footer-section">
           
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Bumpsy. All rights reserved. Available on iPhone, iPad, Mac with Apple Silicon, and Apple Vision. Not medical advice. If you notice reduced fetal movement or have pregnancy concerns, contact your care provider or local emergency services.</p>
        </div>
      </div>
    </footer>
  );
}
