import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="font-jost min-h-screen ">
      <div className="max-w-[1800px] mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="content flex-grow">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayout;
