import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ThreatIntelBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Case Study: Breaching a \'Secure\' Corporate Network',
      excerpt: 'A detailed walkthrough of how we discovered critical vulnerabilities in what appeared to be a well-hardened corporate network.',
      date: '2024-01-15',
      category: 'Case Study',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'The Top 5 Vulnerabilities We Found in 2024',
      excerpt: 'An analysis of the most common and critical security flaws our penetration testing team discovered this year.',
      date: '2024-01-10',
      category: 'Research',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Why Your AI Model is at Risk of \'Data Poisoning\'',
      excerpt: 'Understanding how attackers can manipulate training data to compromise AI systems and what you can do to protect against it.',
      date: '2024-01-05',
      category: 'AI Security',
      readTime: '10 min read'
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
            From Our <span className="text-gradient">Threat-Intel Blog</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, research, and real-world case studies from our security operations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Link to={`/blog#${post.id}`}>
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

                    <h3 className="text-xl font-heading font-bold uppercase mb-3 group-hover:text-cyber-red transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 font-mono">
                        {post.readTime}
                      </span>
                      <span className="text-sm text-cyber-red font-medium flex items-center space-x-2">
                        <span>Read More</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-lg font-semibold text-lg border border-cyber-red/50 hover:border-cyber-red transition-all"
            >
              View All Articles
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ThreatIntelBlog

