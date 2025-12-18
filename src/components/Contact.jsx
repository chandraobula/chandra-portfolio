import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "chandraobulareddy@gmail.com",
      href: "mailto:chandraobulareddy@gmail.com",
      color: "text-electric-blue"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/chandraobulareddy",
      color: "text-neon-violet"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: "GitHub",
      value: "View my code",
      href: "https://github.com/chandraobulareddy",
      color: "text-cyan-highlight"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-24">
            <div className="inline-block px-4 py-2 glass-card text-sm font-mono text-electric-blue mb-6">
              Get In Touch
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">
              Let's Design & Build
              <br />
              Something Remarkable
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's collaborate on creating 
              <span className="text-text-primary font-medium"> exceptional digital experiences</span> that 
              <span className="text-text-primary font-medium"> users love</span> and 
              <span className="text-text-primary font-medium"> businesses thrive on</span>
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card p-8 lg:p-10">
                <h3 className="font-heading font-bold text-2xl gradient-text mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass-card border border-dark-surface-2/50 rounded-lg focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none transition-all duration-300 text-text-primary placeholder-text-secondary"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass-card border border-dark-surface-2/50 rounded-lg focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none transition-all duration-300 text-text-primary placeholder-text-secondary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 glass-card border border-dark-surface-2/50 rounded-lg focus:border-electric-blue focus:ring-1 focus:ring-electric-blue focus:outline-none transition-all duration-300 text-text-primary placeholder-text-secondary resize-none"
                      placeholder="Tell me about your project, goals, or just say hello! I'd love to hear from you."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </motion.button>
                  
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-400 text-sm"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Methods */}
              <div>
                <h3 className="font-heading font-bold text-2xl gradient-text mb-6">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      whileHover={{ x: 4, scale: 1.01 }}
                      className="flex items-center space-x-4 glass-card p-4 group transition-all duration-300 hover:bg-dark-surface-2/70"
                    >
                      <div className={`${method.color} group-hover:scale-110 transition-transform`}>
                        {method.icon}
                      </div>
                      <div>
                        <div className="font-medium text-text-primary group-hover:gradient-text transition-all duration-300">
                          {method.label}
                        </div>
                        <div className="text-text-secondary text-sm">
                          {method.value}
                        </div>
                      </div>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="glass-card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium text-text-primary">Available for Work</span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Currently accepting new projects and full-time opportunities. 
                  Specializing in full-stack development, UI/UX design, and digital product creation.
                </p>
              </div>

              {/* Response Time */}
              <div className="glass-card p-6">
                <h4 className="font-medium text-text-primary mb-3">Response Time</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Email</span>
                    <span className="text-electric-blue font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Project Inquiries</span>
                    <span className="text-electric-blue font-medium">Within 48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Collaboration</span>
                    <span className="text-electric-blue font-medium">Let's schedule a call</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16 lg:mt-24">
            <div className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
              <h3 className="font-heading font-bold text-2xl lg:text-3xl gradient-text mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-text-secondary text-lg mb-8">
                Whether you need a full-stack developer, UI/UX designer, or someone who can bridge both worlds, 
                I'm here to help bring your vision to life with cutting-edge technology and user-centered design.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="mailto:chandraobulareddy@gmail.com?subject=Project Inquiry"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Start a Project
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Download Resume
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer 
        variants={itemVariants}
        className="mt-24 pt-12 border-t border-dark-surface-2/30"
      >
        <div className="max-w-8xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-text-secondary text-sm mb-4 md:mb-0">
              © 2024 Theegala Chandra Obula Reddy. Crafted with passion and precision.
            </div>
            <div className="flex space-x-6">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-text-secondary hover:text-text-primary transition-colors"
                >
                  {method.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.footer>
    </section>
  )
}

export default Contact