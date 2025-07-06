import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function EducationCard({
  achievement,
  institution,
  badge,
  duration,
  comment,
  studyCore,
  emphasis,
}) {
  const cardRef = useRef(null);
  const isEduCardInView = useInView(cardRef, { once: true });

  const badgeRef = useRef(null);
  const isBadgeInView = useInView(badgeRef, { once: true });

  return (
    <>
      <motion.img
        ref={badgeRef}
        initial={{ opacity: 0.5 }}
        animate={isBadgeInView ? { opacity: 1 } : {}}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
        src={badge}
        className="w-15 h-15 bg-black rounded-full border-4 border-white/50 shadow absolute left-0 translate-y-[-15%] translate-x-[-50%] mt-1"
      />
      <motion.div
        ref={cardRef}
        initial={{
          opacity: 0,
          y: 200,
        }}
        animate={
          isEduCardInView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex items-start gap-4 font-bold text-md text-white/65 border-4 border-white/35 rounded-xl"
      >
        <div className="bg-black/60 p-4 rounded-xl w-full gap-5">
          <h3 className="text-xl text-blue-500/95">{achievement}</h3>
          <ul className="ml-4 bg-black rounded-lg p-4">
            <li>
              <span className="text-slate-500">Institution: </span>{" "}
              <span>{institution}</span>
            </li>
            <li>
              <span className="text-slate-500">Duration: </span>
              <span>{duration}</span>
            </li>
            <li>
              <span className="text-slate-500">StudyCore: </span>
              <span>{studyCore}</span>
            </li>
          </ul>
          <p>{comment}</p>
          <ul className="list-disc ml-6 font-normal bg-black rounded-lg p-4">
            {emphasis.map((item) => (
              <li key={item} className="text-slate-300/75">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </>
  );
}
