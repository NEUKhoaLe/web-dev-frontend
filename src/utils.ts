import { Quiz } from "./kanbas/types";

export const dateToString = (date: Date, includeTime: boolean = true) => {
  const wrappedDate = new Date(date);
  const mdy = wrappedDate.toLocaleString('en-US', { month: 'short', day: 'numeric' });
  if (!includeTime) return mdy;
  return `${mdy} at ${wrappedDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
};
export const createDefaultQuiz = (courseId: string): Quiz => {
  return {
    _id: "",
    name: "Unnamed Quiz",
    course: courseId,
    publish: false,
    assign_to: [],
    details: {
      quiz_type: "Graded Quiz",
      description: "New Quiz Description",
      assignment_group: "Quizzes",
      shuffle_answers: true,
      time_limit: 20,
      multiple_attempts: false,
      time_till_show_correct: 0,
      access_code: "",
      one_question: true,
      webcam: false,
      lock_question: false,
      due_date: new Date(),
      available_date: new Date(),
      until_date: new Date()
    },
    questions: [],
  };
}