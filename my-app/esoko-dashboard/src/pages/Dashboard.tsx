import React from "react";
import DashboardCards from "../components/Dashboard/DashboardCards";
import DashboardTable from "../components/Dashboard/DashboardTable";

const Dashboard = () => {
  return (
    <>
      {" "}
      <section id="Dashboard">
        <div className="row pt-3">
          <div className="col-9">
            <DashboardCards />
          </div>
          <div className="col-3">
            <DashboardTable />
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default Dashboard;
