import Home from "./Componets/Home";
import About from "./Componets/About";
import Education from "./Componets/Education";
import TechStack from "./Componets/TechStack";
import Testimonials from "./Componets/Testimonials";
import Footer from "./Componets/Footer";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaFolderOpen,
  FaGraduationCap,
  FaTools,
  FaUserCircle,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ErrorBoundary from "./Componets/ErrorBoundary";

function App() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true });

  const projectRef = useRef(null);
  const isProjectInView = useInView(projectRef, { once: true });

  const projectNavRef = useRef(null);
  const isProjectNavInView = useInView(projectNavRef, { once: true });

  const eduRef = useRef(null);
  const isEduInView = useInView(eduRef, { once: true });

  const techRef = useRef(null);
  const isTechInView = useInView(techRef, { once: true });

  const testimonialRef = useRef(null);
  const isTestimonialInView = useInView(testimonialRef, { once: true });

  return (
    <>
      <header
        id="home"
        className="relative overflow-x-hidden flex h-screen text-stone-400 px-8 py-2 items-center bg-[url('./assets/Bg1.jpg')] bg-center bg-cover bg-no-repeat"
      >
        <div className="absolute inset-0 bg-black/80 z-1"></div>
        <div className="z-1000">
          <Home />
        </div>
      </header>
      <section
        id="about"
        className="flex overflow-x-hidden items-center flex-col gap-4 h-auto bg-gray-950 p-8"
      >
        <motion.h1
          ref={aboutRef}
          initial={{ opacity: 0 }}
          animate={isAboutInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center text-3xl font-bold text-sky-200/75 "
        >
          <FaUserCircle className="inline" />
          About Me
        </motion.h1>
        <About />
      </section>
      <section
        id="projects"
        className="relative overflow-x-hidden flex gap-5 pb-8 flex-col items-center h-auto font-bold"
      >
        <h1
          ref={projectRef}
          initial={{ opacity: 0 }}
          animate={isProjectInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center z-3 text-sky-200/75 pt-5 text-3xl"
        >
          <FaFolderOpen className="inline" />
          Projects
        </h1>
        <div className="absolute h-full inset-0 z-1 bg-[url('./assets/Bg2.jpg')] bg-no-repeat bg-cover bg-center blur-[5px]"></div>
        <div className="absolute h-full  inset-0 bg-black/70 z-2"></div>
        <div
          ref={projectNavRef}
          initial={{ opacity: 0, y: 200 }}
          animate={isProjectNavInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex sticky top-0 gap-10 px-8 py-4 z-3 bg-slate-950/75 rounded-full text-stone-300"
        >
          <NavLink
            to={`/`}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            All
          </NavLink>
          <NavLink
            to={`webapps`}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            Web Apps
          </NavLink>
          <NavLink
            to={`designs`}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-white"
            }
          >
            Designs
          </NavLink>
        </div>
        <div className="flex z-3 max-w-screen">
          <Outlet />
        </div>
      </section>
      <section
        id="education"
        className="overflow-x-hidden pt-8 pl-8 pr-3 pb-8 md:p-8 bg-gray-950 h-auto flex flex-col justify-center items-center"
      >
        <h1
          ref={eduRef}
          initial={{ opacity: 0, x: -200 }}
          animate={isEduInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center z-3 text-sky-200/75 pb-4 font-bold text-3xl"
        >
          <FaGraduationCap className="inline" />
          Education
        </h1>
        <Education />
      </section>
      <section
        id="techStack"
        className="overflow-x-hidden flex flex-col items-center md:justify-center md:w-auto  relative p-6 md:px-8 md:py-10 items-center"
      >
        <motion.h1
          ref={techRef}
          initial={{ opacity: 0 }}
          animate={isTechInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center text-sky-200/75 pb-4 font-bold text-3xl"
        >
          <FaTools className="inline" />
          Frontend Stack
        </motion.h1>
        <TechStack />
      </section>
      <section
        id="testimonials"
        className="overflow-x-hidden relative bg-slate-800/65 p-6 md:p-8 flex flex-col items-center md:justify-center"
      >
        <motion.h1
          ref={testimonialRef}
          initial={{ opacity: 0, y: 200 }}
          animate={isTestimonialInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex items-center z-3 text-sky-200/85 pb-4 font-bold text-3xl"
        >
          Testimonials
        </motion.h1>
        <div className="absolute h-full inset-0 z-1 bg-[url('./assets/keyboard.jpg')] bg-no-repeat bg-cover bg-center blur-[3px]" />
        <div className="absolute inset-0 h-full z-2 bg-black/80" />
        <ErrorBoundary>
          <Testimonials />
        </ErrorBoundary>
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
