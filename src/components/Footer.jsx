function Footer() {
  return (
    <footer>

      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">

          <div className="nav-logo">
            <span className="nav-logo-name">Aperture</span>
            <span className="nav-logo-sub">Photography Club</span>
          </div>

          <p>
            A community of photographers capturing moments,
            learning together, and sharing stories through images.
          </p>

          <div className="social-links">

            <a href="#" className="social-btn">📷</a>
            <a href="#" className="social-btn">📘</a>
            <a href="#" className="social-btn">🐦</a>

          </div>

        </div>


        {/* Quick Links */}
        <div className="footer-col">

          <h4>Explore</h4>

          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#gallery-preview">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

        </div>


        {/* Community */}
        <div className="footer-col">

          <h4>Community</h4>

          <ul>
            <li><a href="#">Join the Club</a></li>
            <li><a href="#">Workshops</a></li>
            <li><a href="#">Photo Walks</a></li>
            <li><a href="#">Exhibitions</a></li>
          </ul>

        </div>


        {/* Resources */}
        <div className="footer-col">

          <h4>Resources</h4>

          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Gear Reviews</a></li>
            <li><a href="#">Support</a></li>
          </ul>

        </div>

      </div>


      {/* Bottom bar */}

      <div className="footer-bottom">

        <div>
          © 2026 Aperture Photography Club
        </div>

      </div>

    </footer>
  )
}

export default Footer