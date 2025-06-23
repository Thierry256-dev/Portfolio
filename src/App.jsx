import "./App.css";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Projects from "./Componets/Projects";
import Education from "./Componets/Education";
import Testimonials from "./Componets/Testimonials";
import Footer from "./Componets/Footer";

function App() {
  return (
    <>
      <header id="home" className="flex text-stone-400 px-8 py-2 items-center">
        <Home />
      </header>
      <section id="about" className="h-screen bg-sky-100 p-8">
        <About />
      </section>
      <section id="projects">
        <Projects />
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
