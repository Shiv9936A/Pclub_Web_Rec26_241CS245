function About() {
  return (
    <section id="about" className="section-pad">

      <div className="about-inner">

        <div className="about-img-wrap">

          <div className="about-img-frame"></div>

          <img
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=80"
            alt="Club members at a photo walk"
          />

          <div className="about-img-caption">
            Club members — Lalbagh Walk, 2025
          </div>

        </div>


        <div className="about-text">

          <div className="section-eyebrow">
            About Us
          </div>

          <h2 className="section-title">
            A Club for Those <br />
            Who <em>Notice</em> Things.
          </h2>

          <p className="about-body">
            Founded in 2018, Aperture brings together photographers of all
            skill levels across Bengaluru. We run weekly photo walks,
            hands-on workshops with professional mentors, and an annual
            juried exhibition.
          </p>

          <div className="about-features">

            <div className="about-feat">
              <div className="feat-icon">📷</div>
              <div>
                <div className="feat-label">Weekly Walks</div>
                <div className="feat-sub">
                  Every Saturday, different locations
                </div>
              </div>
            </div>

            <div className="about-feat">
              <div className="feat-icon">🎓</div>
              <div>
                <div className="feat-label">Workshops</div>
                <div className="feat-sub">
                  Lighting, editing, and composition
                </div>
              </div>
            </div>

            <div className="about-feat">
              <div className="feat-icon">🖼</div>
              <div>
                <div className="feat-label">Exhibitions</div>
                <div className="feat-sub">
                  Annual show, public gallery display
                </div>
              </div>
            </div>

            <div className="about-feat">
              <div className="feat-icon">👥</div>
              <div>
                <div className="feat-label">Community</div>
                <div className="feat-sub">
                  240+ active members
                </div>
              </div>
            </div>

          </div>

          <a href="#contact" className="btn-outline">
            Join the Club
          </a>

        </div>

      </div>

    </section>
  )
}

export default About