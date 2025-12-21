import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const backgroundTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section heading fade + Y
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      // Content fade only
      gsap.fromTo(
        contentRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 25%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 px-8 lg:px-12 bg-secondary-bg relative overflow-hidden"
    >
      {/* Large cropped background word */}
      <div
        ref={backgroundTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <div
          className="text-primary-text/5 font-display font-medium select-none"
          style={{
            fontSize: "clamp(8rem, 25vw, 20rem)",
            letterSpacing: "-0.05em",
            lineHeight: "0.8",
          }}
        >
          ABOUT ME
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto relative" style={{ zIndex: 1 }}>
        {/* Optional section label */}
        <div className="mb-8">
          <span className="text-secondary-text/60 text-xs font-mono uppercase tracking-widest">
            02 — Philosophy
          </span>
        </div>

        {/* Section heading */}
        <h2
          ref={headingRef}
          className="font-display font-medium text-primary-text mb-16"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
          }}
        >
          Design is about making the complex feel simple
        </h2>

        {/* Content */}
        <div ref={contentRef} className="space-y-8">
          {/* Core philosophy paragraph */}
          <p
            className="text-primary-text font-sans max-w-3xl"
            style={{
              fontSize: "clamp(1.1rem, 2.5vw, 1.3rem)",
              lineHeight: "1.7",
              letterSpacing: "0.005em",
            }}
          >
            I approach every project with the belief that great design serves
            people first, technology second. My work focuses on creating
            experiences that feel effortless, even when solving complex
            problems. This means prioritizing user needs, designing with
            empathy, and building systems that scale gracefully.
          </p>

          {/* Design principle statements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="space-y-3">
              <h3 className="font-sans font-medium text-primary-text text-lg">
                User-Centered
              </h3>
              <p className="text-secondary-text text-base leading-relaxed">
                Every design decision starts with understanding real user needs
                and behaviors, not assumptions.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-sans font-medium text-primary-text text-lg">
                Systems Thinking
              </h3>
              <p className="text-secondary-text text-base leading-relaxed">
                I design components and patterns that work consistently across
                products and scale with teams.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-sans font-medium text-primary-text text-lg">
                Purposeful Simplicity
              </h3>
              <p className="text-secondary-text text-base leading-relaxed">
                Complexity should be hidden from users, not eliminated from the
                solution—elegant solutions feel simple.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle warm gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(199, 240, 0, 0.03) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />
    </section>
  );
};

export default About;
