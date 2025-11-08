import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ServiceCard from './ServiceCard'

const ServicesPage = () => {
  const cybersecurityServices = [
    {
      id: 'penetration-testing',
      title: 'Offensive Security & Penetration Testing',
      icon: '🎯',
      category: 'Security',
      description: 'Comprehensive penetration testing and vulnerability assessments for web applications, networks, and infrastructure.',
      features: [
        'Web application penetration testing',
        'Network penetration testing',
        'Mobile application security audits',
        'API security testing',
        'Secure code review'
      ],
      compliance: ['OWASP Top 10', 'PTES', 'NIST'],
      color: 'cyber-red'
    },
    {
      id: 'cloud-security',
      title: 'Secure Cloud Architecture & Migration',
      icon: '☁️',
      category: 'Cloud',
      description: 'Cloud security posture management and secure migration services for AWS, Azure, and GCP.',
      features: [
        'Multi-cloud security assessment',
        'Infrastructure as Code (IaC) security',
        'Container and Kubernetes security',
        'Cloud-native threat detection',
        'Compliance mapping (CIS, SOC 2, HIPAA)'
      ],
      compliance: ['CIS Benchmarks', 'SOC 2', 'HIPAA'],
      color: 'cyber-red'
    },
    {
      id: 'mdr',
      title: 'Managed Security & Incident Response (MDR)',
      icon: '👁️',
      category: 'MDR',
      description: '24/7 security monitoring, threat detection, and rapid incident response services.',
      features: [
        '24/7 Security Operations Center (SOC) monitoring',
        'Advanced threat detection and correlation',
        'Automated incident response orchestration',
        'Threat intelligence integration',
        'Custom detection rule development'
      ],
      compliance: ['SOC 2', 'ISO 27001'],
      color: 'cyber-red'
    },
    {
      id: 'ai-security',
      title: 'AI Security & Model Hardening',
      icon: '🤖',
      category: 'AI',
      description: 'AI model security, adversarial defense, and LLM red-teaming services.',
      features: [
        'LLM red-teaming and prompt injection defense',
        'Adversarial attack simulation and mitigation',
        'Model audit and bias assessment',
        'AI system security architecture review',
        'Training data integrity verification'
      ],
      compliance: ['NIST AI RMF', 'ISO/IEC 23894'],
      color: 'dark-red'
    },
    {
      id: 'devsecops',
      title: 'DevSecOps & Secure SDLC',
      icon: '🔧',
      category: 'DevOps',
      description: 'Integrate security into your development lifecycle from design to deployment.',
      features: [
        'Secure SDLC implementation',
        'CI/CD pipeline security',
        'Dependency vulnerability scanning',
        'Container security scanning',
        'Security training for developers'
      ],
      compliance: ['OWASP', 'NIST'],
      color: 'cyber-red'
    },
    {
      id: 'compliance',
      title: 'Compliance & vCISO Services',
      icon: '📋',
      category: 'Compliance',
      description: 'Strategic governance, risk management, and compliance programs with virtual CISO support.',
      features: [
        'Security governance framework development',
        'Risk assessment and treatment planning',
        'Compliance gap analysis (ISO 27001, SOC 2, GDPR)',
        'Policy and procedure documentation',
        'Virtual CISO (vCISO) services'
      ],
      compliance: ['ISO 27001', 'SOC 2', 'GDPR', 'NIST'],
      color: 'dark-red'
    }
  ]

  const digitalEngineeringServices = [
    {
      id: 'web-development',
      title: 'Secure Web Development',
      icon: '🌐',
      category: 'Web',
      description: 'Build secure web applications with security built in from day one.',
      features: [
        'Secure coding practices',
        'OWASP compliance',
        'Security-first architecture',
        'Regular security audits'
      ],
      compliance: ['OWASP'],
      color: 'cyber-red'
    },
    {
      id: 'app-development',
      title: 'Secure App Development',
      icon: '📱',
      category: 'App',
      description: 'Develop secure mobile applications for iOS and Android with security as a core feature.',
      features: [
        'Mobile security best practices',
        'Secure data storage',
        'API security',
        'Regular security testing'
      ],
      compliance: ['OWASP Mobile'],
      color: 'cyber-red'
    },
    {
      id: 'game-development',
      title: 'Game Development',
      icon: '🎮',
      category: 'Games',
      description: 'Secure game development with anti-cheat and security features.',
      features: [
        'Anti-cheat systems',
        'Secure multiplayer networking',
        'Data protection',
        'Security monitoring'
      ],
      compliance: [],
      color: 'dark-red'
    },
    {
      id: 'api-integration',
      title: 'API Integration',
      icon: '🔌',
      category: 'API',
      description: 'Secure API development and integration services.',
      features: [
        'RESTful API development',
        'GraphQL security',
        'API authentication and authorization',
        'Rate limiting and DDoS protection'
      ],
      compliance: ['OWASP API'],
      color: 'cyber-red'
    },
    {
      id: 'performance-seo',
      title: 'Performance & SEO Optimization',
      icon: '⚡',
      category: 'Performance',
      description: 'Optimize performance and SEO while maintaining security standards.',
      features: [
        'Performance optimization',
        'SEO best practices',
        'Security-aware optimization',
        'Monitoring and analytics'
      ],
      compliance: [],
      color: 'dark-red'
    },
    {
      id: 'business-automation',
      title: 'Business Automation',
      icon: '🤖',
      category: 'Automation',
      description: 'Secure automation solutions for business processes.',
      features: [
        'Workflow automation',
        'Process optimization',
        'Secure integration',
        'Monitoring and reporting'
      ],
      compliance: [],
      color: 'cyber-red'
    },
    {
      id: 'multi-language',
      title: 'Multi-language Integration',
      icon: '🌍',
      category: 'Localization',
      description: 'Multi-language support with security considerations.',
      features: [
        'Internationalization (i18n)',
        'Localization (l10n)',
        'Secure content management',
        'Cultural adaptation'
      ],
      compliance: [],
      color: 'dark-red'
    }
  ]

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
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive security and engineering services for mission-critical operations.
          </p>
        </motion.div>

        {/* Primary Section: Cybersecurity Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Our <span className="text-gradient">Cybersecurity Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Specialized security services designed to protect your most critical assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cybersecurityServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Secondary Section: Digital Engineering Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
              Our <span className="text-gradient">Digital Engineering Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
              To complement our security-first mindset, we also build digital products{' '}
              <span className="text-cyber-red font-semibold">Secure by Design</span> from day one.
            </p>
            <p className="text-lg text-gray-500 max-w-3xl mx-auto">
              Every solution we deliver is engineered with security as a fundamental requirement, not an afterthought.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalEngineeringServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyber-red to-dark-red rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyber-red/50 transition-all"
            >
              Request a Security Assessment
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPage

