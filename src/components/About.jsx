import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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

  const stats = [
    { number: "2+", label: "Years Full Stack Development" },
    { number: "4+", label: "Months UI/UX Design Focus" },
    { number: "10+", label: "Corporate Projects Delivered" },
    { number: "100%", label: "Client Satisfaction Rate" }
  ]

  return (
    <section ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Content */}
          <div>
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-block px-4 py-2 glass-card text-sm font-mono text-electric-blue mb-6">
                About Me
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">
                Design-Engineer
                <br />
                Hybrid
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6 text-text-secondary leading-relaxed">
              <p className="text-lg">
                I'm a passionate <span className="text-text-primary font-medium">Software Engineer</span> with 
                a deep love for <span className="text-text-primary font-medium">UI/UX design</span> and 
                <span className="text-text-primary font-medium"> digital product creation</span>. 
                My unique perspective combines technical precision with design excellence.
              </p>
              
              <p className="text-lg">
                With <span className="gradient-text font-medium">2+ years of full-stack development</span> and 
                <span className="gradient-text font-medium"> 4+ months of focused design work</span>, 
                I bridge the gap between beautiful interfaces and robust, scalable code.
              </p>
              
              <p className="text-lg">
                I specialize in creating <span className="text-text-primary font-medium">corporate websites</span>, 
                <span className="text-text-primary font-medium"> AI product interfaces</span>, and 
                <span className="text-text-primary font-medium"> enterprise-grade applications</span> that 
                prioritize both user experience and technical performance.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-6">Key Strengths</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: "🎨", title: "UI/UX Design", desc: "Figma, Design Systems" },
                  { icon: "⚛️", title: "Frontend Development", desc: "React, TypeScript" },
                  { icon: "🏗️", title: "Full Stack", desc: "Java, Python, AWS" },
                  { icon: "🚀", title: "Product Thinking", desc: "User-Centric Solutions" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card p-4 cursor-pointer group"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-medium text-text-primary">{item.title}</h4>
                        <p className="text-sm text-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Stats */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass-card p-8 lg:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-blue/10 to-neon-violet/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-highlight/10 to-electric-blue/10 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <h3 className="font-heading font-semibold text-2xl gradient-text mb-8">
                  By the Numbers
                </h3>
                
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                      className="text-center"
                    >
                      <div className="font-heading font-bold text-3xl lg:text-4xl gradient-text mb-2">
                        {stat.number}
                      </div>
                      <div className="text-sm text-text-secondary leading-snug">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mt-8 pt-8 border-t border-dark-surface-2/50"
                >
                  <p className="text-text-secondary text-center italic">
                    "Passionate about creating digital experiences that users love and developers can maintain."
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About