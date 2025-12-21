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
      y: 100,
      scale: 0.9,
    });

    // Animate cards on scroll
    cardElements.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.to(card, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            delay: index * 0.2,
          });
        },
      });
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
            Case studies showcasing design thinking, technical execution, and
            measurable business impact across platforms and industries.
          </p>
        </div>

        {/* Project cards */}
        <div ref={cardsRef} className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-project-card
              className="group"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-secondary-bg/40 backdrop-blur-sm border border-accent/10 rounded-3xl overflow-hidden hover:border-accent/20 transition-all duration-500 hover:bg-secondary-bg/60">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content side */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                    <div className="mb-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                        <span className="text-secondary-text text-sm">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-primary-text mb-4 group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-secondary-text leading-relaxed mb-8">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="text-sm font-semibold text-primary-text uppercase tracking-wide mb-2">
                          Challenge
                        </h4>
                        <p className="text-secondary-text text-sm leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary-text uppercase tracking-wide mb-2">
                          Solution
                        </h4>
                        <p className="text-secondary-text text-sm leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary-text uppercase tracking-wide mb-2">
                          Impact
                        </h4>
                        <p className="text-accent text-sm font-medium">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-primary-text uppercase tracking-wide mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-accent/5 text-secondary-text border border-accent/10 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.link !== "#" && (
                      <div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-primary-text transition-colors font-medium"
                        >
                          View Project
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Image side */}
                  <div className="relative overflow-hidden order-1 lg:order-2 min-h-[300px] lg:min-h-[500px]">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5" />
                    <div className="absolute inset-0 flex items-center justify-center text-secondary-text/20">
                      <span className="text-6xl font-black">
                        {project.category.split(" ")[0]}
                      </span>
                    </div>
                    {hoveredCard === project.id && (
                      <div className="absolute inset-0 bg-accent/5 backdrop-blur-sm" />
                    )}
                  </div>
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
            "radial-gradient(circle at 80% 20%, rgba(199, 240, 0, 0.03) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />
    </section>
  );
};

export default RecentWork;
