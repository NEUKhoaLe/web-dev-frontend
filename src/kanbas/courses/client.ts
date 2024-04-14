import axios from "axios";
import { Course } from "../types";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;

export const addNewCourse = async (course: Course) => {
  const response = await axios.post(COURSES_API, course);
  return response.data;
};
export const deleteCourse = async (courseId: string) => {
  const response = await axios.delete(`${COURSES_API}/${courseId}`);
  return response.data; // status
};
export const updateCourse = async (course: Course) => {
  const response = await axios.put(`${COURSES_API}/${course._id}`, course);
  return response.data; // status
};
export const findAllCourses = async () => {
  const response = await axios.get(COURSES_API);
  return response.data;
};
export const findCourseById = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}`);
  return response.data;
}