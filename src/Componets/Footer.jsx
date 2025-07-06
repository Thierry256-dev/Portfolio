import { FaLinkedin, FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";
import { motion, MotionConfig, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const emailTabRef = useRef(null);
  const isEmailTabInView = useInView(emailTabRef, { once: true });

  function sendEmail(e) {
    e.preventDefault();

    /*
    emailjs.sendForm(
      'service_s8uct2q',
      'template_759v7dh',
      e.target,
      '01tt5pZprlNmyi4_F'
    ).then((result) => {
      window.alert('Email sent');
      console.log('Email sent', result.text);
    },(error) => {
      console.error('Error', error.text);
    });
*/
  }

  return (
    <>
      <div className="bg-black/60 text-white/80 flex flex-col gap-4">
        <motion.div
          ref={emailTabRef}
          initial={{
            opacity: 0,
            rotateX: "-180deg",
            rotateY: "-180deg",
          }}
          animate={
            isEmailTabInView
              ? {
                  rotateX: "0deg",
                  rotateY: "0deg",
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          className="flex items-center flex-col gap-4 bg-gray-950/75 p-4 rounded-xl m-4 "
        >
          <h2 className="text-xl font-bold text-orange-400/95 text-center lg:text-3xl">
            Are you looking forward to grow your business ?
          </h2>
          <h3 className="text-md font-noraml text-slate-200 lg:text-xl">
            Get in touch for a proffessional website...
          </h3>
          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-4 items-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border-1 border-sky-200/20 rounded-md h-10 w-[100%] p-2 bg-black/60"
            />
            <textarea
              name="message"
              id="message"
              required
              placeholder="Enter your message"
              className="h-20 block w-[100%] bg-black/60 border-1 border-sky-200/20 rounded-md p-2 lg:w-[600px] lg:h-[200px]"
            ></textarea>
            <div className="flex gap-2">
              <input
                type="email"
                name="email"
                required
                placeholder="client@gmail.com"
                className="border-1 border-sky-200/20 rounded-md h-10 w-[85%] p-2 bg-black/60 lg:w-[500px]"
              />
              <button
                type="submit"
                className="bg-black/60 border-1 border-sky-200/20 p-2 transition duration-300 ease hover:bg-sky-200 hover:text-black/90 rounded-sm text-sky-200 font-bold cursor-pointer w-[25%] lg:w-[80px]"
              >
                Submit
              </button>
            </div>
          </form>
        </motion.div>
        <hr className="bg-sky-800" />
        <div className="flex flex-col gap-4 mx-6 my-2">
          <div className="flex flex-col p-4 justify-center md:grid md:grid-cols-2 lg:grid-cols-4 md:p-8 lg:gap-1 gap-4">
            <MotionConfig transition={{ duration: 1, ease: "easeIn" }}>
              <div className="text-slate-400">
                <motion.h3
                  initial={{
                    opacity: 0,
                    x: -200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  className="text-2xl font-bold text-slate-300"
                >
                  Contact Info
                </motion.h3>
                <motion.label
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  htmlFor=""
                >
                  Tel:
                  <span> +256702792026 / +250795751685</span>
                </motion.label>
                <br />
                <motion.label
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  htmlFor=""
                >
                  Email:
                  <span> thierrymunderi@gmail.com</span>
                </motion.label>
              </div>
              <div className="flex flex-col gap-2">
                <motion.h3
                  initial={{
                    opacity: 0,
                    x: 200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  className="text-2xl font-bold text-slate-300"
                >
                  Profiles
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="flex items-center gap-2 pl-4"
                >
                  <a href="https://github.com/thierry256-dev" target="_blank">
                    <FaGithub className="w-8 h-8 " />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/munderi-thierry-56124733b"
                    target="_blank"
                  >
                    <FaLinkedin className="w-8 h-8 " />
                  </a>
                  <a href="https://wa.me/256702792026" target="_blank">
                    <FaWhatsapp className="w-8 h-8 " />
                  </a>
                  <a
                    href="https://instagram.com/t.h.i.e.r.r.y_250"
                    target="_blank"
                  >
                    <FaInstagram className="w-8 h-8 " />
                  </a>
                </motion.div>
              </div>
              <div className="text-slate-400">
                <motion.h3
                  initial={{
                    opacity: 0,
                    x: -200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  className="text-2xl font-bold text-slate-300"
                >
                  Services
                </motion.h3>
                <motion.ul className="list-disc pl-8">
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Custom Web Design
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Mobile-responsive layouts
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Landing Pages and personal portfolio
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Business, Blog and E-commerce sites
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Fixing Bugs and performance improvements
                  </motion.li>
                </motion.ul>
              </div>
              <div className="text-slate-400">
                <motion.h3
                  initial={{
                    opacity: 0,
                    x: 200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  className="text-2xl font-bold text-slate-300"
                >
                  Why My services
                </motion.h3>
                <ul className="list-disc pl-8">
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Fast Delivery
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Clean, SEO friendly Code
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Modern Responsive Design
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Affordable Pricing
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Attention to Detail
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                  >
                    Reliable Support
                  </motion.li>
                </ul>
              </div>
            </MotionConfig>
          </div>
        </div>
        <div className="text-center text-sm bg-black p-4 text-stone-500">
          <p>&copy;2025 All rights reseverd. Thierry_Munderi.</p>
        </div>
      </div>
    </>
  );
}
