import { motion } from 'framer-motion'
import Team from './Team'

const AboutPage = () => {
  return (
    <section className="py-24 px-6 lg:px-8 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase mb-4">
            About <span className="text-gradient">Aegis</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            World-class cybersecurity expertise for organizations that can't afford to be compromised.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/10 to-dark-red/10 opacity-50 blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-cyber-red">Aegis Cyber Defense</strong> exists to protect what matters most. 
                  We specialize in defending critical infrastructure, sensitive data, and mission-critical operations 
                  for governments, NGOs, and enterprises worldwide.
                </p>
                <p>
                  Our mission is to provide world-class cybersecurity services that go beyond traditional security measures. 
                  We don't just find vulnerabilities—we build secure systems from the ground up, implement proactive defense 
                  strategies, and maintain 24/7 vigilance to ensure our clients are always protected.
                </p>
                <p>
                  Every engagement is built on three core principles: <strong className="text-cyber-red">expertise</strong>, 
                  {' '}<strong className="text-cyber-red">reliability</strong>, and <strong className="text-cyber-red">trust</strong>. 
                  We hold industry-leading certifications, maintain the highest standards of operational security, and 
                  treat every client's security challenge as if it were our own.
                </p>
                <p>
                  In an era where cyber threats evolve daily, we remain committed to staying ahead of adversaries, 
                  continuously improving our capabilities, and delivering security solutions that truly make a difference.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Leadership Team Section */}
        <Team />
      </div>
    </section>
  )
}

export default AboutPage

