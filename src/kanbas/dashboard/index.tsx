import React from "react";
import { Link } from "react-router-dom";
import { courses } from "../database";
import { FaBook } from "react-icons/fa";
import "./index.css";
function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (7)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4 d-flex flex-wrap">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300, paddingTop: 30, paddingBottom: 30 }}>
              <div className="card" style={{textWrap: "nowrap", whiteSpaceCollapse: "collapse"}}>
                <Link to={`/Kanbas/Courses/${course._id}`}>
                  <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }} alt=""/>
                </Link>
                <div className="card-body">
                  <Link to={`/Kanbas/Courses/${course._id}`}>
                    <p className="card-title">{course.number} 39590 {course.name}</p>
                    <p className="body-text-card">{course.number}.39590.202430<br/>
                      <span className="sub-text-card">202430_1 Spring 2024 Semester Full Term</span>
                    </p>
                  </Link>
                  <Link className="assignments-icon" to={`/Kanbas/Courses/${course._id}/Assignments`}>
                    <FaBook className="d-block" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;