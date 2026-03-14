import { Link } from "react-router-dom"

function Navbar() {

return (

<nav id="navbar">

<a className="nav-logo" href="#hero">
<span className="nav-logo-name">Aperture</span>
<span className="nav-logo-sub">Photography Club</span>
</a>

<ul className="nav-links">
<li><a href="#hero">Home</a></li>
<li><a href="#about">About</a></li>
<li><a href="#gallery-preview">Gallery</a></li>
<li><a href="#events">Events</a></li>
<li><a href="#contact">Contact</a></li>
</ul>

<div className="nav-right">

<Link to="/gallery" className="nav-cta">
Join Club
</Link>

</div>

</nav>

)

}

export default Navbar