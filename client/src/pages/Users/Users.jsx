import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import "./Users.css";
import UsersList from "./UsersList";
import { useLocation } from "react-router-dom";
const Users = () => {
  const location = useLocation();
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "1250px",
        display: "flex",
        width: "100%",
        margin: "1% auto",
        gap: "10px",
      }}
    >
      <LeftSidebar />
      <div style={{ marginTop: "30px" }}>
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        {location.pathname === "/Users" ? <UsersList /> : <></>}
      </div>
    </div>
  );
};

export default Users;
