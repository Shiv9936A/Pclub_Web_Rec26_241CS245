function Events() {
  return (
    <section id="events" className="section-pad">

      <div className="events-header">

        <div>
          <div className="section-eyebrow">Upcoming Events</div>

          <h2 className="section-title">
            What's <em>On</em>
          </h2>
        </div>

        <a href="#" className="btn-outline">
          All Events
        </a>

      </div>


      <div className="events-grid">

        {/* Event Card 1 */}
        <div className="ev-card">

          <div className="ev-card-img">
            <img
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80"
              alt="Photo Walk"
            />
            <div className="ev-card-img-overlay"></div>
            <span className="ev-tag">Photo Walk</span>
          </div>

          <div className="ev-body">

            <div className="ev-date">
              05 April 2026 · 5:30 AM
            </div>

            <div className="ev-title">
              Golden Hour Walk — Cubbon Park
            </div>

            <div className="ev-desc">
              Capture the city's morning light as it filters through
              Cubbon Park's oldest trees.
            </div>

          </div>

        </div>



        {/* Event Card 2 */}
        <div className="ev-card">

          <div className="ev-card-img">
            <img
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&q=80"
              alt="Workshop"
            />
            <div className="ev-card-img-overlay"></div>
            <span className="ev-tag">Workshop</span>
          </div>

          <div className="ev-body">

            <div className="ev-date">
              19 April 2026 · 10:00 AM
            </div>

            <div className="ev-title">
              Portrait Lighting Workshop
            </div>

            <div className="ev-desc">
              Learn lighting techniques using reflectors
              and off-camera flash.
            </div>

          </div>

        </div>



        {/* Event Card 3 */}
        <div className="ev-card">

          <div className="ev-card-img">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80"
              alt="Exhibition"
            />
            <div className="ev-card-img-overlay"></div>
            <span className="ev-tag">Exhibition</span>
          </div>

          <div className="ev-body">

            <div className="ev-date">
              10 May 2026 · All Weekend
            </div>

            <div className="ev-title">
              Annual Photo Exhibition 2026
            </div>

            <div className="ev-desc">
              Featuring curated prints from club members.
            </div>

          </div>

        </div>


      </div>

    </section>
  )
}

export default Events