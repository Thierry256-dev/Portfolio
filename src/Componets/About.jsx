import { useRef } from "react";
import { motion, useInView, MotionConfig } from "framer-motion";

export default function About() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <>
      <div className="flex justify-center items-center flex-col lg:w-[60%] lg:text-lg/7 lg:justify-between gap-6 rounded-lg text-md">
        <MotionConfig
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <motion.p
            ref={ref1}
            initial={{
              x: -200,
              opacity: 0,
            }}
            animate={
              isInView1
                ? {
                    x: 0,
                    opacity: 1,
                  }
                : {}
            }
            className="shadow-lg z-5 p-6 rounded-lg text-sky-200 bg-black/80"
          >
            I'm Thierry Munderi, a <strong>frontend developer</strong> with a
            strong passion for crafting responsive, accessible, and
            high-performance web applications. I specialize in{" "}
            <strong>JavaScript</strong> and modern frameworks like{" "}
            <strong>React</strong>, with a keen eye for clean UI design and
            seamless user experiences.
          </motion.p>
          <motion.p
            ref={ref2}
            initial={{
              x: 200,
              opacity: 0,
            }}
            animate={
              isInView2
                ? {
                    x: 0,
                    opacity: 1,
                  }
                : {}
            }
            className="shadow-lg p-6 rounded-lg text-sky-200 bg-black/80"
          >
            My workflow combines technical precision with creative
            problem-solving--whether it's building reusable components,{" "}
            <strong>optimizing performance</strong>, or integraing APIs. I
            thrive in fast-paced environments where{" "}
            <strong>quality, scalability, and maintainability</strong> are
            priorites.
          </motion.p>
          <motion.p
            ref={ref3}
            initial={{
              x: -200,
              opacity: 0,
            }}
            animate={
              isInView3
                ? {
                    x: 0,
                    opacity: 1,
                  }
                : {}
            }
            className="shadow-lg p-6 rounded-lg text-sky-200 bg-black/80"
          >
            I love turning ideas into functional, beautiful interfaces-- and I'm
            always looking for new challenges that push the boundaries that the
            web can do.
          </motion.p>
        </MotionConfig>
      </div>
    </>
  );
}
