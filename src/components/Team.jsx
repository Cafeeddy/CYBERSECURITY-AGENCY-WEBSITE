import { motion } from 'framer-motion'

const teamMembers = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Lead Security Architect & Founder',
    specialty: 'Cybersecurity & Penetration Testing',
    credentials: ['OSCP', 'CISSP', 'CEH'],
    bio: 'Placeholder for bio...',
    image: '👨‍💻',
    links: {
      github: '#',
      linkedin: '#',
      blog: '#',
      hackthebox: '#'
    }
  },
  {
    id: 2,
    name: 'Lead Engineer',
    role: 'Senior Security Engineer',
    specialty: 'Cloud Security & DevSecOps',
    credentials: ['AWS Security', 'Kubernetes Security', 'CISSP'],
    bio: 'Placeholder for bio...',
    image: '👨‍💻',
    links: {
      github: '#',
      linkedin: '#',
      blog: '#'
    }
  },
  {
    id: 3,
    name: 'Head of Operations',
    role: 'Head of Operations',
    specialty: 'Security Operations & Incident Response',
    credentials: ['GCIH', 'GCFA', 'Security+'],
    bio: 'Placeholder for bio...',
    image: '👩‍💼',
    links: {
      github: '#',
      linkedin: '#',
      blog: '#'
    }
  },
]
const Team = () => {
  return (
    <section id="team" className="py-24 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-4">
            The Leadership <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            World-class security professionals with decades of combined experience 
            in cyber operations, penetration testing, and threat intelligence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 relative overflow-hidden group"
            >
              {/* Background Blur Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-red/10 to-dark-red/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              
              <div className="relative z-10">
                {/* Avatar */}
                <div className="text-6xl mb-4 text-center">{member.image}</div>

                {/* Name & Role */}
                <h3 className="text-xl font-heading font-bold uppercase text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-cyber-red text-center mb-2 font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-gray-400 text-center mb-4">
                  {member.specialty}
                </p>

                {/* Bio */}
                {member.bio && (
                  <p className="text-xs text-gray-500 text-center mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                )}

                {/* Credentials */}
                <div className="space-y-1 pt-4 border-t border-white/10 mb-4">
                  {member.credentials.map((cred, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-gray-500 font-mono text-center"
                    >
                      {cred}
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                {member.links && (
                  <div className="flex items-center justify-center space-x-4 pt-4 border-t border-white/10">
                    {member.links.github && (
                      <a
                        href={member.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-red transition-colors"
                        aria-label="GitHub"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a
                        href={member.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-red transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                    {member.links.blog && (
                      <a
                        href={member.links.blog}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-red transition-colors"
                        aria-label="Blog"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                        </svg>
                      </a>
                    )}
                    {member.links.hackthebox && (
                      <a
                        href={member.links.hackthebox}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyber-red transition-colors"
                        aria-label="Hack The Box"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l8 4v8.64l-8 4-8-4V8.18l8-4z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

