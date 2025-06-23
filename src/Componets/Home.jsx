export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-100 z-100 flex justify-around items-center p-10px ">
        <h1 className="">Thierry_Munderi</h1>
        <nav className="flex gap-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#footer">Contacts</a>
        </nav>
      </div>
      <div className="flex flex-row items-center">
        <div>
          <h1 className="font-bold">Hi, I'm Thierry Munderi</h1>
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
