import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const Experience = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const planeRef = useRef(null);
  const pathRef = useRef(null);

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "InferAI",
      period: "Aug 2024 — Present",
      location: "Hyderabad, India",
      description:
        "Collaborating closely with backend engineers to design scalable APIs and implement features such as streamed QA, article filtering, and bookmark management.",
      skills: ["ReactJS", "FastAPI", "AWS Lambda", "DynamoDB"],
    },
    {
      role: "Junior Software Engineer",
      company: "Infer Solutions Inc.",
      period: "Nov 2023 — July 2024",
      location: "Hyderabad, India",
      description:
        "Built reusable UI components and maintained responsive web pages. Collaborated with UX designers to improve product quality and user experience.",
      skills: ["ReactJS", "Redux Toolkit", "Axios", "Agile"],
    },
    {
      role: "Intern",
      company: "Infer Solutions Inc.",
      period: "July 2023 — Oct 2023",
      location: "Hyderabad, India",
      description:
        "Acquired practical skills in Java, Python, and Frontend technologies. Built Infer Knowledge Management Solution Application demo.",
      skills: ["Java", "Python", "HTML/CSS", "Bootstrap"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const plane = planeRef.current;

      // Ensure SVG path length is calculated
      const length = path.getTotalLength();

      // Set initial state: Line hidden (undrawn)
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      // 1. Line Drawing & Plane Movement (Synced)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.5, // Soft inertia/delay
        }
      });

      // Draw the line
      tl.to(path, {
        strokeDashoffset: 0,
        ease: "none",
      });

      // Move the plane along the path (Visual sync)
      // Since it's a straight line, we can just animate 'y' or use MotionPath if curved.
      // For absolute precision on a vertical line, 'yPercent' or 'top' is easier than MotionPath.
      // But the prompt asked for separate plane behavior.
      // We'll approximate the path follow by matching the distance.

      // Wait, to keep the plane EXACTLY at the head of the drawing line, we can just animate the plane's Y position
      // to match the height of the container (minus some padding).
      gsap.to(plane, {
        y: () => containerRef.current.offsetHeight * 0.85, // Travel down ~85% of the container
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
        }
      });

      // 2. "Gentle Breeze" Floating Animation (Idle)
      gsap.to(plane, {
        x: 10,
        rotation: 5,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="bg-[#111111] py-24 md:py-32 relative overflow-hidden text-white">

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Professional <span className="text-[#CCFF00]">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional journey and contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto min-h-[1000px]">

          {/* Central Line (SVG) */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] h-full pointer-events-none">
            <svg className="h-full w-[20px] -ml-[10px] overflow-visible" preserveAspectRatio="none">
              {/* The Track (faint) */}
              <path
                d="M 10 0 V 2000"
                className="stroke-white/10"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
              {/* The Progress Line (Lime) */}
              <path
                ref={pathRef}
                d="M 10 0 V 2000"
                className="stroke-[#CCFF00]"
                strokeWidth="2"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* The Plane */}
          <div
            ref={planeRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-12 h-12 text-[#CCFF00] drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]"
          >
            {/* Simple Paper Plane SVG */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full rotate-180">
              <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
            </svg>
          </div>

          {/* Experience Items */}
          <div className="space-y-32 pt-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`experience-item relative grid md:grid-cols-2 gap-8 md:gap-16 items-center ${index % 2 === 0 ? "text-right md:text-right" : "text-left md:text-left"
                  }`}
              >
                {/* Node on Line */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary-bg border-2 border-white/20 z-10 flex items-center justify-center">
                  <div className="experience-node-active w-2 h-2 rounded-full bg-accent opacity-0" />
                </div>

                {/* Left Side (Content for Even, Empty for Odd) */}
                <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                  {index % 2 === 0 ? (
                    <div className="experience-content pr-8 md:pr-0">
                      <span className="text-accent text-sm font-mono mb-2 block tracking-wider">{exp.period}</span>
                      <h3 className="text-2xl font-bold text-primary-text mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-secondary-text mb-4 font-medium">{exp.company}</h4>
                      <p className="text-secondary-text/80 leading-relaxed mb-6 text-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/5 rounded text-xs text-secondary-text border border-white/10">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>

                {/* Right Side (Content for Odd, Empty for Even) */}
                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                  {index % 2 !== 0 ? (
                    <div className="experience-content pl-8 md:pl-0">
                      <span className="text-accent text-sm font-mono mb-2 block tracking-wider">{exp.period}</span>
                      <h3 className="text-2xl font-bold text-primary-text mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-secondary-text mb-4 font-medium">{exp.company}</h4>
                      <p className="text-secondary-text/80 leading-relaxed mb-6 text-sm">{exp.description}</p>
                      <div className="flex flex-wrap gap-2 justify-start">
                        {exp.skills.map((skill, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/5 rounded text-xs text-secondary-text border border-white/10">{skill}</span>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="hidden md:block" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
