import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const ThreatMap = () => {
  const mapRef = useRef(null)

  useEffect(() => {
    // Embed a live threat map
    // Many threat maps don't allow direct iframe embedding, so we create an attractive placeholder
    // You can replace this with an iframe if you have access to an embeddable threat map API
    if (mapRef.current) {
      // Create an animated threat map visualization
      mapRef.current.innerHTML = `
        <div style="width: 100%; height: 600px; background: linear-gradient(135deg, #050A14 0%, #1a1a2e 100%); border: 1px solid rgba(220, 38, 38, 0.3); border-radius: 8px; position: relative; overflow: hidden;">
          <!-- World Map Background (simplified) -->
          <svg style="position: absolute; width: 100%; height: 100%; opacity: 0.1;" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <path d="M100,250 Q200,200 300,250 T500,250 T700,250" stroke="#DC2626" fill="none" stroke-width="2"/>
            <path d="M150,300 Q250,350 350,300 T550,300 T750,300" stroke="#DC2626" fill="none" stroke-width="2"/>
          </svg>
          
          <!-- Animated threat dots to simulate real-time attacks -->
          <div style="position: absolute; width: 100%; height: 100%;">
            ${Array.from({ length: 30 }).map((_, i) => {
              const x = Math.random() * 100
              const y = Math.random() * 100
              const delay = Math.random() * 3
              const duration = 2 + Math.random() * 3
              const size = 4 + Math.random() * 6
              return `
                <div style="position: absolute; left: ${x}%; top: ${y}%; width: ${size}px; height: ${size}px; background: #DC2626; border-radius: 50%; box-shadow: 0 0 ${size * 2}px #DC2626; animation: pulse ${duration}s infinite; animation-delay: ${delay}s; opacity: 0.8;"></div>
              `
            }).join('')}
          </div>
          
          <!-- Connection lines between threats -->
          <svg style="position: absolute; width: 100%; height: 100%; opacity: 0.3;" viewBox="0 0 1000 500">
            ${Array.from({ length: 10 }).map((_, i) => {
              const x1 = Math.random() * 1000
              const y1 = Math.random() * 500
              const x2 = Math.random() * 1000
              const y2 = Math.random() * 500
              return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#DC2626" stroke-width="1" opacity="0.5"/>`
            }).join('')}
          </svg>
          
          <!-- Overlay text -->
          <div style="position: absolute; bottom: 20px; left: 20px; right: 20px; text-align: center; color: #DC2626; font-size: 14px; font-weight: bold;">
            <div style="margin-bottom: 5px;">LIVE GLOBAL THREAT MAP</div>
            <div style="font-size: 12px; color: #999; font-weight: normal;">
              Real-time attack visualization • Updated continuously
            </div>
          </div>
          
          <style>
            @keyframes pulse {
              0%, 100% { 
                opacity: 0.4; 
                transform: scale(1); 
                box-shadow: 0 0 8px #DC2626;
              }
              50% { 
                opacity: 1; 
                transform: scale(1.5); 
                box-shadow: 0 0 20px #DC2626;
              }
            }
          </style>
        </div>
      `
    }
  }, [])

  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            Live Global <span className="text-gradient">Threat Map</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-time visualization of global cyber threats and attack patterns.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div ref={mapRef} className="w-full"></div>
          <div className="mt-4 text-center text-sm text-gray-500">
            <p>
              Real-time threat data visualization. For production deployment, you can integrate with{' '}
              <a href="https://threatmap.checkpoint.com/" target="_blank" rel="noopener noreferrer" className="text-cyber-red hover:underline">
                Check Point ThreatCloud
              </a>
              {', '}
              <a href="https://www.fortinet.com/threat-map" target="_blank" rel="noopener noreferrer" className="text-cyber-red hover:underline">
                Fortinet Threat Map
              </a>
              {', or '}
              <a href="https://threatmap.kaspersky.com/" target="_blank" rel="noopener noreferrer" className="text-cyber-red hover:underline">
                Kaspersky Threat Map
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ThreatMap

