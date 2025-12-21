import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = () => {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const statementRef = useRef(null);
  const domainRef = useRef(null);

  useEffect(() => {
    // Create a GSAP Context to handle cleanup automatically
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      // Name reveal
      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        // Role follows (starts 0.3s before previous animation ends)
        .fromTo(
          roleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3"
        )
        // Statement appears
        .fromTo(
          statementRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.2"
        )
        // Domain focus
        .fromTo(
          domainRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.1"
        );
    });

    return () => ctx.revert(); // Cleanup GSAP animations on unmount
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-left py-28">
        {/* Name (dominant) */}
        <h1
          ref={nameRef}
          className="font-display font-medium text-primary-text mb-4"
          style={{
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            opacity: 0, // Initialize at 0 to prevent "flash" before GSAP kicks in
          }}
        >
          Theegala Chandra
          <br />
          Obula Reddy
        </h1>

        {/* Role / designation */}
        <h2
          ref={roleRef}
          className="font-sans font-medium text-secondary-text mb-8"
          style={{
            fontSize: "clamp(1.2rem, 3vw, 1.5rem)",
            lineHeight: "1.3",
            letterSpacing: "0.01em",
            opacity: 0,
          }}
        >
          Senior UI/UX Designer & Frontend Engineer
        </h2>

        {/* Design belief statement */}
        <p
          ref={statementRef}
          className="font-sans text-primary-text mb-6 max-w-2xl"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            lineHeight: "1.6",
            letterSpacing: "0.005em",
            opacity: 0,
          }}
        >
          I believe great design is invisible — it solves problems without
          creating new ones, guides users without forcing them, and scales
          beautifully across systems.
        </p>

        {/* Domain focus line */}
        <p
          ref={domainRef}
          className="font-sans text-secondary-text"
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            lineHeight: "1.5",
            letterSpacing: "0.01em",
            opacity: 0,
          }}
        >
          Specializing in design systems, user research, and scalable frontend
          architecture.
        </p>
      </div>
    </section>
  );
};

export default Hero;
