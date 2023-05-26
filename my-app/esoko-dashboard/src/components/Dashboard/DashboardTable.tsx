import React from "react";
import { Card } from "react-bootstrap";
import { User, usersData } from "../../pages/Users";

const DashboardTable = () => {
  return (
    <>
      {" "}
      <section id="DashboardTable">
        <div
          className=" pb-3 shadow-sm border-end bg-white px-3 shadow-md rounded-3"
          style={{ height: "73vh", overflow: "hidden", overflowX: "scroll" }}
        >
          <h5 className="pt-3">Recent Tops</h5>
          <div className="user d-flex flex-column gap-3 pt-2">
            {usersData.map((user: User) => (
              <Card>
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <small>GHC</small> {user?.balance}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {user?.name}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </section>{" "}
    </>
  );
};

export default DashboardTable;
