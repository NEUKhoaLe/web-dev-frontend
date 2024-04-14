import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { Course } from "../types";
import "./index.css";
function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }:
  { courses: Course[], 
    course: Course, 
    setCourse: React.Dispatch<React.SetStateAction<Course>>, 
    addNewCourse: () => void,
    deleteCourse: (courseId: string) => void, 
    updateCourse: () => void }
) {

  return (
    <div className="p-4">
      <h1>Dashboard</h1>   
      <div style={{maxWidth: 200}}>
        <h5>New Course</h5>
        <input value={course.name} className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } /> 
        <div className="mt-2">
          <button onClick={addNewCourse} style={{width: 100}}>
            Add
          </button>
          <button onClick={updateCourse} style={{width: 100}}>
            Update
          </button>
        </div>        
      </div> 
      <hr />
      <h2>Published Courses (7)</h2> 
      <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4 d-flex flex-wrap">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300, paddingTop: 30, paddingBottom: 30 }}>
              <div className="card" style={{textWrap: "nowrap", whiteSpaceCollapse: "collapse"}}>
                <Link to={`/Kanbas/Courses/${course._id}`}>
                  <img src={`/images/gray.jpg`} className="card-img-top" style={{ height: 150 }} alt=""/>
                </Link>
                <div className="card-body">
                  <Link to={`/Kanbas/Courses/${course.id}`}>
                    <p className="card-title">{course.number} 39590 {course.name}</p>
                    <p className="body-text-card">{course.number}.39590.202430<br/>
                      <span className="sub-text-card">202430_1 Spring 2024 Semester Full Term</span>
                    </p>
                  </Link>
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <Link className="assignments-icon" to={`/Kanbas/Courses/${course.id}/Assignments`}>
                      <FaBook className="d-block" />
                    </Link>
                    <button onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      style={{width: 70}}>
                      Edit
                    </button>
                    <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        style={{width: 70}}>
                        Delete
                    </button>
                  </div>
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