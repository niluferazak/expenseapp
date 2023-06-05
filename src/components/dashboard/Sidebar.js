import React, { Children } from "react";
import "./Sidebar.css";

import {
  FaTh,
  FaUserAlt,
  FaRegChartBar,
  FaThList,
  FaBars,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

const Sidebar = ({Children }) => {
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },

    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/add/expenses",
      name: "Add Expenses",
      icon: <FaRegChartBar />,
    },

   
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Expense Tracker</h1>
          <div className="bars">
            <FaBars />
          </div>
        </div>

        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link "
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link-text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{Children}</main>
    </div>
  );
};
export default Sidebar;
