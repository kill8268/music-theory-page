import Menu from "@/components/menu";
import Nev from "@/components/nev";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex w-screen h-screen bg-base-200 overflow-auto">
      <Menu />
      <div className="flex flex-col flex-1 overflow-auto">
        <Nev />
        <div className="flex flex-1 overflow-auto mb-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
