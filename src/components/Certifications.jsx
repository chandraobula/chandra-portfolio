import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef(null);
  const badgesRef = useRef(null);

  const certifications = [
    {
      name: "AWS Certified Developer",
      status: "In Progress",
      priority: "High",
    },
    {
      name: "Google UX Design Professional",
      status: "Planning",
      priority: "High",
    },
    {
      name: "React Advanced Patterns",
      status: "Completed",
      priority: "Medium",
    },
    {
      name: "System Design Interview",
      status: "In Progress",
      priority: "Medium",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const badges = badgesRef.current;

    if (!section || !badges) return;

    const badgeElements = badges.querySelectorAll("[data-cert-badge]");

    gsap.set(badgeElements, { opacity: 0, scale: 0.9 });

    ScrollTrigger.create({
      trigger: badges,
      start: "top 90%",
      onEnter: () => {
        gsap.to(badgeElements, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-primary-bg overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-primary-text">
            Continuous Learning
          </h2>
          <p className="text-secondary-text">
            Current and planned certifications to stay at the forefront of
            technology.
          </p>
        </div>

        <div ref={badgesRef} className="flex flex-wrap gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-cert-badge
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border ${
                cert.status === "Completed"
                  ? "bg-accent/10 border-accent/20 text-accent"
                  : cert.status === "In Progress"
                  ? "bg-blue-500/10 border-blue-500/20 text-blue-400"
                  : "bg-secondary-bg/40 border-accent/10 text-secondary-text"
              }`}
            >
              <span>{cert.name}</span>
              <span className="text-xs opacity-60">({cert.status})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
