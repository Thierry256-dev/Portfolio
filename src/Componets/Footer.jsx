import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="bg-black/99 text-white/90 flex flex-col gap-4">
        <div className="flex flex-col gap-4 bg-gray-950/75 p-4 rounded-xl m-4 ">
          <h2 className="text-3xl font-bold text-sky-200 text-center">
            Send an Email
          </h2>
          <div className="flex flex-col gap-4 items-center">
            <textarea
              name=""
              id=""
              placeholder="Enter request"
              className="h-20 block w-100 bg-black/60 border-1 border-sky-200/20 rounded-md p-2"
            ></textarea>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="client@gmail.com"
                className="border-1 border-sky-200/20 rounded-md h-10 w-80 p-2 bg-black/60"
              />
              <button className="bg-black/60 border-1 border-sky-200/20 p-2 rounded-sm text-sky-200 font-bold cursor-pointer w-20">
                Submit
              </button>
            </div>
          </div>
        </div>
        <hr className="bg-sky-800" />
        <div className="flex flex-col gap-4 mx-6 my-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-slate-400">
              <h3 className="text-2xl font-bold text-slate-300">
                Contact Info
              </h3>
              <label htmlFor="">
                Tel:
                <span> +256702792026 / +250795751685</span>
              </label>
              <br />
              <label htmlFor="">
                Email:
                <span> thierrymunderi@gmail.com</span>
              </label>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-slate-300">
                Social Media
              </h3>
              <div className="flex items-center gap-2 pl-6">
                <a href="">
                  <FaLinkedin className="w-8 h-8 " />
                </a>
                <a href="">
                  <FaWhatsapp className="w-8 h-8 " />
                </a>
                <a href="">
                  <FaInstagram className="w-8 h-8 " />
                </a>
              </div>
            </div>
            <div className="text-slate-400">
              <h3 className="text-2xl font-bold text-slate-300">Sevices</h3>
              <ul className="list-disc pl-8">
                <li>Custom Web Design</li>
                <li>Mobile-responsive layouts</li>
                <li>Landing Pages and personal portfolio</li>
                <li>Business, Blog and E-commerce sites</li>
                <li>Fixing Bugs and performance improvements</li>
              </ul>
            </div>
            <div className="text-slate-400">
              <h3 className="text-2xl font-bold text-slate-300">Why Me</h3>
              <ul className="list-disc pl-8">
                <li>Fast Delivery</li>
                <li>Clean, SEO friendly Code</li>
                <li>Modern Responsive Design</li>
                <li>Affordable Pricing</li>
                <li>Attention to Detail</li>
                <li>Reliable Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-sm bg-black p-4 text-stone-500">
          <p>&copy;2025 All rights reseverd. Thierry_Munderi.</p>
        </div>
      </div>
    </>
  );
}
