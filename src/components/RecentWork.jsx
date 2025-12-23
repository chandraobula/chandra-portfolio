import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RecentWork = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: "inferlabs-platform",
      title: "InferLabs AI Platform",
      category: "Product Design",
      year: "2024",
      description:
        "Complete design system and user experience for AI-powered analytics platform serving enterprise clients.",
      challenge:
        "Complex data visualization needed to be intuitive for non-technical stakeholders",
      solution:
        "Progressive disclosure interface with contextual guidance and automated insights",
      impact: "89% user satisfaction, 60% faster onboarding",
      image: "/projects/inferlabs.jpg",
      technologies: ["Figma", "React", "D3.js", "Design System"],
      link: "https://inferlabs.ai",
    },
    {
      id: "globaltekforce",
      title: "GlobalTekForce Website",
      category: "Web Design",
      year: "2024",
      description:
        "Premium corporate website for established technology consulting firm with focus on credibility and conversion.",
      challenge:
        "Balancing technical expertise showcase with accessible messaging",
      solution: "Layered content architecture with technical depth on demand",
      impact: "40% increase in qualified leads, 95 Lighthouse score",
      image: "/projects/globaltekforce.jpg",
      technologies: ["HTML/CSS", "JavaScript", "GSAP", "Netlify"],
      link: "https://globaltekforce.com",
    },
    {
      id: "healthcare-platform",
      title: "Healthcare Management System",
      category: "Full Stack",
      year: "2023",
      description:
        "HIPAA-compliant patient management platform with role-based access and real-time collaboration.",
      challenge: "Strict compliance requirements while maintaining usability",
      solution: "Security-first architecture with intuitive workflow design",
      impact: "50% reduction in administrative overhead",
      image: "/projects/healthcare.jpg",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL"],
      link: "#",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    if (!section || !cards) return;

    const cardElements = cards.querySelectorAll("[data-project-card]");

    // Set initial states
    gsap.set(cardElements, {
      opacity: 0,
      y: 50,
    });

    // Animate cards on scroll using Batch for grid
    ScrollTrigger.batch(cardElements, {
      start: "top 85%",
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
        }),
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="recent-work"
      ref={sectionRef}
      className="relative min-h-screen py-32 bg-primary-bg overflow-hidden"
    >
      {/* Background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ zIndex: 0 }}
      >
        <h2
          className="text-[20vw] font-black opacity-[0.02] leading-none whitespace-nowrap"
          style={{ fontFamily: "Neue Montreal, sans-serif" }}
        >
          RECENT WORK
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-primary-text">
            Recent Work
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl leading-relaxed">
            Selected projects demonstrating technical expertise and design thinking.
          </p>
        </div>

        {/* Project cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              data-project-card
              className="group flex flex-col bg-secondary-bg/40 backdrop-blur-sm border border-accent/10 rounded-3xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:bg-secondary-bg/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5"
            >
              {/* Image Section - Medium Height */}
              <div className="relative h-64 lg:h-72 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center text-secondary-text/20">
                  <span className="text-5xl font-black">
                    {project.category.split(" ")[0]}
                  </span>
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg/80 via-transparent to-transparent opacity-60" />

                {/* Pill Top Left */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1 bg-secondary-bg/90 backdrop-blur text-accent rounded-full text-xs font-semibold border border-accent/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-primary-text group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-secondary-text text-sm font-mono opacity-80 mt-1">
                    {project.year}
                  </span>
                </div>

                <p className="text-secondary-text leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary-bg/50 text-secondary-text/80 border border-white/10 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer / Link */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-secondary-text/60 mb-1">
                      Impact
                    </span>
                    <span className="text-sm font-medium text-primary-text">
                      {project.impact.split(",")[0]}
                    </span>
                  </div>
                  {project.link !== "#" && (
                    <div className="flex justify-end items-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-text hover:text-accent transition-colors font-medium group/link"
                      >
                        Case Study
                        <svg
                          className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 20% 80%, rgba(199, 240, 0, 0.03) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />
    </section>
  );
};

export default RecentWork;
