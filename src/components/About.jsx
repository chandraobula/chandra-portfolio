import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Main Text
      gsap.fromTo(
        ".about-title",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Animate Silhouette
      gsap.fromTo(
        ".about-silhouette",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Animate Bottom Content
      gsap.fromTo(
        ".about-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".about-grid",
            start: "top 85%",
          },
        }
      )
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen py-24 px-6 lg:px-12 bg-[#FDF6F0] overflow-hidden flex flex-col items-center"
      style={{
        background: "linear-gradient(180deg, #FFEADD 0%, #FFF 50%, #F5F5F5 100%)"
      }}
    >
      {/* 1. Top Section: Headline + Silhouette */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center mb-16 pt-10">

        {/* Silhouette Image (Centered/Behind/Interacting) */}
        <div className="about-silhouette relative z-10 w-[300px] md:w-[400px] h-[400px] md:h-[500px] mb-[-50px] md:mb-[-100px] opacity-90 mix-blend-multiply">
          {/* Placeholder for Silhouette - Replacing with User's Uploaded Image if available or a generic shadow figure */}
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop"
            className="w-full h-full object-cover rounded-full grayscale contrast-125 brightness-75 mask-image-gradient"
            style={{
              maskImage: "linear-gradient(to bottom, black 50%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent 100%)"
            }}
            alt="Profile Silhouette"
          />
        </div>

        {/* Big Typography Overlaid */}
        <h1 className="about-title relative z-20 text-[15vw] md:text-[180px] font-black leading-[0.8] tracking-tighter text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <span className="text-black">Ab</span>
          <span className="text-[#E65100]">out</span>
          <span className="text-black">Me</span>
        </h1>

        {/* Floating Quote */}
        <div className="absolute top-[20%] left-[5%] md:left-[10%] max-w-[200px] md:max-w-[280px] text-left z-20 hidden md:block">
          <h3 className="text-xl md:text-2xl font-bold text-black leading-tight">
            Designing experiences that solve real problems.
          </h3>
        </div>
      </div>

      {/* 2. Bottom Section: 2-Column Content Grid */}
      <div className="about-grid relative z-20 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-start px-4">

        {/* Left Column: Bio */}
        <div className="about-content space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-black mb-1">Theegala Chandra Obula Reddy</h2>
            <p className="text-gray-600 font-medium text-lg">Full Stack Developer</p>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <span className="text-2xl">👋</span>
            <span className="font-medium">Hello visitor and potential Employer!</span>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg">
            I'm Chandra, a passionate Full Stack Developer with 2 years of experience dedicated to creating
            exceptional digital solutions. I specialize in building scalable web applications using React, Python,
            and AWS. With experience collaborating closely with cross-functional teams, I ensure seamless execution
            from design to deployment.
          </p>

          <div className="flex items-center gap-2 text-gray-700 font-medium">
            <span className="text-xl">🤝</span>
            <span>Let's build something remarkable together!</span>
          </div>

          {/* Signature Placeholder */}
          <div className="pt-4 opacity-70">
            <span className="font-handwriting text-4xl text-black">Chandra Reddy</span>
          </div>
        </div>

        {/* Right Column: Timeline / List (Education & Skills) */}
        <div className="about-content space-y-10">
          {/* Education List simulating the 'Experience' look from reference */}
          <div className="grid grid-cols-[1fr_auto] gap-4 items-baseline border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-xl font-bold text-black">SVCE (B.Tech ECE)</h3>
              <p className="text-gray-500 text-sm">Bachelor of Technology</p>
            </div>
            <span className="text-gray-400 font-medium">2019-2023</span>
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-4 items-baseline border-b border-gray-200 pb-4">
            <div>
              <h3 className="text-xl font-bold text-black">APRJC (MPC)</h3>
              <p className="text-gray-500 text-sm">Intermediate Education</p>
            </div>
            <span className="text-gray-400 font-medium">2017-2019</span>
          </div>

          {/* Skills as a clean list */}
          <div className="pt-2">
            <h3 className="text-lg font-bold text-black mb-4">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {["ReactJS", "FastAPI", "AWS", "Python", "Java", "Docker"].map(skill => (
                <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Social Icons Bottom Right (Mock) */}
      <div className="absolute bottom-12 right-12 z-20 flex gap-4 hidden lg:flex">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
            <span className="w-4 h-4 bg-current rounded-sm" />
          </div>
        ))}
      </div>
    </section>
  );
};
export default About;
