import Features from "./Components/Home/Features"
import HeroSection from "./Components/Home/HeroSection"
import HowItWorks from "./Components/Home/HowItWorks"
import Testimonials from "./Components/Home/Testimonials"
import Navbar from "./Components/Layout/Navbar"


function App() {

  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Testimonials />
    </div>
  )
}

export default App
