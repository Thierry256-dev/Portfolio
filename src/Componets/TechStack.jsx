import TechStackCard from "./Education/TechStackCard";
import { techStack } from "./Education/EducationData";

export default function TechStack() {
  return (
    <>
      <div className="grid grid-cols-2 p-2 gap-6 text-slate-300 font-bold">
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
