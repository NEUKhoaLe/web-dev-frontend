import { Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./navigation";
import CourseHeader from "./header";
import Modules from "./modules";
import Home from "./home";
import Assignments from "./assignments";
import { useState, useEffect } from "react";
import { findCourseById as clientCourseFindById } from "./client";
import Quizzes from "./quizzes";
import QuizDetails from "./quizzes/details";
import QuizEditor from "./quizzes/editor";
import QuizPreview from "./quizzes/preview";
import {useNavigate} from "react-router";


function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId: string) => {
    const currentCourse = await clientCourseFindById(courseId);
    setCourse(currentCourse);
  };
  useEffect(() => {
    if (!courseId) return;
    findCourseById(courseId);
  }, [courseId]);

  const crumbs = useLocation().pathname.split('/');
  crumbs.splice(0, 4);
  const getCrumbs = () => {
    if (crumbs.length === 0) return [{text: 'Modules', path: ''}];

    let currentPath = '';
    const result = crumbs.map((crumb) => {
      currentPath += `${currentPath === '' ? '' : '/'}${crumb}`;
      return {text: crumb, path: currentPath};
    });
    return result;
  }

  return (
    <div className="d-flex flex-column">
      <CourseHeader 
      name={course?.number || ''} 
      breadcrumbs={getCrumbs()}
      />
      <hr style={{marginLeft: 24, marginRight: 24}}/>
      <div className="d-flex flex-row">
        <CourseNavigation courseId={courseId || ""}/> 
        <div
          className="overflow-y-scroll flex-fill bottom-0 end-0"
          style={{marginLeft: 48}}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="Quizzes" element={<Quizzes/>} />
            <Route path="Quizzes/:quizId" element={<QuizDetails/>} />
            <Route path="Quizzes/:quizId/edit" element={<QuizEditor/>} />
            <Route path="Quizzes/:quizId/preview" element={<QuizPreview/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses