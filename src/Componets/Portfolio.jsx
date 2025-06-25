import { Outlet } from "react-router-dom";

export default function Portfolio() {
  return (
    <>
      <div>
        <div>Home</div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
}
