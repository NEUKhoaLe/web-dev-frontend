import KanbasNavigation from "./navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./dashboard";
import Courses from "./courses";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Course } from "./types";
import Account from "./account";
import * as client from "./courses/client";
import { nanoid } from "@reduxjs/toolkit";

function Kanbas() {
  const [courses, setCourses] = useState([] as Course[]);
  const [course, setCourse] = useState({
    _id: "0", id: "New ID", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    department: "New Department", credits: 4,
    description: "New Description",
  });
  const addNewCourse = async () => {
    setCourse({ ...course, id: nanoid() });
    await client.addNewCourse(course);
  };
  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
  };
  const updateCourse = async () => {
    await client.updateCourse(course);
  };
  const findAllCourses = async () => {
    const courses = await client.findAllCourses();
    setCourses(courses);
  };
  useEffect(() => {
    findAllCourses();
  }, [courses]);


  return (
    <Provider store={store}>
      <div className="d-flex" style={{height: '100%'}}>
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />} 
            />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </Provider>
);}
export default Kanbas;