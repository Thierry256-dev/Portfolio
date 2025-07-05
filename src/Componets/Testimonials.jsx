import TestimonialCard from "./TestimonialCard";
import { useState, useEffect } from "react";
import axios from "axios";
import ErrorBoundary from "./ErrorBoundary";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const test = [
    {
      name: "Client1",
      email: "client1@gmail.com",
      testimonial: "Lorem is good",
    },
  ];

  useEffect(() => {
    axios
      .get("")
      .then((res) => setTestimonials(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="flex relative flex-col items-center z-5 overflow-y-auto h-[550px] md:h-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:items-center md:justify-center  gap-4">
          {test.map((t, i) => (
            <TestimonialCard
              key={i}
              name={t.Name}
              email={t.Email}
              testimonial={t.Testimonial}
            />
          ))}
          <TestimonialCard />
        </div>
        <div>
          <a href="https://forms.gle/bYSXNxnjdXGJkt1s6" target="_blank">
            <button className="bg-black text-white px-6 py-4 sticky bottom-0 right-0 transition duration-300 hover:bg-sky-300/75 hover:text-black bover:border-1 hover:border-black rounded-lg mt-4 cursor-pointer">
              Add Yours
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
