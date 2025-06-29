import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function TechStackCard({
  language,
  progress,
  color,
  icon,
  comment,
}) {
  const html = <FaHtml5 key={icon} />;
  const css = <FaCss3 key={icon} />;
  const js = <FaJs key={icon} />;
  const rct = <FaReact key={icon} />;
  const tailwind = <SiTailwindcss key={icon} />;

  const icons = [
    {
      name: "html",
      element: html,
    },
    {
      name: "css",
      element: css,
    },
    {
      name: "js",
      element: js,
    },
    {
      name: "rct",
      element: rct,
    },
    {
      name: "tailwind",
      element: tailwind,
    },
  ];

  return (
    <>
      <div className="flex flex-col ">
        <div className="flex gap-1 items-center">
          <div style={{ color: color }}>
            {icons.map((obj) => {
              if (obj.name === icon) return obj.element;
            })}
          </div>
          <h3>{language}</h3>
        </div>
        <div className="flex">
          <div className="flex items-center rounded-full bg-gray-900 w-100 h-5">
            <div
              className="h-3 rounded-full"
              style={{ backgroundColor: color, width: progress }}
            ></div>
          </div>
          {progress}
        </div>
        <p className="text-stone-500 font-normal text-md">{comment}</p>
      </div>
    </>
  );
}
