import { Link } from "react-router-dom"
function Hero() {
  return (
    <section id="hero">

      <div className="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=1800&q=85"
          alt="Photography hero"
        />
      </div>

      <div className="hero-gradient"></div>

      <div className="hero-content">
        

        <div className="hero-eyebrow">
          Est. 2018 · Bengaluru, India
        </div>

        <h1 className="hero-title">
          See the World<br />Through the <em>Lens.</em>
        </h1>

        <p className="hero-desc">
          Aperture is a community of passionate photographers — from first-timers to seasoned professionals — gathering to shoot, learn, and exhibit together.
        </p>

        <div className="hero-actions">

          <a href="#about" className="btn-primary">
            Discover More
          </a>


          <Link to="/gallery" className="btn-ghost">
  View Gallery
</Link>

        </div>

      </div>

      <div className="hero-stats">

        <div className="stat-item">
          <div className="stat-num">240+</div>
          <div className="stat-label">Members</div>
        </div>

        <div className="stat-item">
          <div className="stat-num">48</div>
          <div className="stat-label">Events / yr</div>
        </div>

        <div className="stat-item">
          <div className="stat-num">7</div>
          <div className="stat-label">Exhibitions</div>
        </div>

      </div>

      <div className="hero-scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  )
}

export default Hero