function Footer() {
  return (
    <footer>
      <div className="footer-main reveal">
        {/* Brand */}
        <div className="footer-brand">
          <div className="nav-logo">
            <span className="nav-logo-name">Aperture</span>
            <span className="nav-logo-sub">Photography Club</span>
          </div>

          <p>
           A community of photographers in Bengaluru — walking, shooting,
and exhibiting together since 2018.
          </p>

          <div className="social-links">
            <a href="#" className="social-btn">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="social-btn">
              <svg viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="social-btn">
              <svg viewBox="0 0 24 24">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Navigate</h4>

          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
            <li>
              <a href="#gallery-preview">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div className="footer-col">
          <h4>Resources</h4>

          <ul>
            <li>
              <a href="#">Join the Club</a>
            </li>
            <li>
              <a href="#">Workshops</a>
            </li>
            <li>
              <a href="#">Photo Walks</a>
            </li>
            <li>
              <a href="#">Exhibitions</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h4>Club</h4>

          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Guides</a>
            </li>
            <li>
              <a href="#">Gear Reviews</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}

      <div className="footer-bottom">
        <div>© 2026 Aperture Photography Club</div>
      </div>
    </footer>
  );
}

export default Footer;
