import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.nav
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-8 inset-x-0 mx-auto w-fit z-50"
    >
      <motion.div
        animate={{
          scale: isScrolled ? 0.95 : 1,
          opacity: isScrolled ? 0.9 : 1,
        }}
        className="bg-white/80 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg flex items-center justify-center"
      >
        <div className="flex items-center justify-center space-x-12">
          {/* Avatar + Name */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
              <span className="text-primary-text font-medium text-sm">CR</span>
            </div>
            <span className="text-primary-text font-medium text-sm whitespace-nowrap">
              Chandra Reddy
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <motion.button
              onClick={() => scrollToSection("recent-work")}
              whileHover={{ color: "#C7F000" }}
              className="text-primary-text text-sm font-medium transition-colors hover:cursor-pointer"
            >
              Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("experience")}
              whileHover={{ color: "#C7F000" }}
              className="text-primary-text text-sm font-medium transition-colors hover:cursor-pointer"
            >
              Experience
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("journey")}
              whileHover={{ color: "#C7F000" }}
              className="text-primary-text text-sm font-medium transition-colors hover:cursor-pointer"
            >
              Journey
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("skills")}
              whileHover={{ color: "#C7F000" }}
              className="text-primary-text text-sm font-medium transition-colors hover:cursor-pointer"
            >
              Skills
            </motion.button>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            whileHover={{
              backgroundColor: "#B8F500",
              scale: 1.02,
            }}
            className="bg-accent text-primary-text px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap"
          >
            Contact
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
