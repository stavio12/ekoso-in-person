import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { User } from "../../pages/Users";

interface props {
  show: User;
  setShow: (user: User) => void;
}

const EditUsers = ({ show, setShow }: props) => {
  const [selectedUser, setSelectedUser] = useState<User>();

  useEffect(() => {
    setSelectedUser(show!);
  }, [show]);

  const submit = (e: any) => {
    e.preventDefault();

    console.log(selectedUser);
  };

  return (
    <>
      <Modal show={show! ? true : false} onHide={() => setShow(null!)}>
        <Form onSubmit={submit}>
          <Modal.Header closeButton>
            <Modal.Title>
              {" "}
              <b> {show?.name}</b> <small>Details</small>{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser!, name: e.target.value })
                }
                value={selectedUser?.name}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser!, email: e.target.value })
                }
                value={selectedUser?.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Organization</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser!,
                    organization: e.target.value,
                  })
                }
                value={selectedUser?.organization}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Balance</Form.Label>
              <Form.Control
                type="number"
                onChange={(e) =>
                  setSelectedUser({
                    ...selectedUser!,
                    balance: Number(e.target.value),
                  })
                }
                value={selectedUser?.balance}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              Save{" "}
            </Button>
          </Modal.Footer>{" "}
        </Form>
      </Modal>
    </>
  );
};

export default EditUsers;
