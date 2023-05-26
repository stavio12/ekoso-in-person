import React from "react";

const Header = () => {
  return (
    <>
      {" "}
      <nav className="navbar bg-body-tertiary py-3">
        <div className="w-100 float-end">
          <div className="d-flex justify-content-between align-items-start text-start float-end pe-3">
            <div
              className="p-2 text-white"
              style={{
                background: "#d3d3d3",
                fontSize: "22px",
                borderRadius: "50%",
              }}
            >
              GA
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
