import React, { useState } from "react";
import UserTable from "../components/Users/UsersTables";
import EditUsers from "../components/Users/EditUsers";
import Create from "../components/Users/CreateUser";

export interface User {
  name: string;
  organization: string;
  balance: number;
  email: string;
  date_create: string;
}

export const usersData: Array<User> = [
  {
    name: "kofi mensah",
    balance: 120,
    organization: "Esoko",
    email: "example@mail.com",
    date_create: "05/05/20",
  },
  {
    name: "kofi Atwaa",
    balance: 120,
    organization: "Arkesel",
    email: "example@mail.com",

    date_create: "05/05/20",
  },
  {
    name: "Kwame mensah",
    balance: 120,
    organization: "Hubtel",
    email: "example@mail.com",

    date_create: "05/05/20",
  },
  {
    name: "Yaw mensah",
    balance: 120,
    organization: "Esoko",
    email: "example@mail.com",
    date_create: "05/05/20",
  },
  {
    name: "Mensah Kwame",
    balance: 120,
    organization: "Esoko",
    email: "example@mail.com",
    date_create: "05/05/20",
  },
  {
    name: "kofi mensah",
    balance: 120,
    organization: "Google",
    email: "example@mail.com",

    date_create: "05/05/20",
  },
  {
    name: "Jerry Eson",
    balance: 120,
    organization: "Ecampus",
    email: "example@mail.com",

    date_create: "05/05/20",
  },
];

const Users = () => {
  const [show, setShow] = useState<User>();
  const [create, setCreate] = useState<boolean>(false);

  return (
    <>
      <UserTable setShow={setShow} setCreate={setCreate} />
      <EditUsers show={show!} setShow={setShow} />
      <Create create={create!} setCreate={setCreate} />
    </>
  );
};

export default Users;
