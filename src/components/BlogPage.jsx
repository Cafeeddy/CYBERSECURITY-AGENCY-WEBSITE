import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Case Study: Breaching a \'Secure\' Corporate Network',
      excerpt: 'A detailed walkthrough of how we discovered critical vulnerabilities in what appeared to be a well-hardened corporate network. This case study demonstrates our methodology, the vulnerabilities we found, and how we helped the client remediate them.',
      content: `
        <h2>The Challenge</h2>
        <p>A Fortune 500 company approached us with concerns about their network security. They had implemented multiple security layers, including firewalls, intrusion detection systems, and regular security audits. However, they wanted an independent assessment to ensure their defenses were truly effective.</p>
        
        <h2>Our Approach</h2>
        <p>We conducted a comprehensive penetration test that included:</p>
        <ul>
          <li>External network reconnaissance</li>
          <li>Social engineering assessment</li>
          <li>Web application security testing</li>
          <li>Internal network penetration testing</li>
          <li>Physical security evaluation</li>
        </ul>
        
        <h2>Key Findings</h2>
        <p>Despite their robust security measures, we discovered several critical vulnerabilities:</p>
        <ul>
          <li>Misconfigured firewall rules exposing internal services</li>
          <li>Weak authentication mechanisms on critical systems</li>
          <li>Unpatched software on key infrastructure components</li>
          <li>Insufficient network segmentation allowing lateral movement</li>
        </ul>
        
        <h2>The Results</h2>
        <p>Within 48 hours of our report, the client had remediated all critical vulnerabilities. We provided detailed remediation guidance and worked with their IT team to implement additional security controls. The client has since engaged us for ongoing security assessments and managed security services.</p>
      `,
      date: '2024-01-15',
      category: 'Case Study',
      readTime: '8 min read',
      author: 'Security Team'
    },
    {
      id: 2,
      title: 'The Top 5 Vulnerabilities We Found in 2024',
      excerpt: 'An analysis of the most common and critical security flaws our penetration testing team discovered this year. Understanding these patterns can help organizations prioritize their security efforts.',
      content: `
        <h2>Introduction</h2>
        <p>After conducting hundreds of penetration tests and security assessments in 2024, we've identified the most prevalent vulnerabilities across different industries. This analysis helps organizations understand where to focus their security efforts.</p>
        
        <h2>1. Misconfigured Cloud Services</h2>
        <p>The most common issue we found was misconfigured cloud services, particularly in AWS, Azure, and GCP. Common mistakes included:</p>
        <ul>
          <li>Publicly accessible S3 buckets with sensitive data</li>
          <li>Overly permissive IAM policies</li>
          <li>Unencrypted data at rest</li>
          <li>Missing security groups and network ACLs</li>
        </ul>
        
        <h2>2. Inadequate Authentication Mechanisms</h2>
        <p>Many organizations still rely on weak authentication:</p>
        <ul>
          <li>Default or weak passwords</li>
          <li>Missing multi-factor authentication (MFA)</li>
          <li>Insufficient password complexity requirements</li>
          <li>Session management vulnerabilities</li>
        </ul>
        
        <h2>3. Unpatched Software and Systems</h2>
        <p>Outdated software remains a significant security risk. We frequently found:</p>
        <ul>
          <li>Unpatched operating systems</li>
          <li>Outdated web application frameworks</li>
          <li>Known vulnerabilities in third-party libraries</li>
          <li>End-of-life software still in production</li>
        </ul>
        
        <h2>4. Insecure API Implementations</h2>
        <p>As APIs become more prevalent, security issues are increasing:</p>
        <ul>
          <li>Missing authentication and authorization</li>
          <li>Insufficient rate limiting</li>
          <li>Insecure data transmission</li>
          <li>Inadequate input validation</li>
        </ul>
        
        <h2>5. Insufficient Network Segmentation</h2>
        <p>Many networks lack proper segmentation, allowing attackers to move laterally:</p>
        <ul>
          <li>Flat network architectures</li>
          <li>Missing VLAN segregation</li>
          <li>Inadequate firewall rules</li>
          <li>Weak access controls between network zones</li>
        </ul>
        
        <h2>Recommendations</h2>
        <p>To address these common vulnerabilities, we recommend:</p>
        <ul>
          <li>Regular security assessments and penetration testing</li>
          <li>Implementation of a patch management program</li>
          <li>Cloud security configuration reviews</li>
          <li>Network segmentation and access control improvements</li>
          <li>Security awareness training for development teams</li>
        </ul>
      `,
      date: '2024-01-10',
      category: 'Research',
      readTime: '6 min read',
      author: 'Security Research Team'
    },
    {
      id: 3,
      title: 'Why Your AI Model is at Risk of \'Data Poisoning\'',
      excerpt: 'Understanding how attackers can manipulate training data to compromise AI systems and what you can do to protect against it. As AI becomes more prevalent, securing AI systems is critical.',
      content: `
        <h2>Introduction</h2>
        <p>As artificial intelligence and machine learning models become integral to business operations, they also become attractive targets for attackers. Data poisoning is one of the most insidious threats facing AI systems today.</p>
        
        <h2>What is Data Poisoning?</h2>
        <p>Data poisoning is a technique where attackers manipulate the training data used to build AI models. By introducing malicious or corrupted data into the training dataset, attackers can cause the model to:</p>
        <ul>
          <li>Make incorrect predictions or classifications</li>
          <li>Fail in specific scenarios controlled by the attacker</li>
          <li>Leak sensitive information from the training data</li>
          <li>Perform poorly on certain inputs while maintaining overall accuracy</li>
        </ul>
        
        <h2>How Data Poisoning Works</h2>
        <p>There are several methods attackers use to poison AI models:</p>
        
        <h3>1. Backdoor Attacks</h3>
        <p>Attackers insert a "trigger" pattern into training data that causes the model to misclassify inputs containing that pattern. For example, an image classifier might be trained to recognize a specific watermark as a different class.</p>
        
        <h3>2. Label Flipping</h3>
        <p>Attackers change the labels of training data, causing the model to learn incorrect associations. This is particularly effective when attackers have access to the training process.</p>
        
        <h3>3. Adversarial Examples in Training</h3>
        <p>By including carefully crafted adversarial examples in the training data, attackers can create models that are more vulnerable to adversarial attacks during deployment.</p>
        
        <h2>Real-World Impact</h2>
        <p>Data poisoning attacks can have serious consequences:</p>
        <ul>
          <li><strong>Security Systems:</strong> Compromised facial recognition or intrusion detection systems</li>
          <li><strong>Financial Services:</strong> Fraud detection models that miss specific attack patterns</li>
          <li><strong>Healthcare:</strong> Diagnostic models that fail for certain patient groups</li>
          <li><strong>Autonomous Systems:</strong> Self-driving cars or drones that behave incorrectly in specific scenarios</li>
        </ul>
        
        <h2>Protection Strategies</h2>
        <p>Protecting against data poisoning requires a multi-layered approach:</p>
        
        <h3>1. Data Validation and Sanitization</h3>
        <p>Implement strict data validation processes to detect and remove potentially malicious training data before it enters your pipeline.</p>
        
        <h3>2. Secure Data Sources</h3>
        <p>Only use trusted data sources and implement access controls to prevent unauthorized modifications to training datasets.</p>
        
        <h3>3. Model Verification</h3>
        <p>Regularly test your models for unexpected behaviors, especially on edge cases and adversarial inputs.</p>
        
        <h3>4. Differential Privacy</h3>
        <p>Use techniques like differential privacy to make models more robust to training data manipulation.</p>
        
        <h3>5. Red Team Testing</h3>
        <p>Conduct regular red team exercises to test your AI systems against various attack scenarios, including data poisoning.</p>
        
        <h2>Conclusion</h2>
        <p>As AI systems become more critical to business operations, securing them against data poisoning and other attacks is essential. Organizations must implement comprehensive security measures throughout the AI development lifecycle, from data collection to model deployment.</p>
        
        <p>At Aegis Cyber Defense, we offer specialized AI security services, including model auditing, red team testing, and adversarial defense strategies. Contact us to learn how we can help secure your AI systems.</p>
      `,
      date: '2024-01-05',
      category: 'AI Security',
      readTime: '10 min read',
      author: 'AI Security Team'
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
            Threat Intelligence <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, research, and real-world case studies from our security operations.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="glass-card p-6 h-full relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/10 to-dark-red/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-cyber-red uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </span>
                  </div>

                  <h2 className="text-xl font-heading font-bold uppercase mb-3 group-hover:text-cyber-red transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500 font-mono">
                        {post.readTime}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs text-gray-500">
                        {post.author}
                      </span>
                    </div>
                    <span className="text-sm text-cyber-red font-medium flex items-center space-x-2">
                      <span>Read More</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Full Article Content (Expandable or on separate pages) */}
        {blogPosts.map((post) => (
          <motion.div
            key={`content-${post.id}`}
            id={`post-${post.id}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 mb-8 hidden"
          >
            <div className="mb-6">
              <span className="text-xs font-mono text-cyber-red uppercase tracking-wider">
                {post.category}
              </span>
              <h2 className="text-4xl font-heading font-bold uppercase mt-2 mb-4">
                {post.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
                <span>•</span>
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.author}</span>
              </div>
            </div>
            <div 
              className="prose prose-invert max-w-none text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        ))}

        {/* Newsletter Signup or CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-bold uppercase mb-4">
              Stay Informed
            </h3>
            <p className="text-gray-400 mb-6">
              Subscribe to our threat intelligence newsletter for the latest security insights and research.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyber-red to-dark-red rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-cyber-red/50 transition-all"
              >
                Contact Us to Subscribe
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPage

