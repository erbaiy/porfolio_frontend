// import { createBrowserRouter } from "react-router-dom";
// export const router: Router = createBrowserRouter(
//   routers[
//     {
//       path: "/",
//       elemant: <p>hi from hom</p>,
//     }
//   ]
// );
// import { BrowserRouter as Router, Route } from "react-router-dom";

// const router = (
//   <Router>
//     <Route path="/" component={() => <p>hi from home</p>} />
//   </Router>
// );

// export default router;
import { createBrowserRouter } from "react-router-dom";
import Users from "../pages/Home";
import Layout from "../layouts/layout";
import Experiences from "../pages/Experience";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Users />, // Wrap JSX with parentheses
      },
      {
        path: "/login",
        element: <p>The Login</p>, // Wrap JSX with parentheses
      },
      {
        path: "Experiences",
        element: <Experiences />, // Wrap JSX with parentheses
      },
      {
        path: "/informationPersonnelles",
        element: <p>Information Personnelles</p>, // Wrap JSX with parentheses
      },
      {
        path: "/formations",
        element: <p>Formations</p>, // Wrap JSX with parentheses
      },
      {
        path: "/experiences",
        element: <p>Experiences</p>, // Wrap JSX with parentheses
      },
    ],
  },
]);
