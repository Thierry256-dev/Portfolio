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
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="educaton">
        <Education />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
