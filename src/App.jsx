import "./App.css";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Education from "./Componets/Education";
import Testimonials from "./Componets/Testimonials";
import Footer from "./Componets/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header id="home" className="flex text-stone-400 px-8 py-2 items-center">
        <Home />
      </header>
      <section id="about" className="h-auto bg-sky-50 p-8">
        <About />
      </section>
      <section id="projects">
        <Outlet />
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
