import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom center",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const domains = [
    {
      number: "01",
      title: "UI/UX Design",
      description:
        "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.",
    },
    {
      number: "02",
      title: "Frontend Engineering",
      description:
        "Building scalable and high-performance web applications using React, Node.js, and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices.",
    },
    {
      number: "03",
      title: "Web Design",
      description:
        "Corporate websites, landing pages, responsive layouts with focus on performance and user experience",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="expertise"
      className="py-32 px-8 lg:px-12 bg-neutral-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6 max-w-4xl">
            Transforming ideas into exceptional digital experiences through
            expertise and innovation
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Lime accent circle */}
              <div className="w-12 h-12 bg-lime-accent rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" />
                </svg>
              </div>

              {/* Number */}
              <div className="text-gray-400 text-sm mb-2 font-mono">
                {domain.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4">
                {domain.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
