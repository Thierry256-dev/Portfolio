export default function ProjectCard() {
  return (
    <>
      <div className="flex flex-col gap-2 bg-slate-900 p-2 rounded-xl w-[300px] border-4 border-orange-500/75">
        <div className="h-[200px] overflow-hidden rounded-lg">Image</div>
        <div className="flex flex-col text-slate-500 bg-gray-950 p-2 rounded-lg">
          <p>
            <span>Name: </span>
            <span className="text-amber-400 font-normal">Default</span>
          </p>
          <p>
            <span>Description: </span>
            <span className="text-stone-300 font-normal">Practice</span>
          </p>
          <div className="flex justify-between mt-[10px]">
            <span>Preview</span>
            <a href="" className="text-green-500">
              Live
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
