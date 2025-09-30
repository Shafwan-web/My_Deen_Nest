import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/skoolnest.png";
import schoolLogo from "../assets/icons/DeenNest.svg";
import blackDashboardIcon from "../assets/icons/blackicon.svg";
import whiteDashboardIcon from "../assets/icons/Icons.svg"; // Add your white icon
import { Menu, X } from "lucide-react";

// Menu items with both icons
const menuItems = [
  {
    name: "Dashboard",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/",
  },
  {
    name: "Students",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/students",
  },
  {
    name: "Teachers",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/teachers",
  },
  {
    name: "Staff",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/staff",
  },
  {
    name: "Parents",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/parents",
  },
  {
    name: "Classes",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/classes",
  },
  {
    name: "Division",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/division",
  },
  {
    name: "Subjects",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/subjects",
  },
  {
    name: "Donors",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/donors",
  },
  {
    name: "Configuration",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/configuration",
  },
  {
    name: "Fees Management",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/fees-management",
  },
  {
    name: "Review Management",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/review-management",
  },
  {
    name: "Notice Management",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/notice-management",
  },
  {
    name: "Payroll Management",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/payroll-management",
  },
  {
    name: "Attendance Management",
    iconDefault: blackDashboardIcon,
    iconActive: whiteDashboardIcon,
    path: "/attendance-management",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Toggle button (only on mobile/tablet) */}
      <button
        className="lg:hidden fixed top-1 left-3 z-70 bg-red text-black p-2 rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay when open (mobile only) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <div
        className={`
          fixed lg:static top-12 lg:top-0 left-0 
          h-[calc(100vh-3rem)] lg:h-screen 
          w-full sm:w-56 md:w-52 lg:w-60 xl:w-72
          bg-white border-r border-[#F2F2F2] z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          flex flex-col
        `}
      >
        {/* Logo Section */}
        <div className="p-4  flex flex-col items-center">
          <img src={schoolLogo} alt="Logo" className="mb-4 w-32" />
          <div className="flex items-center w-full bg-[#F2F2F2] p-2 rounded-lg mb-6">
            <img src={schoolLogo} alt="School Logo" className="w-8 h-8 mr-2" />
            <p className=" text-sm font-semibold text-gray-700 font-primary">
              Bright Future Academy
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul className="space-y-2 flex-1  px-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg transition-colors duration-200 font-primary font-bold ${
                    isActive
                      ? "bg-primary text-white font-bold"
                      : "hover:bg-gray-100 text-[#1E293B] "
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <img
                      src={isActive ? item.iconActive : item.iconDefault}
                      alt={`${item.name} icon`}
                      className="w-3.5 h-3.5 mr-3"
                    />
                    <span className="text-sm">{item.name}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
