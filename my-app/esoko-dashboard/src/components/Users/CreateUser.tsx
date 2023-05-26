import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface props {
  create: boolean;
  setCreate: (create: boolean) => void;
}

const Create = ({ create, setCreate }: props) => {
  return (
    <>
      {" "}
      <section id="Create">
        <Modal show={create!} onHide={() => setCreate(false)}>
          <Form>
            <Modal.Header closeButton>
              <Modal.Title> Create User </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Organization</Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Balance</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Save{" "}
              </Button>
            </Modal.Footer>{" "}
          </Form>
        </Modal>
      </section>{" "}
    </>
  );
};

export default Create;
