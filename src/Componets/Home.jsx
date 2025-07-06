import profile from "../assets/profile1.webp";
import { motion, MotionConfig, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
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
        <h1 className="font-bold text-blue-500 text-[1.2rem]">Portfolio</h1>
        <motion.nav
          className={
            isVisible
              ? "absolute top-[60px] right-0 bg-slate-950/75 flex flex-col rounded-md p-4 items-center gap-4"
              : "hidden md:flex gap-4"
          }
          initial={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
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
        </motion.nav>
        <FaBars
          onClick={activate}
          className={
            isVisible ? "hidden" : "flex md:hidden h-6 w-6 cursor-pointer"
          }
        />
        <FaTimes
          onClick={deactivate}
          className={
            isVisible ? "flex md:hidden cursor-pointer h-6 w-6" : "hidden"
          }
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center lg:justify-around gap-5 w-full">
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
            className="font-bold text-[2.5rem] lg:text-6xl"
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
              className="font-semibold text-[1.2rem] text-blue-400 lg:text-3xl"
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
              className="text-base/6 text-md text-white/70 lg:text-xl lg:w-[800px]"
            >
              I build responsive, performant, and user-focused web applications
              using modern Frontend technologies like JavaScript, React and
              Tailwind CSS. Bringing clean design and efficient code together to
              create intuitive digital experiences
            </motion.p>
            <a href="https://wa.me/256702792026" target="_blank">
              <motion.button
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="bg-purple-950 hover:bg-[#25D366] px-6 py-2 rounded-lg transition text-white font-bold cursor-pointer lg:text-xl"
              >
                Let's Chat <FaWhatsapp className="inline" />
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
              <motion.a
                href="https://www.linkedin.com/in/munderi-thierry-56124733b"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, color: "#0077B5" }}
                transition={{ duration: 0.5, ease: "easeIn" }}
              >
                <FaLinkedin className="w-7 h-7" />
              </motion.a>
              <motion.a
                href="https://instagram.com/t.h.i.e.r.r.y_250"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, color: "#E1306C" }}
                transition={{ duration: 0.5, ease: "easeIn" }}
              >
                <FaInstagram className="w-7 h-7" />
              </motion.a>
              <motion.a
                href="https://github.com/thierry256-dev"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2, color: "#181717" }}
                transition={{ duration: 0.5, ease: "easeIn" }}
              >
                <FaGithub className="w-7 h-7" />
              </motion.a>
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
          whileHover={{
            scale: 1.1,
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0.3, 0.6, 1],
          }}
          src={profile}
          className="w-1/3 rounded-full bg-black/60 border-5 border-white/50 lg:w-1/3"
          alt="profile-image"
        />
      </div>
    </>
  );
}
