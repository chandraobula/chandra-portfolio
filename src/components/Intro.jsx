import { motion } from "framer-motion";

const Intro = () => {
  const sectionVariants = {
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  return (
    <section id="intro" className="py-32 px-8 lg:px-12">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Text Content */}
          <motion.div variants={textVariants} className="lg:col-span-7">
            <div className="max-w-2xl">
              <p
                className="text-text-secondary leading-relaxed"
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  letterSpacing: "0.005em",
                }}
              >
                I'm a software engineer with five years of experience building
                digital products that matter. My approach combines technical
                precision with design thinking — creating interfaces that feel
                intuitive and systems that scale gracefully.
              </p>

              <p
                className="text-text-secondary/80 leading-relaxed mt-6"
                style={{
                  fontSize: "1.05rem",
                  lineHeight: "1.7",
                }}
              >
                Currently focused on frontend architecture and user experience,
                I bridge the gap between beautiful design and robust
                engineering.
              </p>
            </div>
          </motion.div>

          {/* Supporting Visual */}
          <motion.div variants={imageVariants} className="lg:col-span-5">
            <div className="relative">
              <div
                className="bg-dark-surface-2 rounded-none aspect-[4/5]"
                style={{
                  background:
                    "linear-gradient(135deg, #161B2E 0%, #1A1F2E 100%)",
                }}
              >
                {/* Placeholder for portrait/abstract visual */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-text-secondary/30 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-electric-blue/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-electric-blue/30"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                    <p className="text-sm">Portrait placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
