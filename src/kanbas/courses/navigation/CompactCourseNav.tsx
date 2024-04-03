import { FaHome, FaCrosshairs, FaPlug, FaBook, FaRocket, FaUsers, FaComments, FaBullhorn, FaFile, FaFolder, FaListAlt, FaBullseye, FaCircle, FaCog } from "react-icons/fa";
import "./index.css";

function CompactCourseNav() {
  const navElements = [
    {
      icon: <FaHome />,
      text: "Home",
      link: "/Kanbas/Courses/Home/screen.html"
    },
    {
      icon: <FaCrosshairs />,
      text: "Modules",
      link: "/Kanbas/Courses/Modules/screen.html"
    },
    {
      icon: <FaPlug />,
      text: "Piazza",
      link: "http://piazza.com"
    },
    {
      icon: <FaPlug />,
      text: "Zoom",
      link: ""
    },
    {
      icon: <FaBook />,
      text: "Assignments",
      link: "/Kanbas/Courses/Assignments/screen.html"
    },
    {
      icon: <FaRocket />,
      text: "Quizzes",
      link: ""
    },
    {
      icon: <FaBook />,
      text: "Grades",
      link: "/Kanbas/Courses/Grades/screen.html"
    },
    {
      icon: <FaUsers />,
      text: "People",
      link: ""
    },
    {
      icon: <FaPlug />,
      text: "Panopto Video",
      link: ""
    },
    {
      icon: <FaComments />,
      text: "Discussions",
      link: ""
    },
    {
      icon: <FaBullhorn />,
      text: "Announcements",
      link: ""
    },
    {
      icon: <FaFile />,
      text: "Pages",
      link: ""
    },
    {
      icon: <FaFolder />,
      text: "Files",
      link: ""
    },
    {
      icon: <FaListAlt />,
      text: "Rubrics",
      link: ""
    },
    {
      icon: <FaBullseye />,
      text: "Outcomes",
      link: ""
    },
    {
      icon: <FaCircle />,
      text: "Collaborations",
      link: ""
    },
    {
      icon: <FaBook />,
      text: "Syllabus",
      link: ""
    },
    {
      icon: <FaCog />,
      text: "Settings",
      link: ""
    }
  ];
  return (
    <ul className="compact-course-navigation">
      {navElements.map((element, index) => (
        <li key={index}>
          <a href={element.link}>
            <span className="me-1">{element.icon}</span>
            {element.text}
          </a>
        </li>
      ))}
    </ul>
  );
}
export default CompactCourseNav