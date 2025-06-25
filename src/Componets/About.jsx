export default function About() {
  return (
    <>
      <div className="flex flex-col gap-6 rounded-lg text-md">
        <h1 className="text-center text-4xl font-bold text-blue-950 underline">
          About Me
        </h1>
        <p className="shadow-lg p-6 rounded-lg text-stone-800 bg-sky-100">
          I'm Thierry Munderi, a <strong>frontend developer</strong> with a
          strong passion for crafting responsive, accessible, and
          high-performance web applications. I specialize in{" "}
          <strong>JavaScript</strong> and modern frameworks like{" "}
          <strong>React</strong>, with a keen eye for clean UI design and
          seamless user experiences.
        </p>
        <p className="shadow-lg p-6 rounded-lg text-stone-800 bg-sky-100">
          My workflow combines technical precision with creative
          problem-solving--whether it's building reusable components,{" "}
          <strong>optimizing performance</strong>, or integraing APIs. I thrive
          in fast-paced environments where{" "}
          <strong>quality, scalability, and maintainability</strong> are
          priorites.
        </p>
        <p className="shadow-lg p-6 rounded-lg text-stone-800 bg-sky-100">
          I love turning ideas into functional, beautiful interfaces-- and I'm
          always looking for new challenges that push the boundaries that the
          web can do.
        </p>
      </div>
    </>
  );
}
