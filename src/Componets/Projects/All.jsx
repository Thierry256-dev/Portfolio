import ProjectCard from "./ProjectCard";
import { data } from "./projectsData";

export default function All() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6">
        {data.map((obj) => (
          <ProjectCard
            name={obj.name}
            description={obj.description}
            link={obj.link}
            github={obj.github}
            tech={obj.tech}
            cover={obj.coverImage}
            screenshots={obj.screenshots}
            key={obj.id}
          />
        ))}
      </div>
    </>
  );
}
