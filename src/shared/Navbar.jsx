// import React from "react";
// import searchIcon from "../assets/icons/searchicon.svg";
// import bellIcon from "../assets/icons/notificationicon.svg";
// import userIcon from "../assets/icons/profile.svg";

// const Navbar = () => {
//   return (
//     <nav className="w-full h-12 2xl:h-16  bg-white border-b border-[#F2F2F2] flex items-center justify-between px-6 py-2 z-10">
//       {/* Left side - can add breadcrumbs or page title */}
//       <div className="flex items-center">
//         <h1 className="text-lg font-semibold text-gray-800 font-primary">Dashboard</h1>
//       </div>

//       {/* Right Icons */}
//       <div className="flex items-center gap-4">
//         <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
//           <img src={searchIcon} alt="Search" className="w-8 h-8 2xl:w-8 2xl:h-8" />
//         </button>
//         <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
//           <img src={bellIcon} alt="Notifications" className="w-8 h-8 2xl:w-8 2xl:h-8" />
//         </button>
//         <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
//           <img src={userIcon} alt="Profile" className="w-8 h-8 2xl:w-8 2xl:h-8" />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import searchIcon from "../assets/icons/searchicon.svg";
import bellIcon from "../assets/icons/notificationicon.svg";
import userIcon from "../assets/icons/profile.svg";

const Navbar = () => {
  const location = useLocation();
  const params = useParams();

  // Create breadcrumb array based on path
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="border-b border-[#F2F2F2]   sm:w-full w-full h-12 2xl:h-16 bg-white flex items-center justify-between lg:justify-between px-6 py-2 z-50 ">
      {/* Left side - Breadcrumbs */}
      <div className="flex lg:hidden "></div>
      <div className="hidden lg:flex justify-between flex-wrap items-center text-right sm:gap-2 font-primary  text-[#ADB5BD] text-sm  ">
        <Link to="/" className="hover:text-gray-500">
          Dashboard
        </Link>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          // Decode %20 etc.
          let displayName = decodeURIComponent(name);

          // If it's a number, show Student + id
          if (!isNaN(displayName)) {
            displayName = `Student ${displayName}`;
          } else {
            displayName =
              displayName.charAt(0).toUpperCase() + displayName.slice(1);
          }

          return isLast ? (
            <span key={name} className="text-green-600 font-medium">
              {" > "} {displayName.replace("-", " ")}
            </span>
          ) : (
            <Link
              key={name}
              to={routeTo}
              className="hover:text-gray-500 text-[#ADB5BD]"
            >
              {" > "} {displayName.replace("-", " ")}
            </Link>
          );
        })}
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-0 sm:gap-1 ">
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
          <img
            src={searchIcon}
            alt="Search"
            className="w-8 h-8 2xl:w-8 2xl:h-8"
          />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
          <img
            src={bellIcon}
            alt="Notifications"
            className="w-8 h-8 2xl:w-8 2xl:h-8"
          />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
          <img
            src={userIcon}
            alt="Profile"
            className="w-8 h-8 2xl:w-8 2xl:h-8"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
