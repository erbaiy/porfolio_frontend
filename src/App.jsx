import React from "react";
import { router } from "./router/index.jsx";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import FormationList from "./components/FormationList";
// import AboutPage from "./components/AboutPage";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Routes>
//           <Route path="/" element={<FormationList />} />
//           <Route path="/about" element={<AboutPage />} />
//         </Routes>
//         <Link to="/about">About</Link>

//         <Sidebar />
//         {/* <FormationList /> */}
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

// import React from "react";
// import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import FormationList from "./components/FormationList";
// import AboutPage from "./components/AboutPage";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <Routes>
//           <Route path="/" element={<FormationList />} />
//           <Route path="/about" element={<AboutPage />} />
//         </Routes>
//         <Link to="/about">About</Link>

//         <Sidebar />
//         {/* <FormationList /> */}
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
