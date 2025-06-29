import profile from "../assets/profile1.webp";
import { motion, MotionConfig } from "framer-motion";
import {
  FaHome,
  FaTimes,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
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
      <div className="fixed top-0 left-0 w-screen z-100 flex justify-between items-center p-[20px] bg-slate-950/75 ">
        <h1>Thierry_Munderi</h1>
        <nav
          className={
            isVisible
              ? "absolute top-[60px] right-0 bg-slate-950/75 flex flex-col rounded-md p-4 items-center gap-4"
              : "hidden md:flex gap-4"
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
          className={
            isVisible ? "hidden" : "flex md:hidden h-7 w-7 cursor-pointer"
          }
        />
        <FaTimes
          onClick={deactivate}
          className={
            isVisible ? "flex md:hidden cursor-pointer h-7 w-7" : "hidden"
          }
        />
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center gap-5 w-full">
        <div className="flex flex-col gap-2 items-center">
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
              className="font-semibold text-[1.2rem] text-blue-400"
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
              className="text-base/6 text-md"
            >
              I build responsive, performant, and user-focused web applications
              using modern Frontend technologies like JavaScript, React and
              Tailwind CSS. Bringing clean design and efficient code together to
              create intuitive digital experiences
            </motion.p>
            <a href="">
              <motion.button
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                className="bg-purple-950 hover:bg-blue-700 px-6 py-2 rounded-lg transition text-white font-bold cursor-pointer"
              >
                Let's Chat
              </motion.button>
            </a>
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              className="flex gap-4 p-8"
            >
              <a href="">
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a href="">
                <FaInstagram className="w-7 h-7" />
              </a>
              <a href="">
                <FaTiktok className="w-7 h-7" />
              </a>
            </motion.div>
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
