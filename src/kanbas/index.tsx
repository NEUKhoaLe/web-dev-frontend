import KanbasNavigation from "./navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Courses from "./courses";

function Kanbas() {
  return (
    <div className="d-flex" style={{height: '100%'}}>
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
    </div>
);}
export default Kanbas;