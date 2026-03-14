import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Events from "../components/Events"
import GalleryPreview from "../components/GalleryPreview"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      <GalleryPreview />
      <Contact />
      <Footer />
    </>
  )
}

export default Home