import ProjectCard from "./ProjectCard";
import { data } from "./projectsData";

export default function All() {
  return (
    <>
      <div className="flex items-center w-full p-4 overflow-x-auto gap-6 md:overflow-hidden md:w-auto md:grid md:grid-cols-2 lg:grid-cols-4">
        {data.map((obj, i) => (
          <div key={i} className="w-full">
            <ProjectCard
              name={obj.name}
              description={obj.description}
              link={obj.link}
              github={obj.github}
              tech={obj.tech}
              cover={obj.coverImage}
              screenshots={obj.screenshots}
            />
          </div>
        ))}
      </div>
    </>
  );
}
