import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";

const MainLayout = () => {
  return (
    <div className="font-jost">
      <div className="max-w-[1800px] mx-auto">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
