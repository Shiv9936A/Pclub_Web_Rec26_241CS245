function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="contact-inner">
        {/* Left Info Section */}
        <div className="contact-left reveal">
          <div className="section-eyebrow">Contact</div>

          <h2 className="section-title">
            Let’s <em>Shoot</em> Together
          </h2>

          <p className="contact-subtitle">
            Interested in joining Aperture or attending one of our photography
            walks? Reach out and we’ll get back to you.
          </p>

          <div className="contact-info">
            <div className="info-row">
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="info-label">Location</div>
                <div className="info-val">Bengaluru, Karnataka</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div>
                <div className="info-label">Email</div>
                <div className="info-val">hello@apertureclub.com</div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <div>
                <div className="info-label">Phone</div>
                <div className="info-val">+91 98765 43210</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <form className="contact-form reveal">
          <div className="cf-row">
            <div className="cf-field">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>

            <div className="cf-field">
              <label>Email</label>
              <input type="email" placeholder="Your email" />
            </div>
          </div>

          <div className="cf-field">
            <label>Subject</label>
            <input type="text" placeholder="Subject" />
          </div>

          <div className="cf-field">
            <label>Message</label>
            <textarea rows="4" placeholder="Write your message..." />
          </div>

          <button className="form-submit">
            Send Message
            <svg viewBox="0 0 24 24">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
