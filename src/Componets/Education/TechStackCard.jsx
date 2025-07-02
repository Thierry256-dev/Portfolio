import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TechStackCard({
  language,
  progress,
  color,
  icon,
  comment,
}) {
  const progressRef = useRef(null);
  const isProgressInView = useInView(progressRef, { once: true });

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  const commentRef = useRef(null);
  const isCommentInView = useInView(commentRef, { once: true });

  const html = <FaHtml5 key={icon} />;
  const css = <FaCss3 key={icon} />;
  const js = <FaJs key={icon} />;
  const rct = <FaReact key={icon} />;
  const tailwind = <SiTailwindcss key={icon} />;

  const icons = [
    {
      name: "html",
      element: html,
    },
    {
      name: "css",
      element: css,
    },
    {
      name: "js",
      element: js,
    },
    {
      name: "rct",
      element: rct,
    },
    {
      name: "tailwind",
      element: tailwind,
    },
  ];

  return (
    <>
      <div className="flex flex-col md:w-[100%]">
        <motion.div
          ref={titleRef}
          initial={{
            opacity: 0,
          }}
          animate={isTitleInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
          className="flex gap-1 items-center"
        >
          <div style={{ color: color }}>
            {icons.map((obj) => {
              if (obj.name === icon) return obj.element;
            })}
          </div>
          <h3>{language}</h3>
        </motion.div>
        <div className="flex">
          <div className="flex items-center rounded-full bg-gray-900 w-[80%] lg:w-[400px] h-3 md:h-5">
            <motion.div
              ref={progressRef}
              initial={{
                width: 0,
              }}
              animate={
                isProgressInView
                  ? {
                      width: progress,
                    }
                  : {}
              }
              transition={{
                duration: 1,
                ease: "easeIn",
              }}
              layout
              className="h-2 md:h-4 rounded-full"
              style={{ backgroundColor: color, width: progress }}
            ></motion.div>
          </div>
          {progress}
        </div>
        <motion.p
          ref={commentRef}
          initial={{
            opacity: 0,
          }}
          animate={isCommentInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeIn" }}
          className="text-stone-500 font-normal text-md"
        >
          {comment}
        </motion.p>
      </div>
    </>
  );
}
