import { motion } from "framer-motion";

const Hero = () => {
  // Sequential animation variants - minimal and purposeful
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94], // Ease-out curve
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-start overflow-hidden"
    >
      {/* Clean background - no distractions */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* Content container with golden ratio proportions */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full"
        style={{ paddingTop: '20vh' }} // Golden ratio vertical positioning
      >
        {/* Main headline - typography leads */}
        <motion.h1
          variants={textVariants}
          className="font-sans font-bold tracking-tight leading-[0.9] mb-8"
          style={{
            fontSize: 'clamp(3.5rem, 8vw, 6rem)', // Responsive but controlled
            letterSpacing: '-0.02em',
          }}
        >
          <div className="text-white">
            Theegala Chandra
          </div>
          <div className="text-white">
            Obula Reddy
          </div>
        </motion.h1>

        {/* Role subtitle - clear hierarchy */}
        <motion.div
          variants={textVariants}
          className="mb-12 max-w-2xl"
        >
          <div 
            className="text-text-secondary font-medium leading-relaxed mb-6"
            style={{ fontSize: '1.25rem' }}
          >
            Software Engineer • UI/UX Designer
          </div>
          
          {/* Brief description - editorial style */}
          <div 
            className="text-text-secondary/80 leading-relaxed max-w-xl"
            style={{ fontSize: '1.1rem', lineHeight: '1.6' }}
          >
            Designing and building scalable digital experiences with 
            thoughtful interfaces and clean code.
          </div>
        </motion.div>

        {/* Single CTA - Fitts's Law compliant */}
        <motion.div
          variants={textVariants}
          className="mt-16"
        >
          <motion.a
            href="#showcases"
            whileHover={{ 
              backgroundColor: "rgba(79, 156, 255, 0.9)",
              transition: { duration: 0.2 }
            }}
            className="inline-flex items-center px-8 py-4 bg-electric-blue text-white font-medium rounded-none transition-colors duration-200"
            style={{
              fontSize: '1rem',
              minHeight: '48px', // Fitts's Law minimum
              letterSpacing: '0.01em',
            }}
          >
            View Work
            <svg
              className="w-4 h-4 ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Minimal scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-secondary/50"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-px h-12 bg-text-secondary/30"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
