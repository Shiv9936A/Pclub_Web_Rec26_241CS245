import { useState, useEffect } from "react";

function Gallery() {
  const images = [
    {
      id: 1,
      title: "Morning Mist",
      category: "nature",
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    },
    {
      id: 2,
      title: "Street Portrait",
      category: "portrait",
      src: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
    },
    {
      id: 3,
      title: "Ocean Horizon",
      category: "landscape",
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    },
    {
      id: 4,
      title: "Mountain Silence",
      category: "nature",
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    },
  ];

  const categories = ["all", ...new Set(images.map((img) => img.category))];
  const getCount = (category) => {
    if (category === "all") return images.length;

    return images.filter((img) => img.category === category).length;
  };

  const [filter, setFilter] = useState("all");
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
  }, [currentIndex, filteredImages]);

  return (
    <div className="section-pad ">
      <h1 className="section-title">
        Photo <em>Gallery</em>
      </h1>

      {/* Filter Buttons */}

      <div className="filter-bar">
        {categories.map((category) => (
          <button
            key={category}
            className={filter === category ? "active-filter" : ""}
            onClick={() => setFilter(category)}
          >
            {category.toUpperCase()} ({getCount(category)})
          </button>
        ))}
      </div>
      {/* Image Grid */}

      <div className="gallery-masonry">
        {filteredImages.map((image) => (
          <div className="gal-item" key={image.id}>
            <img
              src={image.src}
              alt={image.title}
              loading="lazy"
              style={{ width: "100%" }}
              onClick={() => {
                console.log("img clicked");
                setSelectedImage(image);
                setCurrentIndex(filteredImages.indexOf(image));
              }}
            />

            <div className="gal-overlay">
              <div className="gal-title">{image.title}</div>
              <div className="gal-cat">{image.category}</div>
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
