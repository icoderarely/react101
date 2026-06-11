import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import Home from "../Home/Home";

const Admin = () => {
  const user = { role: "user" };

  if (user.role !== "admin") {
    // return <Navigate to={<Home />} />;
    return <Navigate to="/" />;
  }
  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <Link to="/admin/sales">Sales</Link>
        </li>
        <li>
          <Link to="/admin/sellers">Sellers</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Admin;
