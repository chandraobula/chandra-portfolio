import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary gradient */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 via-neon-violet/20 to-cyan-highlight/20 bg-[length:200%_200%]"
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-8xl mx-auto px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-block px-4 py-2 glass-card text-sm font-mono text-electric-blue mb-6">
            Available for full-time opportunities
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-heading font-bold text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight"
        >
          <span className="gradient-text text-shadow-glow">
            Theegala Chandra
          </span>
          <br />
          <span className="gradient-text text-shadow-glow">
            Obula Reddy
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-xl md:text-2xl text-text-secondary mb-4 font-medium">
            Software Engineer • UI/UX Designer • Web & Product Designer
          </div>
          <div className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Designing and engineering scalable digital experiences that bridge 
            <span className="gradient-text font-medium"> beautiful interfaces</span> with 
            <span className="gradient-text font-medium"> robust code</span>
          </div>
        </motion.div>

        {/* CTA Section - Applies Fitts's Law: larger targets, Golden Ratio spacing */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-16"
        >
          {/* Primary CTA - 61.8% visual weight (Golden Ratio) */}
          <motion.a
            href="#showcases"
            whileHover={{ 
              scale: 1.02, // Subtle scale - not distracting
              boxShadow: "0 24px 48px rgba(79, 156, 255, 0.25)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative"
          >
            {/* Button follows Fitts's Law: 48px minimum height, generous padding */}
            <div className="px-12 py-6 bg-gradient-to-r from-electric-blue to-neon-violet text-white font-medium rounded-xl transition-all duration-300 flex items-center min-h-[48px] text-lg">
              <span>View My Work</span>
              <motion.svg 
                className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </div>
          </motion.a>

          {/* Secondary CTA - 38.2% visual weight (Golden Ratio complement) */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.02,
              backgroundColor: "rgba(18, 24, 38, 0.8)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group"
          >
            {/* Secondary button - same height for consistency, less visual weight */}
            <div className="px-10 py-6 glass-card text-text-primary font-medium rounded-xl transition-all duration-300 flex items-center min-h-[48px] border-electric-blue/20 hover:border-electric-blue/40">
              <span>Download Resume</span>
              <motion.svg 
                className="w-5 h-5 ml-3 group-hover:translate-y-1 transition-transform"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </motion.svg>
            </div>
          </motion.a>
        </motion.div>


      </motion.div>

      {/* Mouse follower effect */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-30 mix-blend-screen"
        animate={{
          x: mousePosition.x - 250,
          y: mousePosition.y - 250,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        <div className="w-[500px] h-[500px] bg-gradient-radial from-electric-blue/5 via-neon-violet/5 to-transparent rounded-full blur-xl" />
      </motion.div>
    </section>
  )
}

export default Hero