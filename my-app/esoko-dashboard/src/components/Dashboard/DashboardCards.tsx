import React from "react";
import { Card } from "react-bootstrap";

const DashboardCards = () => {
  return (
    <>
      <div className="row ">
        <div className="col-6 pb-5">
          <Card className="py-5 rounded-3">
            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Title style={{ fontSize: "40px" }}> 200</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                No Users{" "}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="col-6 pb-5">
          {" "}
          <Card className="py-5 rounded-3">
            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Title style={{ fontSize: "40px" }}>
                <small style={{ fontSize: "25px" }}>Ghc</small>
                500
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                No Sms Credit{" "}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="col-6 pb-5">
          {" "}
          <Card className="py-5 rounded-3">
            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Title style={{ fontSize: "40px" }}>
                {" "}
                <small style={{ fontSize: "25px" }}>Ghc</small>
                500
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                No Topups{" "}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
        <div className="col-6 pb-5">
          {" "}
          <Card className="py-5 rounded-3">
            <Card.Body className="d-flex justify-content-center flex-column align-items-center">
              <Card.Title style={{ fontSize: "40px" }}> 9000</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                No Organizations{" "}
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default DashboardCards;
