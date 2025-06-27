import profile from "../assets/profile1.webp";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen z-100 flex justify-around items-center p-[20px] bg-slate-950/75 ">
        <h1 className="">Thierry_Munderi</h1>
        <nav className="flex gap-4">
          <a href="#home" className="hover:text-amber-500">
            Home
          </a>
          <a href="#about" className="hover:text-amber-500">
            About
          </a>
          <a href="#projects" className="hover:text-amber-500">
            Projects
          </a>
          <a href="#education" className="hover:text-amber-500">
            Education
          </a>
          <a href="#testimonials" className="hover:text-amber-500">
            Testimonials
          </a>
          <a href="#footer" className="hover:text-amber-500">
            Contacts
          </a>
        </nav>
      </div>
      <div className="flex flex-row items-center gap-5 w-full">
        <div>
          <h1 className="font-bold text-[2.5rem]">Hi, I'm Thierry Munderi</h1>
          <h2 className="font-semibold text-[1.2rem] text-blue-500">
            Frontend Developer | UI Engineer | Problem Solver
          </h2>
          <p className="text-base/6 text-[0.9rem]">
            I build responsive, performant, and user-focused web applications
            using modern Frontend technologies like JavaScript, React and
            Tailwind CSS. Bringing clean design and efficient code together to
            create intuitive digital experiences
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition text-white font-bold cursor-pointer">
            Contact Me
          </button>
        </div>
        <img
          src={profile}
          className="w-1/3 rounded-full bg-slate-950/80 border-5 border-sky-200/80"
          alt="profile-image"
        />
      </div>
    </>
  );
}
