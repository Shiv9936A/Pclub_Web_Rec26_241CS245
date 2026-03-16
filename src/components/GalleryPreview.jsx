function GalleryPreview() {
  return (
    <section id="gallery-preview" className="section-pad reveal">

      <div className="gallery-header">

        <div>
          <div className="section-eyebrow">Gallery</div>

          <h2 className="section-title">
            Moments We’ve <em>Captured</em>
          </h2>
        </div>

        <a href="/gallery" className="btn-outline">
          View Full Gallery
        </a>

      </div>


      <div className="gallery-masonry">

        <div className="gal-item">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=80"
            alt="Landscape"
          />
          <div className="gal-overlay">
            <div className="gal-title">Morning Mist</div>
            <div className="gal-cat">Nature</div>
          </div>
        </div>


        <div className="gal-item">
          <img
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&q=80"
            alt="Portrait"
          />
          <div className="gal-overlay">
            <div className="gal-title">Street Portrait</div>
            <div className="gal-cat">Portrait</div>
          </div>
        </div>


        <div className="gal-item">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
            alt="Ocean"
          />
          <div className="gal-overlay">
            <div className="gal-title">Ocean Horizon</div>
            <div className="gal-cat">Landscape</div>
          </div>
        </div>


        <div className="gal-item">
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
  )
}

export default GalleryPreview