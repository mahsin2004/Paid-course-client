import { MdDashboard, MdHome, MdLogout, MdTaskAlt } from "react-icons/md";
import { IoIosList } from "react-icons/io";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hook/useAuth";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };
  return (
    <div className="">
      <div className="hidden lg:block">
        <div className="flex flex-col justify-center items-center pt-4">
          <img
            className="w-24"
            src="https://i.postimg.cc/ydJtjh0Q/education-White.png"
            alt="logo"
          />
          <p className=" uppercase text-[22px] font-bold text-white">Paid Courses</p>
        </div>
      </div>

      <div className="flex items-center pl-10 pt-6 text-white">
        <MdDashboard className="text-2xl" />
        <NavLink
          to="/dashboard/userHome"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-300" : ""
          }
        >
          <li className="py-2 text-lg pt-3 pl-3 list-none hover:text-red-400 font-medium">
            Dashboard
          </li>
        </NavLink>
      </div>

      <div className="flex items-center pl-10 text-white pb-2">
        <MdTaskAlt className="text-[23px]" />
        <NavLink
          to="/dashboard/completeCourses"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-300" : ""
          }
        >
          <li className="py-2 pt-3 pl-3  list-none text-lg hover:text-red-400 font-medium">
            Complete Courses
          </li>
        </NavLink>
      </div>

      <div className=" h-px bg-white my-3 mx-auto w-11/12"></div>

      <div className="flex items-center pl-10 text-white pt-2">
        <MdHome className="text-2xl" />
        <NavLink to="/">
          <li className="py-2 text-lg pt-3 pl-3 list-none hover:text-red-400 font-medium">
            Home
          </li>
        </NavLink>
      </div>

      <div className="flex items-center pl-10 text-white">
        <IoIosList className="text-2xl" />
        <NavLink to="/courses">
          <li className="py-2 pt-3 pl-3  list-none text-lg hover:text-red-500 font-medium">
            All Courses
          </li>
        </NavLink>
      </div>

      {user && (
        <div className="flex items-center pl-10 text-white">
          <MdLogout className="text-2xl" />
          <button
            onClick={handleLogOut}
            className="py-2 px-3 lg:pl-4 text-base hover:text-red-500 font-medium"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
