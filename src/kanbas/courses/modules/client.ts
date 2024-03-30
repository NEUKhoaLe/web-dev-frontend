import axios from "axios";
import { Module } from "../../types";
const COURSES_API = "http://localhost:4000/api/courses";
const MODULES_API = "http://localhost:4000/api/modules";
export const findModulesForCourse = async (courseId: string) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};
export const createModule = async (courseId: string, module: Module) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};
export const deleteModule = async (moduleId: string) => {
  const response = await axios
    .delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};
export const updateModule = async (module: Module) => {
  const response = await axios.put(`${MODULES_API}/${module._id}`, module);
  return response.data;
};


