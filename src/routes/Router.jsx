import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import PrivetRoute from "./PrivetRoute";
import Details from "../component/Details";
import AllCourses from "../courses/AllCourses";
import Dashboard from "../pages/dashboard/Dashboard";
import UserHome from "../pages/dashboard/components/userHome/UserHome";
import CompleteCourses from "../pages/dashboard/components/completeCourses/CompleteCourses";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/courses",
        element: <AllCourses />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <Details />
          </PrivetRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    errorElement: <Error />,
    element: (
      <PrivetRoute>
        <Dashboard />
      </PrivetRoute>
    ),
    children: [
      {
        path: "userHome",
        element: (
          <PrivetRoute>
            <UserHome />
          </PrivetRoute>
        ),
      },
      {
        path: "CompleteCourses",
        element: (
          <PrivetRoute>
            <CompleteCourses />
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default Router;
