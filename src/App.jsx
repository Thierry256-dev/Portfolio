import "./App.css";
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

function App() {
  const aboutRef = useRef(null);
  const isAboutInView = useInView(aboutRef, { once: true });

  const projectRef = useRef(null);
  const isProjectInView = useInView(projectRef, { once: true });

  const projectNavRef = useRef(null);
  const isProjectNavInView = useInView(projectNavRef, { once: true });

  return (
    <>
      <header
        id="home"
        className="relative flex text-stone-400 px-8 py-2 items-center"
      >
        <Home />
      </header>
      <section
        id="about"
        className="flex items-center flex-col gap-4 h-auto bg-gray-950 p-8"
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
        className="relative flex gap-5 pb-8 flex-col items-center h-auto font-bold"
      >
        <h1
          ref={projectRef}
          initial={{ opacity: 0 }}
          animate={isProjectInView ? { opacity: 1 } : {}}
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
        <div className="flex z-3">
          <Outlet />
        </div>
      </section>
      <section
        id="education"
        className="p-8 bg-gray-950 h-auto flex flex-col justify-center items-center"
      >
        <h1 className="flex items-center z-3 text-sky-200/75 pb-4 font-bold text-3xl">
          <FaGraduationCap className="inline" />
          Education
        </h1>
        <Education />
      </section>
      <section
        id="techStack"
        className="flex flex-col relative px-8 py-10 items-center"
      >
        <h1 className="flex items-center text-sky-200/75 pb-4 font-bold text-3xl">
          <FaTools className="inline" />
          Frontend Stack
        </h1>
        <TechStack />
      </section>
      <section
        id="testimonials"
        className="relative bg-slate-800/65 p-8 flex flex-col items-center"
      >
        <h1 className="flex items-center z-3 text-sky-200/85 pb-4 font-bold text-3xl">
          Testimonials
        </h1>
        <div className="absolute h-full inset-0 z-1 bg-[url('./assets/keyboard.jpg')] bg-no-repeat bg-cover bg-center blur-[3px]" />
        <div className="absolute inset-0 h-full z-2 bg-black/80" />
        <Testimonials />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
