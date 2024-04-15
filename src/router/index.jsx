import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/Home";
import Layout from "../layouts/layout";
import Experiences from "../pages/Experience";
import Dashboard from "../Dashboard";
import Formation from "../pages/Formation";
import Login from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // default route under '/' handled by Layout
        element: <Users />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "experiences",
        element: <Experiences />,
      },
      {
        path: "informationPersonnelles",
        element: <Dashboard />,
      },
      {
        path: "formations",
        element: <Formation />,
      },
    ],
  },
]);
