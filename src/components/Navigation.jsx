import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { label: "Work", id: "recent-work" },
    { label: "Experience", id: "experience" },
    { label: "Journey", id: "journey" },
    { label: "Skills", id: "skills" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <>
      <motion.nav
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-8 inset-x-0 mx-auto w-fit z-50 px-4"
      >
        <motion.div
          animate={{
            scale: isScrolled ? 0.98 : 1,
            y: isScrolled ? 10 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            background: "rgba(255, 255, 255, 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.8)",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03), inset 0 -2px 10px rgba(255, 255, 255, 0.5)",
          }}
          className="rounded-2xl px-6 py-3.5 flex items-center justify-between relative overflow-hidden"
        >
          {/* Glassy Shade at Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-50" />

          {/* Left: Avatar + Name */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">CR</span>
            </div>
            <span className="text-gray-900 font-medium text-sm whitespace-nowrap">
              Chandra Reddy
            </span>
          </div>

          {/* Center: Navigation Links (Hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-8 mx-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 text-sm font-medium transition-colors duration-200 hover:text-gray-900"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right: CTA Button (Desktop) / Ellipsis (Mobile) */}
          <div className="flex items-center">
            {/* Desktop Navigation & CTA */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="px-5 py-2 rounded-full text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-white/80"
                style={{
                  background: "rgba(255, 255, 255, 0.65)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                }}
              >
                Contact
              </button>
            </div>

            {/* Mobile Ellipsis Menu */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden flex items-center space-x-1 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Open menu"
            >
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0,
                }}
                className="w-1 h-1 bg-gray-600 rounded-full"
              />
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="w-1 h-1 bg-gray-600 rounded-full"
              />
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="w-1 h-1 bg-gray-600 rounded-full"
              />
            </button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Modal */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/20 z-[60]"
              style={{
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
            />

            {/* Menu Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-x-4 top-24 z-[70] p-6 rounded-[20px] max-w-[400px] mx-auto"
              style={{
                background: "rgba(255, 255, 255, 0.6)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
              }}
            >
              {/* Top Row: Avatar + Name | Close */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">CR</span>
                  </div>
                  <span className="text-gray-900 font-medium text-base">
                    Chandra Reddy
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M5 5L15 15M5 15L15 5" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <div className="space-y-1 mb-6">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full text-left px-4 py-3.5 text-gray-800 font-medium text-base hover:text-gray-900 hover:bg-white/40 rounded-xl transition-all duration-200"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              {/* Bottom CTA */}
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full px-5 py-3.5 rounded-full text-base font-medium text-gray-900 transition-all duration-200 hover:bg-white/80"
                style={{
                  background: "rgba(255, 255, 255, 0.7)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                }}
              >
                Contact
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
