import { NavLink } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const DashboardNavbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const links = (
    <>
      <NavLink
        to="/dashboard/userHome"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-yellow-300 " : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
          Dashboard
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/completeCourses"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-yellow-300 " : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
          Complete Courses
        </li>
      </NavLink>

      <div className=" h-px bg-white my-3 "></div>

      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-yellow-300 " : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
          Home
        </li>
      </NavLink>
      <NavLink
        to="/courses"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-yellow-300" : ""
        }
      >
        <li className="py-2 px-4 text-base hover:text-red-400 font-medium">
          All Courses
        </li>
      </NavLink>
      <li>
        <button
          onClick={handleLogOut}
          className="py-2 px-3 lg:pl-4 text-base hover:text-red-400 font-medium"
        >
          Log out
        </button>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-10 bg-gray-600 border-b-2 text-white">
      <div className="navbar w-full max-w-[1440px] mx-auto pr-4 lg:pr-10">
        <div className="navbar-start w-1/4">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="flex items-center navbar-end w-full">
          <div>
            {user && (
              <>
                <div className="flex items-center gap-3">
                  <div className="">
                    <div className="text-right ">
                      <p className="text-[14px]">{user?.displayName}</p>
                      <p className="text-[12px]">{user?.email}</p>
                    </div>
                  </div>
                  <img
                    className="w-[40px] border-4 border-white rounded-full"
                    src={user?.photoURL}
                  ></img>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
