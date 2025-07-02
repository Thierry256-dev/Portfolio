import TestimonialCard from "./TestimonialCard";
import { useState } from "react";

export default function Testimonials() {
  const [isActive, setIsActive] = useState(false);

  function activate() {
    setIsActive(true);
  }
  function deactivate() {
    setIsActive(false);
    window.alert("Thankyou For your Review");
  }

  return (
    <>
      <div className="flex relative flex-col items-center z-5 overflow-y-auto h-[550px] md:h-auto">
        <div
          className={
            isActive
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 blur-[8px]"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:items-center md:justify-center  gap-4"
          }
        >
          <TestimonialCard />
          <TestimonialCard />
        </div>
        <div>
          <button
            className={
              isActive
                ? "bg-black text-white px-6 py-4 rounded-lg mt-4 cursor-pointer blur-[8px]"
                : "bg-black text-white px-6 py-4 absolute bottom-0 right-0 transition duration-300 hover:bg-sky-300/75 hover:text-black bover:border-1 hover:border-black rounded-lg mt-4 cursor-pointer"
            }
            onClick={activate}
          >
            Add Yours
          </button>
        </div>
        <div
          className={
            isActive
              ? "absolute h-auto w-[90%] bg-gray-950 p-6 flex flex-col top-6 z-5 items-center justify-center gap-2 rounded-lg text-white/70 "
              : "hidden"
          }
        >
          <h3 className="text-sky-200 font-bold">
            Describe your Business Experience with Thierry
          </h3>
          <div className="font-bold gap-1 flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name=""
              id="name"
              placeholder="Client"
              className="bg-gray-400 p-2 rounded-lg h-10 w-90 text-black"
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              id="email"
              placeholder="client@gmail.com"
              className="bg-gray-400 p-2 rounded-lg h-10 w-90 text-black"
            />
          </div>
          <textarea
            name=""
            id=""
            placeholder="Add review"
            className="bg-gray-400 p-2 rounded-lg h-25 w-full text-black"
          />
          <button
            className="border-1 border-white/50 text-sky-300 font-bold rounded-full p-2 cursor-pointer"
            onClick={deactivate}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
