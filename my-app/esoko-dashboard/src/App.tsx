import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="row">
      <div className="col-2 pe-0">
        <Sidebar />
      </div>
      <div className="col-10 ps-0 pe-0">
        <Header />

        <div className="container pt-4 px-5">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
