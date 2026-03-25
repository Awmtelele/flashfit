import { useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FeaturesSection from './components/FeaturesSection'
import PricingSection from './components/PricingSection'
import VideoSection from './components/VideoSection'
import TimingsSection from './components/TimingsSection'
import FeaturedSection from './components/FeaturedSection'
import LocationSection from './components/LocationSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative bg-dark overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <VideoSection />
        <PricingSection />
        <FeaturedSection />
        <TimingsSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
