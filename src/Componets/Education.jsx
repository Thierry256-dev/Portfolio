import EducationCard from "./Education/EducationCard";
import { educationData } from "./Education/EducationData";

export default function Education() {
  return (
    <>
      <div className="relative border-l-3 border-white/35 pl-10 space-y-10 h-auto w-[100%]">
        {educationData.map((obj) => (
          <EducationCard
            key={obj.id}
            achievement={obj.achievement}
            institution={obj.instituton}
            duration={obj.duration}
            studyCore={obj.studyCore}
            emphasis={obj.emphasis}
            comment={obj.comment}
            badge={obj.badge}
          />
        ))}
      </div>
    </>
  );
}
