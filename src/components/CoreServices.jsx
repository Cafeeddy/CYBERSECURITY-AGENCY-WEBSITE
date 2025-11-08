import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CoreServices = () => {
  const coreServices = [
    {
      id: 'penetration-testing',
      title: 'Penetration Testing',
      icon: '🎯',
      description: 'Comprehensive security assessments to identify vulnerabilities before attackers do.',
      link: '/services#penetration-testing'
    },
    {
      id: 'mdr',
      title: 'Managed Security (MDR)',
      icon: '👁️',
      description: '24/7 monitoring and response to protect your infrastructure around the clock.',
      link: '/services#mdr'
    },
    {
      id: 'cloud-security',
      title: 'Cloud Security',
      icon: '☁️',
      description: 'Secure cloud architecture, migration, and ongoing security management.',
      link: '/services#cloud-security'
    },
    {
      id: 'ai-security',
      title: 'AI Security',
      icon: '🤖',
      description: 'AI model hardening, red-teaming, and protection against adversarial attacks.',
      link: '/services#ai-security'
    },
    {
      id: 'incident-response',
      title: 'Incident Response',
      icon: '🚨',
      description: 'Rapid response and forensics to contain and remediate security breaches.',
      link: '/services#incident-response'
    }
  ]

  return (
    <section id="services" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            Core <span className="text-gradient">Cybersecurity Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Specialized security services for organizations that can't afford to be compromised.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link to={service.link}>
                <div className="glass-card p-6 h-full relative overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/10 to-dark-red/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                  
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-heading font-bold uppercase mb-3 group-hover:text-cyber-red transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <span className="text-sm text-cyber-red font-medium flex items-center space-x-2">
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CoreServices

