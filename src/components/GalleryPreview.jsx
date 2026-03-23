import { Link } from "react-router-dom";

function GalleryPreview() {
  return (
    <section id="gallery-preview" className="section-pad ">
      <div className="gallery-header reveal">
        {/* <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div> */}
        <div>
          <div className="section-eyebrow">Member work</div>

          <h2 className="section-title">
           From the <em>Archive</em>
          </h2>
        </div>

        <Link to="/gallery" className="btn-outline">
          View Full Gallery
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>

      <div className="gallery-masonry reveal">
        <div className="gal-item reveal">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80"
            alt="Landscape"
          />
          <div className="gal-overlay">
            <div className="gal-title">Morning Mist</div>
            <div className="gal-cat">Nature</div>
          </div>
        </div>

        <div className="gal-item reveal">
          <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80" alt="Morning Mist" />
          <div className="gal-overlay">
            <div className="gal-title">Morning Mist</div>
            <div className="gal-cat">Nature</div>
          </div>
        </div>
        <div className="gal-item reveal">
         <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&amp;q=80" alt="Soft Light Study" />
          <div className="gal-overlay">
            <div className="gal-title">Soft Light Study</div>
            <div className="gal-cat">Portrait</div>
          </div>
        </div>

        <div className="gal-item reveal">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
            alt="Ocean"
          />
          <div className="gal-overlay">
            <div className="gal-title">Ocean Horizon</div>
            <div className="gal-cat">Landscape</div>
          </div>
        </div>       
        <div className="gal-item reveal">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=80" alt="Urban Reverie" />
          <div className="gal-overlay">
            <div className="gal-title">Urban Reverie</div>
            <div className="gal-cat">Potrait</div>
          </div>
        </div>       
        <div className="gal-item reveal">
          <img
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=600&q=80"
            alt="Mountain"
          />
          <div className="gal-overlay">
            <div className="gal-title">Mountain Silence</div>
            <div className="gal-cat">Nature</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;
