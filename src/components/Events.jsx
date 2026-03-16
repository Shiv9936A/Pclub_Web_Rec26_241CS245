function Events() {
  const events = [
    {
      id: 1,
      title: "Golden Hour Walk",
      date: "May 20, 2026",
      category: "Photo Walk",
      location: "Cubbon Park",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      desc: "Capture the warm tones of sunset during our guided golden hour walk.",
    },

    {
      id: 2,
      title: "Street Photography Workshop",
      date: "June 2, 2026",
      category: "Workshop",
      location: "MG Road",
      image:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800",
      desc: "Learn the art of capturing candid urban moments.",
    },

    {
      id: 3,
      title: "Nature Photography Meetup",
      date: "June 15, 2026",
      category: "Meetup",
      location: "Lalbagh Botanical Garden",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
      desc: "Explore nature photography techniques with fellow photographers.",
    },
  ];
  return (
    <section id="events" className="section-pad">
      <div className="events-header reveal">
        {/* <div className="section-divider">
          <div className="divider-line"></div>
          <div className="divider-dot"></div>
          <div className="divider-line"></div>
        </div> */}
        <div>
          <div className="section-eyebrow">Upcoming Events</div>

          <h2 className="section-title">
            What's <em>On</em>
          </h2>
        </div>

        <a href="#" className="btn-outline">
          All Events
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      <div className="events-grid ">
        {events.map((event) => (
          <div className="ev-card reveal" key={event.id}>
            <div className="ev-card-img">
              <img src={event.image} alt={event.title} />

              <div className="ev-card-img-overlay"></div>

              <span className="ev-tag">{event.category}</span>
            </div>

            <div className="ev-body">
              <div className="ev-date">{event.date}</div>

              <h3 className="ev-title">{event.title}</h3>

              <p className="ev-desc">{event.desc}</p>
            </div>

            <div className="ev-footer">
              <div className="ev-location">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {event.location}
              </div>
              <div className="ev-link">
                Details
                <svg viewBox="0 0 24 24">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Events;
