import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const experiences = [
    {
      id: "inferlabs",
      period: "Present",
      role: "UI/UX Design Lead",
      company: "InferLabs AI",
      type: "Product Design",
      description:
        "Leading design system development for AI-powered analytics platform. Created comprehensive component library and user experience framework.",
      achievements: [
        "Built design system serving 10+ product teams",
        "Reduced design-dev handoff time by 60%",
        "Established UX research methodology",
      ],
    },
    {
      id: "fullstack",
      period: "2022-2024",
      role: "Full Stack Developer",
      company: "Multiple Projects",
      type: "Development",
      description:
        "Developed enterprise applications across healthcare, fintech, and corporate sectors using Java, Python, and modern web technologies.",
      achievements: [
        "5+ production applications deployed",
        "Built microservices architecture",
        "Led technical mentoring for junior developers",
      ],
    },
    {
      id: "corporate",
      period: "2023-2024",
      role: "Website Designer",
      company: "Corporate Clients",
      type: "Web Design",
      description:
        "Designed and developed premium websites for established businesses including GlobalTekForce, Bonifore, and consulting firms.",
      achievements: [
        "Delivered 8 corporate websites",
        "Achieved 95+ Lighthouse scores",
        "Increased client conversion rates by 40%",
      ],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const timeline = timelineRef.current;

    if (!section || !timeline) return;

    const timelineItems = timeline.querySelectorAll("[data-timeline-item]");

    // Set initial states
    gsap.set(timelineItems, {
      opacity: 0,
      x: -50,
      scale: 0.95,
    });

    // Animate timeline items on scroll
    timelineItems.forEach((item, index) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 85%",
        end: "bottom 15%",
        onEnter: () => {
          gsap.to(item, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.1,
          });
        },
        onLeave: () => {
          gsap.to(item, {
            opacity: 0.4,
            scale: 0.98,
            duration: 0.3,
          });
        },
        onEnterBack: () => {
          gsap.to(item, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
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
      id="experience"
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
          EXPERIENCE
        </h2>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-primary-text">
            Professional Journey
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl leading-relaxed">
            A focused progression through design and development, building
            expertise at the intersection of user experience and technical
            execution.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20" />

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-timeline-item
                className="relative flex items-start gap-8"
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-primary-bg shadow-lg shadow-accent/20" />
                  <div className="absolute inset-0 w-4 h-4 bg-accent rounded-full animate-ping opacity-20" />
                </div>

                {/* Content card */}
                <div className="flex-1 bg-secondary-bg/60 backdrop-blur-sm border border-accent/10 rounded-2xl p-8 hover:border-accent/20 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-primary-text mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                      <p className="text-sm text-secondary-text mt-1">
                        {exp.type}
                      </p>
                    </div>
                  </div>

                  <p className="text-secondary-text mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary-text uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-secondary-text"
                        >
                          <span className="w-1 h-1 bg-accent rounded-full mt-2.5 flex-shrink-0" />
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(199, 240, 0, 0.02) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />
    </section>
  );
};

export default Experience;
