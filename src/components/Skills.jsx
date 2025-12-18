import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: "⚛️",
      skills: [
        { name: "React", level: 95, description: "Advanced component architecture, hooks, context" },
        { name: "TypeScript", level: 90, description: "Type-safe development, advanced patterns" },
        { name: "JavaScript (ES6+)", level: 95, description: "Modern JS, async/await, modules" },
        { name: "HTML5 & CSS3", level: 90, description: "Semantic markup, modern CSS features" },
        { name: "Tailwind CSS", level: 85, description: "Utility-first styling, responsive design" },
        { name: "Framer Motion", level: 80, description: "Advanced animations, micro-interactions" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: "🔧",
      skills: [
        { name: "Java", level: 90, description: "Spring Boot, REST APIs, microservices" },
        { name: "Python", level: 85, description: "Django, Flask, data processing" },
        { name: "Node.js", level: 80, description: "Express, RESTful services, middleware" },
        { name: "SQL Databases", level: 85, description: "MySQL, PostgreSQL, query optimization" },
        { name: "RESTful APIs", level: 90, description: "API design, authentication, documentation" },
        { name: "GraphQL", level: 75, description: "Schema design, resolvers, Apollo" }
      ]
    },
    design: {
      title: "UI/UX & Design",
      icon: "🎨",
      skills: [
        { name: "Figma", level: 95, description: "Advanced prototyping, design systems" },
        { name: "Design Systems", level: 90, description: "Component libraries, design tokens" },
        { name: "User Experience (UX)", level: 85, description: "User research, journey mapping, wireframing" },
        { name: "User Interface (UI)", level: 90, description: "Visual design, interaction design" },
        { name: "Responsive Design", level: 95, description: "Mobile-first, cross-device optimization" },
        { name: "Prototyping", level: 85, description: "Interactive prototypes, user testing" }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 80, description: "EC2, S3, Lambda, RDS, deployment" },
        { name: "Docker", level: 85, description: "Containerization, multi-stage builds" },
        { name: "CI/CD", level: 75, description: "GitHub Actions, Jenkins, automated deployment" },
        { name: "Git & GitHub", level: 95, description: "Version control, collaboration, workflows" },
        { name: "Linux/Unix", level: 80, description: "Command line, server administration" },
        { name: "Nginx", level: 70, description: "Web server, reverse proxy, load balancing" }
      ]
    },
    tools: {
      title: "Tools & Methodologies",
      icon: "🛠️", 
      skills: [
        { name: "VS Code", level: 95, description: "Advanced usage, extensions, debugging" },
        { name: "Agile/Scrum", level: 85, description: "Sprint planning, stand-ups, retrospectives" },
        { name: "Project Management", level: 80, description: "Jira, Trello, timeline management" },
        { name: "Testing", level: 75, description: "Unit testing, integration testing, TDD" },
        { name: "Performance Optimization", level: 80, description: "Code splitting, lazy loading, caching" },
        { name: "SEO & Accessibility", level: 75, description: "WCAG compliance, semantic HTML, performance" }
      ]
    }
  }

  const categories = Object.keys(skillCategories)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="skills" ref={ref} className="py-24 lg:py-32 relative">
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 lg:mb-24">
            <div className="inline-block px-4 py-2 glass-card text-sm font-mono text-electric-blue mb-6">
              Technical Expertise
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6">
              Skills &
              <br />
              Technologies
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning <span className="text-text-primary font-medium">full-stack development</span>, 
              <span className="text-text-primary font-medium"> UI/UX design</span>, and 
              <span className="text-text-primary font-medium"> cloud technologies</span>
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-electric-blue to-neon-violet text-white shadow-lg shadow-electric-blue/25'
                      : 'glass-card text-text-secondary hover:text-text-primary hover:bg-dark-surface-2/70'
                  }`}
                >
                  <span className="mr-2">{skillCategories[category].icon}</span>
                  {skillCategories[category].title}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-heading font-semibold text-lg text-text-primary group-hover:gradient-text transition-all duration-300">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-sm text-electric-blue">
                    {skill.level}%
                  </span>
                </div>
                
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {skill.description}
                </p>
                
                {/* Skill Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-dark-surface-2 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                      className="h-full bg-gradient-to-r from-electric-blue via-neon-violet to-cyan-highlight rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue via-neon-violet to-cyan-highlight opacity-50 blur-sm"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div variants={itemVariants} className="mt-16 lg:mt-24">
            <div className="glass-card p-8 lg:p-12 text-center">
              <h3 className="font-heading font-bold text-2xl lg:text-3xl gradient-text mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-text-secondary text-lg mb-6">
                Passionate about staying current with emerging technologies and design trends. 
                Currently exploring AI/ML integration and advanced animation techniques.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['Next.js', 'Three.js', 'WebGL', 'AI/ML', 'Blockchain', 'AR/VR'].map((tech) => (
                  <span key={tech} className="px-3 py-1 glass-card text-sm text-cyan-highlight font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills