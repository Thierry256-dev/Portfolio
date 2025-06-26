import "./App.css";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Education from "./Componets/Education";
import Testimonials from "./Componets/Testimonials";
import Footer from "./Componets/Footer";
import { Outlet, NavLink } from "react-router-dom";

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
        className="relative flex gap-10 flex-col items-center h-auto font-bold"
      >
        <div className="absolute h-full w-screen z-1 bg-[url('./assets/Bg2.jpg')] bg-no-repeat bg-cover bg-center blur-[5px]"></div>
        <div className="absolute h-full w-screen inset-0 bg-black/70 z-2"></div>
        <div className="flex gap-10 px-8 py-5 z-3 bg-blue-950/50 mt-[10px] rounded-full text-stone-300">
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
