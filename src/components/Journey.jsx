import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);

  const services = [
    {
      id: "01",
      title: "Full Stack Development",
      description:
        "Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript, with robust backend architectures.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "02",
      title: "UI/UX Design & Frontend",
      description:
        "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "03",
      title: "SaaS Platform Development",
      description:
        "Developing end-to-end SaaS solutions with subscription systems, Stripe billing, and multi-tenant management.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      id: "04",
      title: "API & System Architecture",
      description:
        "Designing maintainable APIs with PostgreSQL, Prisma, and MongoDB. Focusing on performance optimization and security.",
      icon: (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current;
      if (!container) return;

      // Calculate scroll distance: (Total content width) - (Viewport width)
      const getScrollAmount = () => -(container.scrollWidth - window.innerWidth);

      const tween = gsap.to(container, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          end: () => `+=${container.scrollWidth - window.innerWidth}`, // Scroll distance matches content width
          invalidateOnRefresh: true,
        }
      });
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="journey" className="overflow-hidden bg-[#EBEBEB] py-20 md:py-20">
      {/* Using 'journey' ID to maintain navigation link compatibility */}

      {/* Container for the Pinned Section */}
      <section ref={triggerRef} className="h-[70vh] min-h-[500px] w-full flex items-center relative">

        {/* Horizontal Scroll Track Wrapper to handle center alignment visually */}
        <div className="w-full overflow-hidden">
          {/* The Moving Track */}
          <div
            ref={containerRef}
            className="flex h-full w-fit border-y border-gray-300 bg-[#EBEBEB]" // Unified top/bottom border
          >

            {services.map((service, index) => (
              <div
                key={service.id}
                className={`expertise-panel w-[85vw] md:w-[35vw] flex-shrink-0 flex flex-col justify-between p-8 md:p-10 border-r border-gray-300 ${index === 0 ? 'border-l' : ''}`} // Added left border for first item
              >
                {/* Top Row: Icon and Number */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-full bg-[#CCFF00] flex items-center justify-center shadow-sm border border-black/5">
                    <div className="text-gray-900">
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-3xl font-light text-gray-400 font-mono">
                    {service.id}
                  </span>
                </div>

                {/* Middle: Content */}
                <div>
                  <h2 className="text-3xl md:text-3xl font-bold mb-6 leading-tight text-gray-900">
                    {service.title}
                  </h2>
                  <div className="w-12 h-px bg-gray-300 mb-6" />
                  <p className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom: Action/Status (Optional decoration) */}
                {/* <div className="mt-8 pt-8 border-t border-gray-200">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Explore</span>
                    </div> */}
              </div>
            ))}

          </div>
        </div>

      </section>
    </div>
  );
};

export default Expertise;
