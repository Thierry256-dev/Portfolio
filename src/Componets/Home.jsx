import profile from "../assets/profile1.webp";
import { motion, MotionConfig } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  function activate() {
    setIsVisible(true);
  }
  function deactivate() {
    setIsVisible(false);
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-screen z-100 flex justify-around items-center p-[20px] bg-slate-950/75 ">
        <h1 className="">Thierry_Munderi</h1>
        <nav
          className={
            isVisible
              ? "absolute top:100 flex sm:flex-col items-center gap-4"
              : "sm:hidden md:flex gap-4"
          }
        >
          <a href="#home" onClick={deactivate} className="hover:text-amber-500">
            Home
          </a>
          <a
            href="#about"
            onClick={deactivate}
            className="hover:text-amber-500"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={deactivate}
            className="hover:text-amber-500"
          >
            Projects
          </a>
          <a
            href="#education"
            onClick={deactivate}
            className="hover:text-amber-500"
          >
            Education
          </a>
          <a
            href="#testimonials"
            onClick={deactivate}
            className="hover:text-amber-500"
          >
            Testimonials
          </a>
          <a
            href="#footer"
            onClick={deactivate}
            className="hover:text-amber-500"
          >
            Contacts
          </a>
        </nav>
        <FaHome
          onClick={activate}
          className="sm:flex md:hidden cursor-pointer"
        />
      </div>
      <div className="flex flex-row items-center gap-5 w-full">
        <div>
          <motion.h1
            initial={{ x: -50, opacity: 0, scale: 0.5 }}
            whileInView={{
              x: [0, 70, 0],
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0.4, 0.7, 1],
            }}
            className="font-bold text-[2.5rem]"
          >
            Hi, I'm Thierry Munderi
          </motion.h1>
          <MotionConfig
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <motion.h2
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
              className="font-semibold text-[1.2rem] text-blue-500"
            >
              Frontend Developer | UI Engineer | Problem Solver
            </motion.h2>
            <motion.p
              initial={{
                x: -100,
              }}
              whileInView={{
                x: 0,
              }}
              className="text-base/6 text-[0.9rem]"
            >
              I build responsive, performant, and user-focused web applications
              using modern Frontend technologies like JavaScript, React and
              Tailwind CSS. Bringing clean design and efficient code together to
              create intuitive digital experiences
            </motion.p>
            <motion.button
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition text-white font-bold cursor-pointer"
            >
              Contact Me
            </motion.button>
          </MotionConfig>
        </div>
        <motion.img
          initial={{
            opacity: 0,
            scale: 0.5,
            y: -100,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, 100, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            times: [0.3, 0.6, 1],
          }}
          src={profile}
          className="w-1/3 rounded-full bg-slate-950/80 border-5 border-sky-200/80"
          alt="profile-image"
        />
      </div>
    </>
  );
}
