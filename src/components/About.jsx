function About() {
  return (
    <section id="about" className="section-pad reveal">
      <div className="about-inner ">
        <div className="about-img-wrap reveal">
          <div className="about-img-frame"></div>

          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=80"
            alt="Club members at a photo walk"
          />

          <div className="about-img-caption">
            Club members — Lalbagh Walk, 2025
          </div>
        </div>

        <div className="about-text reveal">
          <div className="section-eyebrow">About Us</div>

          <h2 className="section-title">
            A Club for Those <br />
            Who <em>Notice</em> Things.
          </h2>

          <p className="about-body">
            Founded in 2018, Aperture brings together photographers of all skill
            levels across Bengaluru. We run weekly photo walks, hands-on
            workshops with professional mentors, and an annual juried
            exhibition.
          </p>

          <div className="about-features">
            <div className="about-feat">
              <div className="feat-icon">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4"></path>
                </svg>
              </div>
              <div className="feat-text">
                <div className="feat-label">Weekly Walks</div>
                <div className="feat-sub">
                  Every Saturday, different locations
                </div>
              </div>
            </div>
           
          </div>

          <div className="about-feat">
            <div className="feat-icon">
              <svg viewBox="0 0 24 24">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <div>
              <div className="feat-label">Workshops</div>
              <div className="feat-sub">Lighting, editing, and composition</div>
            </div>
          </div>

          <div className="about-feat">
            <div className="feat-icon">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M3 9h18M9 21V9"></path>
              </svg>
            </div>
            <div>
              <div className="feat-label">Exhibitions</div>
              <div className="feat-sub">
                Annual show, public gallery display
              </div>
            </div>
          </div>

          <div className="about-feat">
            <div className="feat-icon">
              <svg viewBox="0 0 24 24">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <div>
              <div className="feat-label">Community</div>
              <div className="feat-sub">240+ active members</div>
            </div>
          </div>
        </div>

        <a href="#contact" className="btn-outline">
          Join the Club
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default About;
