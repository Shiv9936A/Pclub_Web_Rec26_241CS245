function Contact() {
  return (
    <section id="contact" className="section-pad">

      <div className="contact-inner">

        {/* Left Info Section */}
        <div className="contact-left">

          <div className="section-eyebrow">
            Contact
          </div>

          <h2 className="section-title">
            Let’s <em>Shoot</em> Together
          </h2>

          <p className="contact-subtitle">
            Interested in joining Aperture or attending one of our
            photography walks? Reach out and we’ll get back to you.
          </p>

          <div className="contact-info">

            <div className="info-row">
              <div className="info-icon">📍</div>
              <div>
                <div className="info-label">Location</div>
                <div className="info-val">
                  Bengaluru, Karnataka
                </div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">✉️</div>
              <div>
                <div className="info-label">Email</div>
                <div className="info-val">
                  hello@apertureclub.com
                </div>
              </div>
            </div>

            <div className="info-row">
              <div className="info-icon">📞</div>
              <div>
                <div className="info-label">Phone</div>
                <div className="info-val">
                  +91 98765 43210
                </div>
              </div>
            </div>

          </div>

        </div>


        {/* Right Form Section */}
        <form className="contact-form">

          <div className="cf-row">

            <div className="cf-field">
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name"
              />
            </div>

            <div className="cf-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Your email"
              />
            </div>

          </div>


          <div className="cf-field">
            <label>Subject</label>
            <input
              type="text"
              placeholder="Subject"
            />
          </div>


          <div className="cf-field">
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
            />
          </div>


          <button className="form-submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default Contact