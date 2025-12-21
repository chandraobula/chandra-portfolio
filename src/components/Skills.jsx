import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const bucketsRef = useRef(null);
  const [hoveredBucket, setHoveredBucket] = useState(null);

  const capabilities = [
    {
      id: "design",
      title: "Design Excellence",
      description: "User-centered design with systematic thinking",
      skills: [
        { name: "UI/UX Design", proficiency: "Expert" },
        { name: "Design Systems", proficiency: "Expert" },
        { name: "User Research", proficiency: "Proficient" },
        { name: "Prototyping", proficiency: "Expert" },
        { name: "Figma", proficiency: "Expert" },
        { name: "Adobe Creative Suite", proficiency: "Proficient" },
      ],
      color: "from-accent/20 to-accent/10",
      borderColor: "border-accent/20",
    },
    {
      id: "frontend",
      title: "Frontend Mastery",
      description: "Modern web technologies with performance focus",
      skills: [
        { name: "React", proficiency: "Expert" },
        { name: "TypeScript", proficiency: "Expert" },
        { name: "JavaScript ES6+", proficiency: "Expert" },
        { name: "HTML5 & CSS3", proficiency: "Expert" },
        { name: "Tailwind CSS", proficiency: "Expert" },
        { name: "GSAP", proficiency: "Proficient" },
      ],
      color: "from-blue-500/20 to-blue-400/10",
      borderColor: "border-blue-400/20",
    },
    {
      id: "backend",
      title: "Backend Systems",
      description: "Scalable architecture and cloud deployment",
      skills: [
        { name: "Java", proficiency: "Expert" },
        { name: "Python", proficiency: "Proficient" },
        { name: "Spring Boot", proficiency: "Expert" },
        { name: "Node.js", proficiency: "Proficient" },
        { name: "PostgreSQL", proficiency: "Proficient" },
        { name: "AWS", proficiency: "Proficient" },
      ],
      color: "from-green-500/20 to-green-400/10",
      borderColor: "border-green-400/20",
    },
    {
      id: "collaboration",
      title: "Collaboration & Process",
      description: "Team leadership and project delivery",
      skills: [
        { name: "Technical Leadership", proficiency: "Expert" },
        { name: "Agile Methodologies", proficiency: "Expert" },
        { name: "Code Review", proficiency: "Expert" },
        { name: "Mentoring", proficiency: "Proficient" },
        { name: "Client Communication", proficiency: "Expert" },
        { name: "Project Management", proficiency: "Proficient" },
      ],
      color: "from-purple-500/20 to-purple-400/10",
      borderColor: "border-purple-400/20",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const buckets = bucketsRef.current;

    if (!section || !buckets) return;

    const bucketElements = buckets.querySelectorAll("[data-capability-bucket]");

    // Set initial states
    gsap.set(bucketElements, {
      opacity: 0,
      y: 60,
      scale: 0.95,
    });

    // Animate buckets on scroll
    ScrollTrigger.create({
      trigger: buckets,
      start: "top 85%",
      onEnter: () => {
        gsap.to(bucketElements, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const getProficiencyColor = (proficiency) => {
    switch (proficiency) {
      case "Expert":
        return "text-accent";
      case "Proficient":
        return "text-blue-400";
      default:
        return "text-secondary-text";
    }
  };

  return (
    <section
      id="skills"
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
          CAPABILITIES
        </h2>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-primary-text">
            Core Capabilities
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl leading-relaxed">
            Organized expertise across design, development, and delivery— built
            through focused practice and real-world application.
          </p>
        </div>

        {/* Capability buckets */}
        <div ref={bucketsRef} className="grid md:grid-cols-2 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability.id}
              data-capability-bucket
              className={`group bg-gradient-to-br ${capability.color} backdrop-blur-sm border ${capability.borderColor} rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
              onMouseEnter={() => setHoveredBucket(capability.id)}
              onMouseLeave={() => setHoveredBucket(null)}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary-text mb-2 group-hover:text-accent transition-colors">
                  {capability.title}
                </h3>
                <p className="text-secondary-text">{capability.description}</p>
              </div>

              <div className="space-y-4">
                {capability.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 bg-secondary-bg/20 rounded-xl backdrop-blur-sm group-hover:bg-secondary-bg/30 transition-colors"
                  >
                    <span className="text-primary-text font-medium">
                      {skill.name}
                    </span>
                    <span
                      className={`text-sm font-medium ${getProficiencyColor(
                        skill.proficiency
                      )}`}
                    >
                      {skill.proficiency}
                    </span>
                  </div>
                ))}
              </div>

              {hoveredBucket === capability.id && (
                <div className="mt-6 pt-6 border-t border-accent/10">
                  <p className="text-secondary-text text-sm italic">
                    Hover to explore each capability in detail
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Skills summary */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 bg-secondary-bg/40 backdrop-blur-sm border border-accent/10 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">4+</div>
              <div className="text-sm text-secondary-text">Core Areas</div>
            </div>
            <div className="w-px h-8 bg-accent/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">24</div>
              <div className="text-sm text-secondary-text">Key Skills</div>
            </div>
            <div className="w-px h-8 bg-accent/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">2+</div>
              <div className="text-sm text-secondary-text">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 80%, rgba(199, 240, 0, 0.02) 0%, transparent 50%)",
          zIndex: 0,
        }}
      />
    </section>
  );
};

export default Skills;
