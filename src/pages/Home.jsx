import { useState } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import WhyAegis from '../components/WhyAegis'
import CoreServices from '../components/CoreServices'
import ThreatIntelBlog from '../components/ThreatIntelBlog'
import ThreatMap from '../components/ThreatMap'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

function Home() {
  const [activeServiceCategory, setActiveServiceCategory] = useState(null)

  return (
    <div className="min-h-screen bg-space-black">
      <Nav />
      <Hero 
        activeCategory={activeServiceCategory}
        setActiveCategory={setActiveServiceCategory}
      />
      <WhyAegis />
      <CoreServices />
      <ThreatIntelBlog />
      <ThreatMap />
      <Clients />
      <Footer />
    </div>
  )
}

export default Home

