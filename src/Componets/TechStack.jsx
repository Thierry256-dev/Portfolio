import TechStackCard from "./Education/TechStackCard";
import { techStack } from "./Education/EducationData";

export default function TechStack() {
  return (
    <>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 p-2 gap-4 w-[100%] md:w-auto text-slate-300 font-bold bg-black/40 rounded-xl">
        {techStack.map((obj) => (
          <TechStackCard
            language={obj.language}
            progress={obj.progress}
            color={obj.color}
            icon={obj.icon}
            comment={obj.comment}
            key={obj.id}
          />
        ))}
      </div>
    </>
  );
}
