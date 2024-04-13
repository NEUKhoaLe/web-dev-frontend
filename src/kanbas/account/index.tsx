import Signin from "../../users/Signin";
import Signup from "../../users/Signup";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "../../users/Profile";
import UserTable from "../../users/Table";
export default function Account() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Signin" element={<div><Signin /><Signup /></div>} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Admin/Users" element={<UserTable />} />
      </Routes>
    </div>
  );
}
