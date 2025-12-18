import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const experiences = [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "InferAI",
      period: "2023 - Present",
      type: "Full-Time",
      location: "Remote",
      description: "Leading full-stack development of AI-powered applications using React, Java, and cloud technologies. Collaborating with cross-functional teams to deliver scalable enterprise solutions.",
      achievements: [
        "Architected and developed 3+ production-ready AI applications",
        "Improved application performance by 40% through optimization", 
        "Led UI/UX design initiatives for better user experience"
      ],
      technologies: ["React", "Java", "AWS", "Python", "Docker"]
    },
    {
      id: 2,
      role: "Junior Software Engineer", 
      company: "Infer Solutions",
      period: "2022 - 2023",
      type: "Full-Time",
      location: "Hybrid",
      description: "Developed and maintained enterprise web applications while transitioning into UI/UX design. Gained expertise in modern frontend frameworks and design systems.",
      achievements: [
        "Delivered 5+ corporate websites from design to deployment",
        "Collaborated with clients to understand design requirements",
        "Established design system and component library"
      ],
      technologies: ["React", "TypeScript", "Figma", "Node.js", "MySQL"]
    },
    {
      id: 3,
      role: "Software Engineering Intern",
      company: "Infer Solutions", 
      period: "2021 - 2022",
      type: "Internship",
      location: "On-site",
      description: "Started my journey in software development, learning full-stack technologies and contributing to real-world projects under senior developer mentorship.",
      achievements: [
        "Built responsive web applications using modern frameworks",
        "Gained proficiency in agile development methodologies",
        "Contributed to open-source internal tools"
      ],
      technologies: ["JavaScript", "HTML/CSS", "Java", "Spring Boot", "Git"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="experience" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-24">
            <div className="inline-block px-4 py-2 glass-card text-sm font-mono text-electric-blue mb-6">
              Professional Journey
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">
              Experience
              <br />
              Timeline
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              My professional growth from <span className="text-text-primary font-medium">software engineering intern</span> to 
              <span className="text-text-primary font-medium"> full-stack developer</span> and 
              <span className="text-text-primary font-medium"> UI/UX designer</span>
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric-blue via-neon-violet to-cyan-highlight opacity-30"></div>
            
            <div className="space-y-12 lg:space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                      className="w-4 h-4 bg-gradient-to-r from-electric-blue to-neon-violet rounded-full shadow-lg shadow-electric-blue/30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-violet rounded-full animate-ping opacity-20"></div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1">
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      className="glass-card p-6 lg:p-8 group cursor-pointer"
                    >
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="font-heading font-bold text-xl lg:text-2xl text-text-primary group-hover:gradient-text transition-all duration-300">
                            {exp.role}
                          </h3>
                          <div className="flex items-center space-x-3 mt-1">
                            <span className="text-lg font-medium gradient-text">{exp.company}</span>
                            <span className="px-2 py-1 bg-electric-blue/10 text-electric-blue rounded text-xs font-mono">
                              {exp.type}
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-right mt-2 lg:mt-0">
                          <div className="font-mono text-text-secondary">{exp.period}</div>
                          <div className="text-sm text-text-secondary">{exp.location}</div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-text-secondary leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-medium text-text-primary mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-3 text-text-secondary">
                              <svg className="w-5 h-5 text-electric-blue mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-text-primary mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-neon-violet/10 text-neon-violet rounded-full text-sm font-mono">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience