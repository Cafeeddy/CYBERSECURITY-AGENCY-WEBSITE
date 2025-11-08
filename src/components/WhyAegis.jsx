import { motion } from 'framer-motion'

const WhyAegis = () => {
  const features = [
    {
      title: 'Expert-Led',
      icon: '🎓',
      description: 'Our team holds industry-leading certifications including OSCP, CISSP, and CEH. We bring decades of combined experience from government, enterprise, and research environments.',
      details: 'Certified professionals with real-world expertise'
    },
    {
      title: '24/7 Incident Response',
      icon: '🚨',
      description: 'We are on-call 24/7 to defend your assets. Our Security Operations Center monitors threats around the clock, ensuring rapid response to any security incident.',
      details: 'Always ready, always monitoring'
    },
    {
      title: 'Secure by Design',
      icon: '🛡️',
      description: 'We don\'t just find flaws; we build secure systems from the ground up. Every solution we deliver is engineered with security as a fundamental requirement, not an afterthought.',
      details: 'Security first, always'
    }
  ]

  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            Why <span className="text-gradient">Aegis?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built for trust. Designed for mission-critical operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/10 to-dark-red/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className="relative z-10">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-heading font-bold uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-cyber-red font-mono">
                  {feature.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyAegis

