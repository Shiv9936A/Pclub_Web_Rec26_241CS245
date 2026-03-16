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

  const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

      if (entry.isIntersecting) {

        entry.target.style.transitionDelay = ((index % 4) * 80) + "ms"

        entry.target.classList.add("visible")

        observer.unobserve(entry.target)

      }

    })

  }, {
    threshold: 0.12
  })

  revealElements.forEach((el) => observer.observe(el))

  return () => observer.disconnect()

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