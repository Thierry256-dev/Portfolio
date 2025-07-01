import ProjectCard from "./ProjectCard";
import { data } from "./projectsData";
import { motion } from "framer-motion";

export default function All() {
  return (
    <>
      <div className="flex items-center w-100 px-4 overflow-x-auto gap-6 md:grid md:grid-cols-4 lg:grid-cols-4">
        {data.map((obj, i) => (
          <motion.div
            initial={{
              opacity: 0.5,
              scale: 0.5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            key={i}
          >
            <ProjectCard
              name={obj.name}
              description={obj.description}
              link={obj.link}
              github={obj.github}
              tech={obj.tech}
              cover={obj.coverImage}
              screenshots={obj.screenshots}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
}
