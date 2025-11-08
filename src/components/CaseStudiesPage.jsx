import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Securing an E-commerce Platform from the OWASP Top 10',
      client: 'E-commerce Retailer',
      industry: 'Retail',
      challenge: 'A fast-growing e-commerce platform needed comprehensive security assessment to protect customer data and ensure PCI DSS compliance before a major product launch.',
      process: [
        'Conducted comprehensive web application penetration testing',
        'Performed infrastructure security assessment',
        'Reviewed payment processing integration for PCI DSS compliance',
        'Identified and documented all vulnerabilities with risk ratings',
        'Provided detailed remediation guidance and prioritized fixes',
        'Conducted follow-up testing to verify remediation effectiveness'
      ],
      results: [
        'Identified and remediated 23 critical and high-severity vulnerabilities',
        'Achieved PCI DSS Level 1 compliance',
        'Improved security posture by 85% within 6 weeks',
        'Implemented secure coding practices and DevSecOps pipeline',
        'Established ongoing security monitoring and assessment program'
      ],
      metrics: {
        vulnerabilitiesFound: 23,
        criticalFixed: 8,
        timeToRemediate: '6 weeks',
        securityImprovement: '85%'
      }
    },
    {
      id: 2,
      title: 'Cloud Security Assessment for Financial Services',
      client: 'Financial Institution',
      industry: 'Finance',
      challenge: 'A financial institution migrating to AWS needed assurance that their cloud infrastructure met regulatory requirements and industry security standards.',
      process: [
        'Conducted comprehensive cloud security posture assessment',
        'Reviewed IAM policies and access controls',
        'Assessed network security and segmentation',
        'Evaluated data encryption and key management',
        'Performed penetration testing of cloud infrastructure',
        'Reviewed compliance with SOC 2, PCI DSS, and financial regulations'
      ],
      results: [
        'Identified and remediated misconfigurations in 15 critical services',
        'Implemented proper network segmentation and access controls',
        'Achieved SOC 2 Type II certification',
        'Enhanced data encryption and key management practices',
        'Established continuous cloud security monitoring'
      ],
      metrics: {
        vulnerabilitiesFound: 15,
        criticalFixed: 5,
        timeToRemediate: '8 weeks',
        securityImprovement: '90%'
      }
    },
    {
      id: 3,
      title: 'AI Model Security and Red Team Assessment',
      client: 'AI Technology Company',
      industry: 'Technology',
      challenge: 'A company deploying AI models for critical decision-making needed to ensure their models were secure against adversarial attacks and data poisoning.',
      process: [
        'Conducted comprehensive AI model security audit',
        'Performed adversarial attack simulations',
        'Tested for prompt injection vulnerabilities in LLM systems',
        'Assessed training data integrity and validation processes',
        'Evaluated model deployment security',
        'Conducted red team exercises targeting AI systems'
      ],
      results: [
        'Identified and mitigated 12 AI-specific vulnerabilities',
        'Implemented adversarial defense mechanisms',
        'Enhanced training data validation and sanitization',
        'Established AI security best practices and guidelines',
        'Deployed continuous monitoring for model drift and anomalies'
      ],
      metrics: {
        vulnerabilitiesFound: 12,
        criticalFixed: 4,
        timeToRemediate: '10 weeks',
        securityImprovement: '80%'
      }
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
            Case <span className="text-gradient">Studies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real-world security challenges and how we helped organizations overcome them.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/10 to-dark-red/10 opacity-50 blur-3xl" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-xs font-mono text-cyber-red uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <span className="text-gray-600">•</span>
                    <span className="text-sm text-gray-400">
                      {study.client}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold uppercase mb-4">
                    {study.title}
                  </h2>
                </div>

                {/* The Challenge */}
                <div className="mb-8">
                  <h3 className="text-xl font-heading font-bold uppercase mb-4 text-cyber-red">
                    The Challenge
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Our Process */}
                <div className="mb-8">
                  <h3 className="text-xl font-heading font-bold uppercase mb-4 text-cyber-red">
                    Our Process
                  </h3>
                  <ul className="space-y-2">
                    {study.process.map((step, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-300">
                        <span className="text-cyber-red mt-1">→</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* The Results */}
                <div className="mb-8">
                  <h3 className="text-xl font-heading font-bold uppercase mb-4 text-cyber-red">
                    The Results
                  </h3>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-3 text-gray-300">
                        <span className="text-cyber-red mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyber-red mb-1">
                      {study.metrics.vulnerabilitiesFound}
                    </div>
                    <div className="text-xs text-gray-400 uppercase">
                      Vulnerabilities Found
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyber-red mb-1">
                      {study.metrics.criticalFixed}
                    </div>
                    <div className="text-xs text-gray-400 uppercase">
                      Critical Fixed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyber-red mb-1">
                      {study.metrics.timeToRemediate}
                    </div>
                    <div className="text-xs text-gray-400 uppercase">
                      Time to Remediate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyber-red mb-1">
                      {study.metrics.securityImprovement}
                    </div>
                    <div className="text-xs text-gray-400 uppercase">
                      Security Improvement
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold uppercase mb-4">
              Ready to Secure Your Organization?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's discuss how we can help protect your critical assets and infrastructure.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyber-red to-dark-red rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyber-red/50 transition-all"
              >
                Request a Security Assessment
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudiesPage

