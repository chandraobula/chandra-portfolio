import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const WebShowcases = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: "GlobalTekForce",
      url: "https://www.globaltekforce.com/",
      role: "UI/UX Design, Web Design",
      tools: ["Figma", "Responsive Design", "Corporate Branding"],
      focus: "Corporate branding, trust, clarity",
      description: "Enterprise-grade corporate website focusing on technological excellence and client trust.",
      image: "/api/placeholder/600/400",
      tags: ["Corporate", "B2B", "Enterprise"],
      year: "2024"
    },
    {
      id: 2,
      name: "Bonifore",
      url: "https://bonifore.com/",
      role: "UI/UX Design, Web Design", 
      tools: ["Figma", "User Research", "Prototyping"],
      focus: "Modern web experience, user engagement",
      description: "Contemporary business website with focus on user experience and conversion optimization.",
      image: "/api/placeholder/600/400",
      tags: ["Modern", "UX", "Conversion"],
      year: "2024"
    },
    {
      id: 3,
      name: "InferSol",
      url: "https://infersol.com/",
      role: "UI/UX & Web Experience Design",
      tools: ["Figma", "Design Systems", "Brand Identity"],
      focus: "Product-centric tech branding",
      description: "Technology solutions platform with emphasis on product showcase and technical credibility.",
      image: "/api/placeholder/600/400", 
      tags: ["Tech", "Product", "Solutions"],
      year: "2024"
    },
    {
      id: 4,
      name: "InferLabs AI",
      url: "https://inferlabs.ai/",
      role: "UI/UX, AI Product Website Design",
      tools: ["Figma", "AI/ML Design", "Interactive Prototypes"],
      focus: "Modern AI aesthetics and storytelling",
      description: "Cutting-edge AI platform website featuring modern design principles and intelligent user flows.",
      image: "/api/placeholder/600/400",
      tags: ["AI/ML", "Innovation", "Future-Tech"],
      year: "2024"
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
    <section id="showcases" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-24">
            <div className="inline-block px-4 py-2 glass-card text-sm font-mono text-electric-blue mb-6">
              Web Design & UI/UX Showcases
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">
              Real-World
              <br />
              Corporate Projects
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Production websites designed and delivered for corporate clients, 
              focusing on <span className="text-text-primary font-medium">usability</span>, 
              <span className="text-text-primary font-medium"> branding</span>, and 
              <span className="text-text-primary font-medium"> performance</span>
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group cursor-pointer"
              >
                <div className="glass-card p-6 lg:p-8 h-full relative overflow-hidden">
                  {/* Background glow effect */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 0.1 : 0,
                      scale: hoveredProject === project.id ? 1.2 : 0.8
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-electric-blue via-neon-violet to-cyan-highlight blur-3xl"
                  />

                  <div className="relative z-10">
                    {/* Project Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-heading font-bold text-2xl text-text-primary group-hover:gradient-text transition-all duration-300">
                            {project.name}
                          </h3>
                          <span className="px-2 py-1 glass-card text-xs font-mono text-electric-blue">
                            {project.year}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-dark-surface-2/50 rounded-full text-xs text-text-secondary">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <motion.a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 glass-card text-electric-blue hover:text-cyan-highlight transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    </div>

                    {/* Project Image Placeholder */}
                    <div className="relative mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-dark-surface-2 to-dark-surface border border-dark-surface-2/50">
                      <div className="aspect-video flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-electric-blue to-neon-violet rounded-xl flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                            </svg>
                          </div>
                          <p className="text-text-secondary text-sm font-mono">
                            {project.name} Preview
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                        className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-transparent to-transparent flex items-end justify-center pb-6"
                      >
                        <span className="btn-primary text-sm">
                          Visit Website →
                        </span>
                      </motion.div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <p className="text-text-secondary leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-medium text-text-primary mb-1">Role</h4>
                          <p className="text-text-secondary">{project.role}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-text-primary mb-1">Focus</h4>
                          <p className="text-text-secondary">{project.focus}</p>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium text-text-primary mb-2 text-sm">Tools & Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span key={tool} className="px-2 py-1 bg-electric-blue/10 text-electric-blue rounded text-xs font-mono">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16 lg:mt-24"
          >
            <div className="glass-card p-8 lg:p-12 max-w-3xl mx-auto">
              <h3 className="font-heading font-bold text-2xl lg:text-3xl gradient-text mb-4">
                Ready to Create Something Amazing?
              </h3>
              <p className="text-text-secondary mb-8 text-lg">
                Let's collaborate on your next web design project and create experiences that drive results.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Start a Project
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default WebShowcases