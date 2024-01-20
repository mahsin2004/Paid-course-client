import { Outlet } from "react-router-dom";
import DashboardNavbar from "./components/DashboardNavbar";
import Sidebar from "./components/sideBar/Sidebar";

const Dashboard = () => {
  return (
    <>
      {/* Sidebar */}
      <div className=" grid lg:grid-cols-12">
        <div className="hidden lg:block lg:col-span-3 min-h-screen bg-gray-600">
          <Sidebar />
        </div>

        {/* Content Part */}
        <div className="lg:col-span-9">
          <DashboardNavbar />
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
