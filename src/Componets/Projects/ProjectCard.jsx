import { FaCamera, FaCircle, FaGithub, FaTimes, FaTools } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function ProjectCard({
  name,
  link,
  description,
  github,
  tech,
  cover,
  screenshots,
}) {
  const [isActive, setIsActive] = useState(false);
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true });

  function activate() {
    setIsActive(true);
  }

  function deactivate() {
    setIsActive(false);
  }

  return (
    <>
      <motion.div
        ref={cardRef}
        initial={{
          opacity: 0,
          scale: 0.5,
        }}
        animate={
          isCardInView
            ? {
                opacity: 1,
                scale: 1,
              }
            : {}
        }
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className=" flex flex-col gap-2 bg-slate-900 p-2 rounded-xl w-[340px] md:w-[350px]  border-4 border-slate-400"
      >
        <img src={cover} className=" overflow-hidden h-[250px] rounded-lg" />
        <div className="flex flex-col text-slate-500 bg-gray-950 p-2 rounded-lg g-4">
          <p>
            <span>Name: </span>
            <span className="text-amber-400/90 font-normal">{name}</span>
          </p>
          <p>
            <span className="block">Description:</span>
            <span className="text-stone-400 font-normal text-sm pl-4">
              {description}
            </span>
          </p>
          <p>
            <span>
              <FaTools className="inline" />
              TechStack:{" "}
            </span>
            <span className="font-normal text-stone-600 text-sm">{tech}</span>
          </p>
          <a
            href={github}
            className="flex items-center gap-1 text-blue-600 transition-all duration-300 hover:text-blue-400 text-sm"
          >
            <FaGithub /> Github Repository
          </a>
          <div className="flex justify-between mt-[10px]">
            <span
              className="flex items-center cursor-pointer transitin-all duration-300 hover:text-slate-300"
              onClick={activate}
            >
              <FaCamera className="inline mr-[5px]" />
              Preview
            </span>
            <a
              href={link}
              className="text-green-500/90 flex items-center transition-all duration-300 hover:text-green-400"
            >
              <FaCircle className="inline w-[10px] mr-[4px]" />
              Live View
            </a>
          </div>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                exit={{
                  scale: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="flex flex-col border-2 border-white/50  items-center absolute rounded-lg top-0 left-0 w-[100%] h-[100%] px-2 overflow-y-auto overflow-x-hidden scroll-smooth bg-gray-950 z-5"
              >
                <div className="sticky top-0 flex justify-between p-4 items-center w-[100%] px-4 bg-gray-950">
                  Screenshot
                  <FaTimes
                    className="text-red-500 cursor-pointer"
                    onClick={deactivate}
                  />
                </div>
                {screenshots.map((shot) => (
                  <img key={shot} src={shot} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
