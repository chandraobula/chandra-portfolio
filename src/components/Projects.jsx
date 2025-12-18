import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: "AI-Powered Analytics Dashboard",
      category: "Full Stack + AI",
      description: "Enterprise analytics platform with machine learning insights, real-time data processing, and interactive visualizations. Built with microservices architecture for scalability.",
      problem: "Complex data analysis was time-consuming and required manual interpretation",
      solution: "Automated insights generation with ML algorithms and intuitive dashboard interface",
      impact: "Reduced analysis time by 75% and improved decision-making accuracy by 40%",
      technologies: ["React", "Python", "TensorFlow", "Docker", "AWS", "PostgreSQL"],
      github: "https://github.com/chandra/ai-analytics",
      demo: "https://demo-analytics.chandraobulareddy.com",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "E-Commerce Platform with Microservices",
      category: "Full Stack", 
      description: "Scalable e-commerce solution with separate services for user management, product catalog, payment processing, and order fulfillment. Includes admin dashboard and mobile-responsive storefront.",
      problem: "Monolithic architecture limiting scalability and deployment flexibility",
      solution: "Microservices architecture with API gateway and service mesh",
      impact: "Improved system reliability by 60% and deployment speed by 80%",
      technologies: ["React", "Java Spring Boot", "Docker", "Kubernetes", "Redis", "MySQL"],
      github: "https://github.com/chandra/ecommerce-microservices", 
      demo: "https://demo-store.chandraobulareddy.com",
      featured: true,
      year: "2023"
    },
    {
      id: 3,
      title: "Real-Time Collaboration Tool",
      category: "Full Stack",
      description: "Team collaboration platform with real-time editing, video calls, file sharing, and project management features. Optimized for remote work scenarios.",
      problem: "Team coordination across time zones with existing tools was inefficient",
      solution: "Unified platform with real-time synchronization and seamless UX",
      impact: "Increased team productivity by 45% and reduced meeting overhead by 30%",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB", "AWS S3"],
      github: "https://github.com/chandra/collab-platform",
      demo: "https://demo-collab.chandraobulareddy.com",
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "Smart IoT Device Manager",
      category: "IoT + Backend",
      description: "IoT device management system with real-time monitoring, automated alerts, and predictive maintenance. Handles thousands of concurrent device connections.",
      problem: "Manual device monitoring was reactive and led to unexpected downtime",
      solution: "Proactive monitoring with ML-based predictive maintenance alerts",
      impact: "Reduced device downtime by 70% and maintenance costs by 50%",
      technologies: ["Python", "MQTT", "InfluxDB", "Grafana", "Docker", "AWS IoT"],
      github: "https://github.com/chandra/iot-manager",
      demo: null,
      featured: false,
      year: "2022"
    },
    {
      id: 5,
      title: "Automated Testing Framework",
      category: "DevOps + Automation",
      description: "Comprehensive testing automation framework supporting unit, integration, and E2E testing with CI/CD pipeline integration and detailed reporting.",
      problem: "Manual testing processes were slow and error-prone",
      solution: "Automated testing pipeline with intelligent test selection and reporting",
      impact: "Reduced testing time by 85% and bug detection improved by 60%",
      technologies: ["Python", "Selenium", "Jest", "Docker", "Jenkins", "Allure"],
      github: "https://github.com/chandra/test-automation",
      demo: null,
      featured: false,
      year: "2022"
    },
    {
      id: 6,
      title: "Design System & Component Library",
      category: "Frontend + Design",
      description: "Comprehensive design system with reusable React components, design tokens, documentation site, and Figma integration for consistent product experiences.",
      problem: "Inconsistent UI components across products leading to poor UX",
      solution: "Unified design system with automated documentation and testing",
      impact: "Improved development speed by 50% and design consistency by 90%",
      technologies: ["React", "TypeScript", "Storybook", "Figma", "CSS-in-JS", "Jest"],
      github: "https://github.com/chandra/design-system",
      demo: "https://design-system.chandraobulareddy.com",
      featured: false,
      year: "2024"
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

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
    <section id="projects" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-24">
            <div className="inline-block px-4 py-2 glass-card text-sm font-mono text-electric-blue mb-6">
              Engineering Projects
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">
              Featured
              <br />
              Projects
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Engineering solutions that solve real problems through <span className="text-text-primary font-medium">innovative technology</span>, 
              <span className="text-text-primary font-medium"> scalable architecture</span>, and 
              <span className="text-text-primary font-medium"> user-centered design</span>
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-16 lg:mb-24">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group cursor-pointer"
                >
                  <div className="glass-card p-8 lg:p-10 h-full relative overflow-hidden">
                    {/* Featured badge */}
                    <div className="absolute top-6 right-6">
                      <span className="px-3 py-1 bg-gradient-to-r from-electric-blue to-neon-violet text-white text-xs font-mono rounded-full">
                        Featured
                      </span>
                    </div>

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
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-3 py-1 glass-card text-sm font-mono text-neon-violet">
                            {project.category}
                          </span>
                          <span className="text-text-secondary text-sm font-mono">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="font-heading font-bold text-2xl lg:text-3xl text-text-primary group-hover:gradient-text transition-all duration-300 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Case Study Details */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-medium text-text-primary text-sm mb-1">Problem</h4>
                          <p className="text-text-secondary text-sm">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-text-primary text-sm mb-1">Solution</h4>
                          <p className="text-text-secondary text-sm">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-text-primary text-sm mb-1">Impact</h4>
                          <p className="text-text-secondary text-sm gradient-text font-medium">{project.impact}</p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="font-medium text-text-primary text-sm mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-electric-blue/10 text-electric-blue rounded text-xs font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Links */}
                      <div className="flex space-x-4">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          <span className="text-sm">Code</span>
                        </motion.a>
                        
                        {project.demo && (
                          <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-2 text-electric-blue hover:text-cyan-highlight transition-colors"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <span className="text-sm font-medium">Live Demo</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Projects Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="font-heading font-bold text-2xl lg:text-3xl gradient-text mb-8 text-center">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card p-6 group cursor-pointer h-full"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 glass-card text-xs font-mono text-neon-violet">
                      {project.category}
                    </span>
                    <span className="text-text-secondary text-xs font-mono">
                      {project.year}
                    </span>
                  </div>
                  
                  <h4 className="font-heading font-semibold text-lg text-text-primary group-hover:gradient-text transition-all duration-300 mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-text-secondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-electric-blue/10 text-electric-blue rounded text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-dark-surface-2/50 text-text-secondary rounded text-xs font-mono">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-3 mt-auto">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-text-secondary hover:text-text-primary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </motion.a>
                    
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="text-electric-blue hover:text-cyan-highlight transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects