import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Sidebar from "./components/SideBar";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="container-fluid position-relative d-flex p-0">
        <Sidebar />
      </div>
      <div className="content">
        <Header />

        <div className="container-fluid pt-4 px-4* main-content*">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
