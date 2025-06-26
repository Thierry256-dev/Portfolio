import { FaCamera, FaCircle, FaGithub } from "react-icons/fa";

export default function ProjectCard({
  name,
  link,
  description,
  github,
  tech,
  cover,
}) {
  return (
    <>
      <div className="flex flex-col gap-2 bg-slate-900 p-2 rounded-xl w-[350px] border-4 border-orange-600/75">
        <img src={cover} className="h-[200px] overflow-hidden rounded-lg" />
        <div className="flex flex-col text-slate-500 bg-gray-950 p-2 rounded-lg g-4">
          <p>
            <span>Name: </span>
            <span className="text-amber-400 font-normal">{name}</span>
          </p>
          <p>
            <span className="block">Description:</span>
            <span className="text-stone-400 font-normal text-sm pl-4">
              {description}
            </span>
          </p>
          <p>
            <span>TechStack: </span>
            <span className="font-normal text-stone-600 text-sm">{tech}</span>
          </p>
          <a
            href={github}
            className="flex items-center gap-1 text-blue-600 text-sm"
          >
            <FaGithub /> Github Repository
          </a>
          <div className="flex justify-between mt-[10px]">
            <span className="flex items-center cursor-pointer">
              <FaCamera className="inline mr-[5px]" />
              Preview
            </span>
            <a href={link} className="text-green-500 flex items-center">
              <FaCircle className="inline w-[10px] mr-[4px]" />
              Live
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
