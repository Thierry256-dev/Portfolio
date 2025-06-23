export default function Home() {
  return (
    <>
      <div className="flex justify-around items-center p-10px">
        <h1>Thierry_Munderi</h1>
        <nav className="flex gap-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#footer">Contacts</a>
        </nav>
      </div>
      <div>
        <div>
          <h1>Hi, I'm Thierry Munderi</h1>
          <h2>Frontend Developer | UI Engineer | Problem Solver</h2>
          <p>
            I build responsive, performant, and user-focused web applications
            using modern Frontend technologies like JavaScript, React and
            Tailwind CSS. Bringing clean design and efficient code together to
            create intuitive digital experiences
          </p>
          <button>Contact Me</button>
        </div>
      </div>
    </>
  );
}
