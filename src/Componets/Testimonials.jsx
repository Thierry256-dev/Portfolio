import TestimonialCard from "./TestimonialCard";
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorBoundary from "./ErrorBoundary";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbzLH4dAVsvQj5tsKSEvQnmIzV10KXVqrBelBUVbhw4m2SINBUlpNgb0GF1pbW_oendu9g/exec"
      )
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="flex w-full relative flex-col items-center z-5 overflow-y-auto max-h-[550px] md:h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:items-center md:justify-center  gap-4">
          {testimonials
            .slice()
            .reverse()
            .map((t, i) => (
              <TestimonialCard
                key={i}
                name={t.Name}
                email={t.Email}
                testimonial={t.Testimonial}
              />
            ))}
        </div>
        <div>
          <a href="https://forms.gle/bYSXNxnjdXGJkt1s6" target="_blank">
            <button className="bg-black/90 text-white px-6 py-4 sticky bottom-0 right-0 transition duration-300 hover:bg-slate-500 hover:text-black bover:border-1 hover:border-black rounded-lg mt-4 cursor-pointer">
              Add Yours
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
