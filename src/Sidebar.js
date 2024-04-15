// import React from "react";
// import { FaHome, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
// import "./Dashboard.css"; // Assuming the CSS file is in the same directory
// import { FaBars, FaBellO, FaCommentO } from "react-icons/fa";
// import { MdSearch } from "react-icons/md";
// import { Link } from "react-router-dom";

// function AppName(props) {
//   return (
//     <>
//       <a class="navbar-brand" href="#">
//         {props.appname}
//       </a>
//     </>
//   );
// }
// function Sidebar() {
//   return (
//     <div>
//       <div class="msb" id="msb">
//         <nav class="navbar navbar-default" role="navigation">
//           <div class="navbar-header">
//             <div class="brand-wrapper">
//               <div class="brand-name-wrapper">
//                 <AppName appname="react" />
//               </div>
//             </div>
//           </div>

//           <div class="side-menu-container">
//             <ul class="nav navbar-nav">
//               <li>
//                 <a href="#">
//                   <i class="fa fa-dashboard"></i> Dashboard
//                 </a>
//               </li>
//               <li class="active">{/* <Link to="/about">about</Link> */}</li>
//               <li>
//                 <a href="#">
//                   <i class="fa fa-heart"></i> Extras
//                 </a>
//               </li>

//               <li class="panel panel-default" id="dropdown">
//                 <a data-toggle="collapse" href="#dropdown-lvl1">
//                   <i class="fa fa-diamond"></i> Apps
//                   <span class="caret"></span>
//                 </a>
//                 <div id="dropdown-lvl1" class="panel-collapse collapse">
//                   <div class="panel-body">
//                     <ul class="nav navbar-nav">
//                       <li>
//                         <a href="#">Mail</a>
//                       </li>
//                       <li>
//                         <a href="#">Calendar</a>
//                       </li>
//                       <li>
//                         <a href="#">Ecommerce</a>
//                       </li>
//                       <li>
//                         <a href="#">User</a>
//                       </li>
//                       <li>
//                         <a href="#">Social</a>
//                       </li>

//                       <li class="panel panel-default" id="dropdown">
//                         <a data-toggle="collapse" href="#dropdown-lvl2">
//                           <i class="glyphicon glyphicon-off"></i> Sub Level{" "}
//                           <span class="caret"></span>
//                         </a>
//                         <div id="dropdown-lvl2" class="panel-collapse collapse">
//                           <div class="panel-body">
//                             <ul class="nav navbar-nav">
//                               <li>
//                                 <a href="#">Link</a>
//                               </li>
//                               <li>
//                                 <a href="#">Link</a>
//                               </li>
//                               <li>
//                                 <a href="#">Link</a>
//                               </li>
//                             </ul>
//                           </div>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </li>
//               <li>
//                 <a href="#">
//                   <span class="glyphicon glyphicon-signal"></span> Link
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

import React from "react";
import { FaHome, FaUsers, FaShoppingCart, FaCog } from "react-icons/fa";
import "./Dashboard.css"; // Assuming the CSS file is in the same directory
import { FaBars, FaBellO, FaCommentO } from "react-icons/fa";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";

function AppName(props) {
  return (
    <>
      <a class="navbar-brand" href="#">
        {props.appname}
      </a>
    </>
  );
}
function Sidebar() {
  return (
    <div>
      <div class="msb" id="msb">
        <nav class="navbar navbar-default" role="navigation">
          <div class="navbar-header">
            <div class="brand-wrapper">
              <div class="brand-name-wrapper">
                <AppName appname="___My Portfolio" />
              </div>
            </div>
          </div>

          <div class="side-menu-container">
            <ul class="nav navbar-nav">
              <li>
                <a href="#">
                  <i class="fa fa-dashboard"></i> Profill
                </a>
              </li>
              <li class="active">{/* <Link to="/about">about</Link> */}</li>
              <li>
                <div>
                  {/* Link to the Experiences page */}
                  <Link to="/experiences" className="your-link-class">
                    <i className="fa fa-heart"></i> Experiences
                  </Link>
                </div>
              </li>

              <li class="panel panel-default" id="dropdown">
                <div>
                  {/* Link to the Experiences page */}
                  <Link to="/formations" className="your-link-class">
                    <i className="fa fa-heart"></i> Formations
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
