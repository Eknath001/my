import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="scale-[0.9] origin-top w-full h-full">
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default MainLayout;
