import { FaUserCircle } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TestimonialCard({ name, email, testimonial }) {
  const testimonialRef = useRef(null);
  const isTestimonialInView = useInView(testimonialRef, { once: true });

  return (
    <>
      <motion.div
        ref={testimonialRef}
        initial={{
          scale: 0.5,
          opacity: 0,
        }}
        animate={
          isTestimonialInView
            ? {
                scale: 1,
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="bg-gray-950 p-4 rounded-xl font-bold flex flex-col gap-4 md:w-[350px] text-white/70"
      >
        <div className="flex gap-4 items-center">
          <div>
            <FaUserCircle className="w-15 md:w-20 h-15 md:h-20 rounded-full text-black bg-slate-600 border-2 border-white/60" />
          </div>
          <div>
            <p className="text-xl">{name || "Client"}</p>
            <p>{email || "client@gmail.com"}</p>
          </div>
        </div>
        <div>
          <p className="bg-slate-900/60 p-2 rounded-md font-normal shadow-lg">
            {testimonial ||
              "Lorem ipsum dolor, sit amet consectetur adipisicin elit. Consectetur Lorem ipsum dolor sit amet consectetur adipisicing"}
          </p>
        </div>
      </motion.div>
    </>
  );
}
