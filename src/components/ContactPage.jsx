import { motion } from 'framer-motion'
import { useState } from 'react'
import ContactForm from './ContactForm'

const ContactPage = () => {
  const [showIncidentForm, setShowIncidentForm] = useState(false)

  return (
    <section className="py-24 px-6 lg:px-8 relative min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        {/* REPORT AN INCIDENT Button - Highly Visible */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="glass-card p-6 border-2 border-red-600/50 bg-red-950/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-800/20 animate-pulse" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase mb-2 text-red-400">
                    🚨 Emergency Incident Response (24/7)
                  </h3>
                  <p className="text-gray-300">
                    If you're experiencing a security incident, we're available 24/7 to help. 
                    Call our emergency hotline or use the form below.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="tel:+254798755127"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-red-600/50 transition-all text-center"
                  >
                    📞 +254 (798) 755-127
                  </motion.a>
                  <motion.button
                    onClick={() => setShowIncidentForm(!showIncidentForm)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-red-600/20 border-2 border-red-600 rounded-lg font-bold text-lg hover:bg-red-600/30 transition-all"
                  >
                    {showIncidentForm ? 'Hide Form' : 'Report Incident'}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Incident Report Form */}
        {showIncidentForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-12"
          >
            <div className="glass-card p-8 border-2 border-red-600/30">
              <h3 className="text-2xl font-heading font-bold uppercase mb-6 text-red-400">
                Incident Report Form
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Incident Type *
                  </label>
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600">
                    <option>Data Breach</option>
                    <option>Ransomware Attack</option>
                    <option>DDoS Attack</option>
                    <option>Malware Infection</option>
                    <option>Unauthorized Access</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    placeholder="Your organization"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Incident Description *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 resize-none"
                    placeholder="Describe the incident in detail..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-red-600/50 transition-all"
                >
                  Submit Incident Report
                </motion.button>
                <p className="text-xs text-gray-400 text-center">
                  ⚠️ This form is for incident reporting only. For immediate assistance, call +254 (798) 755-127
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Standard Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Request a security assessment, discuss your requirements, or reach out for 
            general inquiries. All communications are encrypted and confidential.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold uppercase mb-4">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">General Inquiries</p>
                  <p className="text-cyber-red font-mono">
                    ceoeddieo@gmail.com
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-1">Security Inquiries</p>
                  <p className="text-cyber-red font-mono">
                    ceoeddieo@gmail.com
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-400 mb-1">Emergency Hotline (24/7)</p>
                  <p className="text-dark-red font-mono font-semibold text-lg">
                    +254 (798) 755-127
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold uppercase mb-4">
                Secure Communication
              </h3>
              
              <div className="space-y-3">
                <a
                  href="/pgp.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 glass-effect rounded-lg border border-white/10 hover:border-cyber-red/50 transition-colors group"
                >
                  <span className="text-sm font-medium">PGP Public Key</span>
                  <span className="text-cyber-red group-hover:translate-x-1 transition-transform">→</span>
                </a>
                
                <a
                  href="/security.txt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 glass-effect rounded-lg border border-white/10 hover:border-cyber-red/50 transition-colors group"
                >
                  <span className="text-sm font-medium">Security Disclosure</span>
                  <span className="text-cyber-red group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-heading font-bold uppercase mb-4">
                Office Locations
              </h3>
              
              <div className="space-y-3 text-sm text-gray-300">
                <p>
                  <strong className="text-cyber-red">Headquarters:</strong><br />
                  Nairobi, Kenya
                </p>
                <p>
                  <strong className="text-cyber-red">Service Area:</strong><br />
                  Global Operations
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage

