import { useState, useEffect } from "react";

function Gallery() {
 const images = [
  { id:1,title:"Green Hills",category:"nature",src:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"},
  { id:2,title:"Forest Fog",category:"nature",src:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"},
  { id:3,title:"Mountain Lake",category:"nature",src:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800"},
  { id:4,title:"Wild Leopard",category:"wildlife",src:"https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800"},

  { id:5,title:"City Skyline",category:"architecture",src:"https://images.unsplash.com/photo-1494526585095-c41746248156?w=800"},
  { id:6,title:"Urban Streets",category:"street",src:"https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800"},
  { id:7,title:"Night City",category:"architecture",src:"https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800"},
  { id:8,title:"Street Cafe",category:"street",src:"https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800"},

  { id:9,title:"Portrait Smile",category:"portrait",src:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"},
  { id:10,title:"Street Portrait",category:"portrait",src:"https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800"},
  { id:11,title:"Studio Portrait",category:"portrait",src:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800"},
  { id:12,title:"Creative Portrait",category:"portrait",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800"},

  { id:13,title:"Wild Fox",category:"wildlife",src:"https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800"},
  // { id:14,title:"Wild Deer",category:"wildlife",src:"https://images.unsplash.com/photo-1501706362039-c6e13fdfc4d5?w=800"},
  { id:15,title:"Bird Flight",category:"wildlife",src:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800"},
  { id:16,title:"Wild Tiger",category:"wildlife",src:"https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800"},

  // { id:17,title:"Modern Building",category:"architecture",src:"https://images.unsplash.com/photo-1505842465776-3d90f6163106?w=800"},
  { id:18,title:"Glass Tower",category:"architecture",src:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"},
  { id:19,title:"Street Night",category:"street",src:"https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800"},
  { id:20,title:"City Lights",category:"street",src:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800"}
];

const categories = ["all", ...new Set(images.map((img) => img.category))];
const counts = {};
images.forEach((img) => {
  counts[img.category] = (counts[img.category] || 0) + 1;
});
const getCount = (category) => {
  return category === "all" ? images.length : counts[category] || 0;
};

  const [filter, setFilter] = useState("all");
const [animating, setAnimating] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  const nextImage = () => {
    const next = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(next);
    setSelectedImage(filteredImages[next]);
  };

  const prevImage = () => {
    const prev =
      (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prev);
    setSelectedImage(filteredImages[prev]);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      }

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex, filteredImages, selectedImage]);

  return (
    <div className="section-pad ">
      <header className="gallery-header">
        <div className="logo">
          <div className="logo-name">Aperture</div>
          <div className="logo-sub">Photography Club</div>
        </div>

        <div className="header-meta">
          <span>
            Season <strong>2025–26</strong>
          </span>
          <span>{images.length} photos</span>
        </div>
      </header>

      {/* Filter Buttons */}

      <div className="filter-bar">
        <span className="filter-label">FILTER</span>
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? "active" : ""}`}
           onClick={() => {
  if (category === filter) return;

  setAnimating(true);

  setTimeout(() => {
    setFilter(category);
    setAnimating(false);
  }, 180);
}}
          >
            <>
              {category.toUpperCase()}
              <span className="count-badge">{getCount(category)}</span>
            </>
          </button>
        ))}
      </div>
      {/* Image Grid */}

      <div className={`gallery-masonry ${animating ? "fade-out" : "fade-in"}`}>
          {filteredImages.map((image) => (
            <div
              className="gal-item"
              key={image.id}
              onClick={() => {
                setSelectedImage(image);
                setCurrentIndex(filteredImages.indexOf(image));
              }}
            >
              <img src={image.src} alt={image.title} loading="lazy" />

              <div className="gal-overlay">
                <div className="gal-title">{image.title}</div>
                <div className="gal-cat">
                  {image.category.toUpperCase()}
                </div>
              </div>
            </div>
          ))}
      </div>

      {selectedImage && (
        <div className="lightbox">
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          <button className="lightbox-prev" onClick={prevImage}>
            ‹
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.title}
            className="lightbox-img"
          />

          <button className="lightbox-next" onClick={nextImage}>
            ›
          </button>

          <a href={selectedImage.src} download className="lightbox-download">
            ⬇
          </a>
        </div>
      )}
    </div>
  );
}

export default Gallery;
