import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Footer = () => {
  const wordsRef = useRef(null);

  const socialLinks = [
    {
      name: "X",
      href: "https://twitter.com/chandraobula",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/chandraobula",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://instagram.com/chandraobula",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.896.011 7.784.058 2.498.498 0 3.041 0 7.784V16.216C0 20.959 2.498 23.502 7.784 23.942 7.896 23.989 8.396 24 12.017 24s4.122-.011 4.233-.058C21.502 23.502 24 20.959 24 16.216V7.784C24 3.041 21.502.498 16.251.058 16.139.011 15.639 0 12.017 0zm0 2.165c3.573 0 3.995.014 5.402.078 1.303.059 2.01.274 2.482.455.624.243 1.069.532 1.537 1.001.469.469.758.913 1.001 1.537.181.472.396 1.179.455 2.482.064 1.407.078 1.829.078 5.402s-.014 3.995-.078 5.402c-.059 1.303-.274 2.01-.455 2.482-.243.624-.532 1.069-1.001 1.537-.469.469-.913.758-1.537 1.001-.472.181-1.179.396-2.482.455-1.407.064-1.829.078-5.402.078s-3.995-.014-5.402-.078c-1.303-.059-2.01-.274-2.482-.455-.624-.243-1.069-.532-1.537-1.001-.469-.469-.758-.913-1.001-1.537-.181-.472-.396-1.179-.455-2.482C2.179 15.995 2.165 15.573 2.165 12s.014-3.995.078-5.402c.059-1.303.274-2.01.455-2.482.243-.624.532-1.069 1.001-1.537C4.168 2.11 4.612 1.821 5.236 1.578c.472-.181 1.179-.396 2.482-.455C9.025 2.179 9.447 2.165 12.017 2.165zm0 3.373c-3.691 0-6.68 2.989-6.68 6.68s2.989 6.68 6.68 6.68 6.68-2.989 6.68-6.68-2.989-6.68-6.68-6.68zm0 11.019c-2.389 0-4.34-1.951-4.34-4.34s1.951-4.34 4.34-4.34 4.34 1.951 4.34 4.34-1.951 4.34-4.34 4.34zm6.965-11.975c-.861 0-1.562-.701-1.562-1.562s.701-1.562 1.562-1.562 1.562.701 1.562 1.562-.701 1.562-1.562 1.562z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const words = ["build", "design", "create"];

    // Set initial state
    if (wordsRef.current) {
      gsap.set(wordsRef.current, { y: 30, opacity: 0 });
    }

    // Create the timeline with smooth transitions
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.3,
    });

    // Add animations for each word
    words.forEach((word) => {
      tl.to(wordsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        onStart: () => {
          if (wordsRef.current) {
            wordsRef.current.textContent = word;
          }
        },
      }).to(wordsRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.in",
        delay: 1.8,
      });
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-black text-white py-24 px-8 lg:px-12 overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-4xl mx-auto leading-tight text-start"
            style={{ fontFamily: "Neue Montreal, sans-serif" }}
          >
            <span className="inline-block">Let's </span>
            <span
              ref={wordsRef}
              className="inline-block relative bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent min-w-[150px] md:min-w-[200px] text-left"
              style={{ display: "inline-block" }}
            >
              {" "}
            </span>
            {""}
            <br />
            <span className="text-gray-500">incredible work together.</span>
          </motion.h2>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-3 gap-12 mb-10 max-w-4xl mx-auto border-b border-white/60 pb-8">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">
              Email
            </h3>
            <a
              href="mailto:chandraobulareddy.theegala@gmail.com"
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300"
            >
              chandraobulareddy.theegala@gmail.com
            </a>
          </motion.div>

          {/* Call Me */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-left"
          >
            <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">
              Call Me
            </h3>
            <a
              href="#"
              className="text-sm font-medium hover:text-cyan-400 transition-colors duration-300"
            >
              Book Now
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-left"
          >
            <h3 className="text-white/60 text-sm uppercase tracking-wider mb-2">
              Social
            </h3>
            <div className="flex space-x-4 justify-start">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-all duration-300 text-black"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto justify-between mb-12">
          {/* <div className="flex flex-col md:flex-row justify-between items-center"> */}
          <div className="text-white text-sm mb-4 md:mb-0">
            Based in Hyderabad, India
          </div>

          {/* <div className="flex items-center space-x-8"> */}
          <div className="text-white text-sm">
            © 2025 Theegala Chandra Obula Reddy
          </div>
        </div>
        {/* Background Text */}
      </div>
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
        <div
          className="text-[18vw] font-black leading-none text-white text-center mb-[-5%] mt-6 relative"
          style={{ fontFamily: "Neue Montreal, sans-serif" }}
        >
          CHANDRA
          {/* Glassy Shade Effect */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[40%] bg-gradient-to-t from-white/10 to-transparent blur-2xl rounded-t-full" />
          <div className="absolute bottom-[20%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
