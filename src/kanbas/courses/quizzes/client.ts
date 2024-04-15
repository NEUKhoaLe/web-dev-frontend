import axios from "axios";
import { Quiz } from "../../types";
const API_BASE = process.env.REACT_APP_API_BASE;
const QUIZZES_API = `${API_BASE}/api/quizzes`;
export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${courseId}`);
  return response.data.quizzes;
};
export const findQuizById = async (courseId: string, quizId: string) => {
  const response = await axios.get(`${QUIZZES_API}/${courseId}/${quizId}`);
  return response.data.quiz;
};
export const createQuiz = async (courseId: string, quiz: Quiz) => {
  const response = await axios.post(
    `${QUIZZES_API}/${courseId}`,
    { quiz }
  );
  return response.data.quiz;
};
export const publishQuiz = async (courseID: string, quizID: string, publish: boolean) => {
  const response = await axios
    .patch(`${QUIZZES_API}/${courseID}/${quizID}/publish`, { publish });
  return response.data.status;
};
export const copyQuiz = async (courseID: string, quizID: string, new_course_id: string) => {
  const response = await axios
    .post(`${QUIZZES_API}/${courseID}/${quizID}/copy`, { new_course_id });
  return response.data.quiz;
};
export const deleteQuiz = async (courseID: string, quizID: string) => {
  const response = await axios
    .delete(`${QUIZZES_API}/${courseID}/${quizID}`);
  return response.data.status;
};
export const editQuiz = async (courseID: string, quizID: string, quiz: Quiz) => {
  const response = await axios
    .patch(`${QUIZZES_API}/${courseID}/${quizID}`, { quiz });
  return response.data.quiz;
}


