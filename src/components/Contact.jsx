import { motion } from "framer-motion";

const Contact = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="contact"
      className="py-32 px-8 lg:px-12 border-t border-text-muted/20"
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Simple, direct CTA */}
        <div className="space-y-8">
          <h2
            className="text-white"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: "500",
              letterSpacing: "0.01em",
              lineHeight: "1.3",
            }}
          >
            Let's work together
          </h2>

          <p
            className="text-text-secondary/80 max-w-xl mx-auto"
            style={{
              fontSize: "1rem",
              lineHeight: "1.6",
              letterSpacing: "0.005em",
            }}
          >
            I'm always interested in hearing about new projects and
            opportunities.
          </p>

          {/* Single, clear CTA */}
          <motion.a
            href="mailto:chandraobulareddy.theegala@gmail.com"
            whileHover={{
              backgroundColor: "rgba(79, 156, 255, 0.9)",
              transition: { duration: 0.2 },
            }}
            className="inline-flex items-center px-8 py-4 bg-electric-blue text-white font-medium rounded-none transition-colors duration-200 mt-12"
            style={{
              fontSize: "1rem",
              minHeight: "48px",
              letterSpacing: "0.01em",
            }}
          >
            Get in touch
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

          {/* Links */}
          <div className="flex justify-center space-x-8 mt-12 pt-12 border-t border-text-secondary/10">
            <a
              href="https://linkedin.com/in/chandraobula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary/60 hover:text-white transition-colors duration-200"
              style={{ fontSize: "0.9rem", letterSpacing: "0.05em" }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/chandraobula"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary/60 hover:text-white transition-colors duration-200"
              style={{ fontSize: "0.9rem", letterSpacing: "0.05em" }}
            >
              GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary/60 hover:text-white transition-colors duration-200"
              style={{ fontSize: "0.9rem", letterSpacing: "0.05em" }}
            >
              Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
