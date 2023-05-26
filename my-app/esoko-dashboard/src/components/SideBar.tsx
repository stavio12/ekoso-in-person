import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {" "}
      <section id="Sidebar">
        <div
          className="sidebar pe-4* pb-3 shadow-sm border-end"
          style={{ height: "100vh", background: "#0d3b77" }}
        >
          <nav className="navbar ">
            <Link to="/" className="navbar-brand mx-4* mb-3 mx-auto">
              <h1>Esoko</h1>{" "}
            </Link>
            {/* <hr className="border-bottom w-100 " /> */}
            <div className="navbar-nav w-100 d-flex flex-column gap-4">
              <NavLink
                to="/"
                // className="nav-item nav-link d-flex align-items-center px-5 active text-white"
                className={({ isActive }) =>
                  isActive
                    ? "nav-item nav-link d-flex align-items-center px-5 active text-white"
                    : "nav-item nav-link d-flex align-items-center px-5  text-white"
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/users"
                // className="nav-link d-flex align-items-center px-5 text-white"
                className={({ isActive }) =>
                  isActive
                    ? "nav-item nav-link d-flex align-items-center px-5 active text-white"
                    : "nav-item nav-link d-flex align-items-center px-5  text-white"
                }
              >
                Users
              </NavLink>
            </div>
          </nav>
        </div>
      </section>{" "}
    </>
  );
};

export default Sidebar;
