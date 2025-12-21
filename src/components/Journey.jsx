import { motion } from "framer-motion";

const Journey = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const milestones = [
    {
      period: "2019 — Beginning",
      title: "Started with curiosity",
      story:
        "Began exploring the intersection of design and technology while studying computer science. Early projects focused on understanding how good design improves user experiences.",
    },
    {
      period: "2020 — 2021",
      title: "Building foundations",
      story:
        "Developed expertise in frontend technologies and design systems. Learned that the best interfaces feel invisible — they solve problems without creating new ones.",
    },
    {
      period: "2022 — 2023",
      title: "Professional growth",
      story:
        "Joined development teams building scalable web applications. Discovered the importance of bridging design intent with technical implementation.",
    },
    {
      period: "2024 — Present",
      title: "Design-driven engineering",
      story:
        "Now focused on creating digital products where engineering decisions serve design goals, and design decisions respect technical constraints.",
    },
  ];

  return (
    <section id="journey" className="py-32 px-8 lg:px-12">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-4xl mx-auto"
      >
        {/* Section introduction */}
        <motion.div variants={textVariants} className="mb-20">
          <h2
            className="text-text-secondary/60 mb-8"
            style={{
              fontSize: "0.9rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontWeight: "400",
            }}
          >
            Journey
          </h2>
          <p
            className="text-text-secondary max-w-2xl"
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.7",
              letterSpacing: "0.005em",
            }}
          >
            A path shaped by curiosity, guided by constraints, and driven by the
            belief that thoughtful design makes technology more human.
          </p>
        </motion.div>

        {/* Timeline narrative */}
        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              variants={textVariants}
              className="relative"
            >
              <div className="space-y-4">
                <div
                  className="text-text-secondary/50"
                  style={{
                    fontSize: "0.85rem",
                    letterSpacing: "0.05em",
                    fontWeight: "400",
                  }}
                >
                  {milestone.period}
                </div>
                <h3
                  className="text-white"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    letterSpacing: "0.01em",
                    lineHeight: "1.4",
                  }}
                >
                  {milestone.title}
                </h3>
                <p
                  className="text-text-secondary/80 max-w-2xl"
                  style={{
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    letterSpacing: "0.005em",
                  }}
                >
                  {milestone.story}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Present moment */}
        <motion.div
          variants={textVariants}
          className="mt-20 pt-16 border-t border-text-secondary/10"
        >
          <p
            className="text-text-secondary/70 max-w-2xl"
            style={{
              fontSize: "1rem",
              lineHeight: "1.7",
              letterSpacing: "0.005em",
              fontStyle: "italic",
            }}
          >
            Today, I'm most interested in projects where design and engineering
            inform each other — creating products that feel both thoughtful and
            inevitable.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Journey;
