import React from "react";
import { Table } from "react-bootstrap";
import { User, usersData } from "../../pages/Users";

const UserTable = ({
  setShow,
  setCreate,
}: {
  setShow: (user: User) => void;
  setCreate: (create: boolean) => void;
}) => {
  return (
    <>
      <div className="d-flex justify-content-end align-items-center pb-4">
        <button
          className="btn btn-primary px-3 py-2"
          style={{ fontSize: "13px" }}
          onClick={() => setCreate(true)}
        >
          Add Users
        </button>
      </div>

      <div className="card rounded-3">
        <Table striped hover>
          <thead>
            <tr>
              <th>
                <p className="px-4"> Name </p>
              </th>
              <th>
                <p className="px-4"> Organization </p>
              </th>
              <th>
                <p className="px-4"> Email </p>
              </th>
              <th>
                <p className="px-4"> Balance </p>
              </th>
              <th>
                <p className="px-4"> Date Created </p>
              </th>
              <th>
                <p className="px-4"> Actions </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user: User, index: number) => (
              <tr key={index}>
                <td>
                  <p className="px-4 user-name">
                    <b>{user?.name}</b>
                  </p>
                </td>
                <td>
                  {" "}
                  <p className="px-4">{user?.organization} </p>
                </td>
                <td>
                  {" "}
                  <p className="px-4">{user?.email} </p>
                </td>
                <td>
                  {" "}
                  <p className="px-4">
                    <small>Ghc</small> {user?.balance}{" "}
                  </p>
                </td>
                <td>
                  {" "}
                  <p className="px-4">{user?.date_create} </p>
                </td>
                <td>
                  {" "}
                  <p className="text-center">
                    {" "}
                    <div className="dropdown">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-three-dots-vertical dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg>{" "}
                      <ul className="dropdown-menu">
                        <li>
                          <span
                            className="dropdown-item"
                            onClick={() => setShow(user)}
                          >
                            Edit
                          </span>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Top-Up
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Password Reset
                          </a>
                        </li>
                      </ul>
                    </div>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>{" "}
      </div>
    </>
  );
};

export default UserTable;
