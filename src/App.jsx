import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import RecentWork from "./components/RecentWork";
import Skills from "./components/Skills";
import Journey from "./components/Journey";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-primary-bg overflow-x-hidden">
      <Navigation />
      <main>
        {/* 1. Hero - Editorial Statement Hero */}
        <Hero />

        {/* 2. About Me - Philosophy-first */}
        <About />

        {/* 4. Recent Work - Case-study cards */}
        <RecentWork />

        {/* 3. Experience - Minimal vertical timeline */}
        <Experience />

        {/* 5. Skills - Capability buckets */}
        <Skills />

        {/* 6. Journey - Reflective timeline */}
        <Journey />

        {/* 7. Certifications - Inline badges */}
        <Certifications />
      </main>

      {/* 8. Footer - Editorial closing */}
      <Footer />
    </div>
  );
}

export default App;
