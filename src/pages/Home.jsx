import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Events from "../components/Events"
import GalleryPreview from "../components/GalleryPreview"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
   useEffect(() => {

    const revealElements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }

        })

      },
      { threshold:0.1,
rootMargin:"0px 0px -80px 0px" }
    )

    revealElements.forEach((el) => observer.observe(el))

  }, [])
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