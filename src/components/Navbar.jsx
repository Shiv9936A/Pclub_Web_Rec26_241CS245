import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
    <nav id="navbar">
      <a className="nav-logo" href="#hero">
        <span className="nav-logo-name">Aperture</span>
        <span className="nav-logo-sub">Photography Club</span>
      </a>

      <ul className="nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#gallery-preview">Gallery</a>
        </li>
        <li>
          <a href="#events">Events</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-right">
        <Link to="/gallery" className="nav-cta">
          Join Club
        </Link>

        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
    <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>

<a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
<a href="#about" onClick={() => setMenuOpen(false)}>About</a>
<a href="#gallery-preview" onClick={() => setMenuOpen(false)}>Gallery</a>
<a href="#events" onClick={() => setMenuOpen(false)}>Events</a>
<a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

</div>
</>
  );
}

export default Navbar;
