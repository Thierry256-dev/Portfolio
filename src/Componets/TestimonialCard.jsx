import { FaUserCircle } from "react-icons/fa";

export default function TestimonialCard() {
  return (
    <>
      <div className="bg-sky-200/85 p-4 rounded-xl font-bold flex flex-col gap-4 w-[350px]">
        <div className="flex gap-4 items-center">
          <div>
            <FaUserCircle className="w-20 h-20 rounded-full text-black bg-sky-300 border-2 border-white" />
          </div>
          <div>
            <p className="text-xl">Client</p>
            <p>client@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="bg-sky-600/20 p-2 rounded-md font-normal shadow-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consectetur Lorem ipsum dolor sit amet consectetur adipisicing
          </p>
        </div>
      </div>
    </>
  );
}
