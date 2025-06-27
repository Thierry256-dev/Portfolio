export default function EducationCard({
  achievement,
  institution,
  badge,
  duration,
  comment,
  studyCore,
  emphasis,
}) {
  return (
    <>
      <div className="flex items-start gap-4 font-bold text-md text-white/75 border-4 border-white/35 rounded-xl">
        <img
          src={badge}
          className="w-15 h-15 bg-black rounded-full border-4 border-white/50 shadow absolute left-0 translate-y-[-15%] translate-x-[-50%] mt-1"
        />
        <div className="bg-black/60 p-4 rounded-xl w-full gap-5">
          <h3 className="text-xl text-sky-500/85">{achievement}</h3>
          <ul className="ml-4 bg-black rounded-lg p-4">
            <li>
              <span className="text-slate-500">Institution: </span>{" "}
              <span>{institution}</span>
            </li>
            <li>
              <span className="text-slate-500">Duration: </span>
              <span>{duration}</span>
            </li>
            <li>
              <span className="text-slate-500">StudyCore: </span>
              <span>{studyCore}</span>
            </li>
          </ul>
          <p>{comment}</p>
          <ul className="list-disc ml-6 font-normal bg-black rounded-lg p-4">
            {emphasis.map((item) => (
              <li key={item} className="text-slate-300/75">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
