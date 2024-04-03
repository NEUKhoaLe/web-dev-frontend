import { Link, useLocation } from "react-router-dom";
import "./index.css";
function CourseNavigation({ courseId }: { courseId: string }) {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings"
  ];
  const { pathname } = useLocation();
  return (
    <>
      <ul className="wd-navigation d-none d-md-block" style={{marginLeft: 24, marginRight: 12}}>
        <span className="d-block">202410_1 Spring 2024 Semester</span>
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link) || 
          (pathname.endsWith(courseId) && link === "Home") 
          ? "wd-active" 
          : ""}>
            <Link to={link === "Home" ? "" : link}>{link}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default CourseNavigation;