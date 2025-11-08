import { motion } from 'framer-motion'

const Clients = () => {
  const clientLogos = [
    { name: 'Client 1', industry: 'Government' },
    { name: 'Client 2', industry: 'Finance' },
    { name: 'Client 3', industry: 'Healthcare' },
    { name: 'Client 4', industry: 'NGO' },
    { name: 'Client 5', industry: 'Enterprise' },
    { name: 'Client 6', industry: 'Technology' }
  ]

  const testimonials = [
    {
      quote: 'Aegis Cyber Defense provided exceptional security services that helped us identify and remediate critical vulnerabilities before they could be exploited.',
      author: 'CTO',
      company: 'Fortune 500 Company',
      industry: 'Finance'
    }
  ]

  return (
    <section className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            Our <span className="text-gradient">Clients</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Trusted by leading organizations worldwide to protect their most critical assets.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-card p-6 flex flex-col items-center justify-center text-center group"
            >
              <div className="text-3xl mb-2 opacity-60 group-hover:opacity-100 transition-opacity">
                🏢
              </div>
              <h3 className="text-sm font-heading font-bold uppercase mb-1">
                {client.name}
              </h3>
              <p className="text-xs text-gray-500 font-mono">
                {client.industry}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 text-6xl text-cyber-red/20 font-serif">"</div>
            <div className="relative z-10">
              <p className="text-xl text-gray-300 mb-6 italic leading-relaxed">
                {testimonials[0].quote}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyber-red to-dark-red rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold">C</span>
                </div>
                <div>
                  <p className="font-semibold text-cyber-red">
                    {testimonials[0].author}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonials[0].company} • {testimonials[0].industry}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Clients

