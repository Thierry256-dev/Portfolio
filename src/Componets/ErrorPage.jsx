import { useRouteError } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <div className="text-white flex flex-col items-center h-screen justify-center gap-4 font-bold">
        <p className="text-3xl ">Oops!!</p>
        <p className="text-2xl">
          Something went wrong <FaSadCry className="inline text-amber-500" />
        </p>
        <p className="text-gray-500 text-xl italic bg-white/10 p-4 rounded-full">
          {error.status}
          {error.message}
        </p>
      </div>
    </>
  );
}
