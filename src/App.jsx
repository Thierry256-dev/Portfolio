import "./App.css";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Education from "./Componets/Education";
import Testimonials from "./Componets/Testimonials";
import Footer from "./Componets/Footer";
import { Outlet, NavLink } from "react-router-dom";
import { FaFolderOpen } from "react-icons/fa";

function App() {
  return (
    <>
      <header id="home" className="flex text-stone-400 px-8 py-2 items-center">
        <Home />
      </header>
      <section id="about" className="h-auto bg-gray-950 p-8">
        <About />
      </section>
      <section
        id="projects"
        className="relative flex gap-5 pb-8 flex-col items-center h-auto font-bold"
      >
        <h1 className="flex items-center z-3 text-sky-200/75 pt-5 text-4xl">
          <FaFolderOpen className="inline" />
          Projects
        </h1>
        <div className="absolute h-full inset-0 z-1 bg-[url('./assets/Bg2.jpg')] bg-no-repeat bg-cover bg-center blur-[5px]"></div>
        <div className="absolute h-full  inset-0 bg-black/70 z-2"></div>
        <div className="flex sticky top-0 gap-10 px-8 py-4 z-3 bg-slate-950/75 rounded-full text-stone-300">
          <NavLink to={`/`} className="hover:decoration-amber-100">
            All
          </NavLink>
          <NavLink to={`webapps`}>Web Apps</NavLink>
          <NavLink to={`designs`}>Designs</NavLink>
        </div>
        <div className="z-3">
          <Outlet />
        </div>
      </section>
      <section id="educaton">
        <Education />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
