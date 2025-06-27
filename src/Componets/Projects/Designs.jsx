import { data } from "./projectsData";
import ProjectCard from "./ProjectCard";

export default function WebApps() {
  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {data.map((obj) => {
          if (obj.category === "designs")
            return (
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
            );
        })}
      </div>
    </>
  );
}
