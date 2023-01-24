import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavLink
          className={({ isActive }) =>
            ["nav-item", isActive ? "active" : undefined]
              .filter(Boolean)
              .join(" ")
          }
          to="/binance/settings/ticker"
        >
          Create Trade
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ["nav-item", isActive ? "active" : undefined]
              .filter(Boolean)
              .join(" ")
          }
          to="/binance/log"
        >
          Trade Log
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ["nav-item", isActive ? "active" : undefined]
              .filter(Boolean)
              .join(" ")
          }
          to="/binance/active"
        >
          Active Trade
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
