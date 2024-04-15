type Course = {
  _id: string;
  id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
}

type Lesson = {
  id: string;
  name: string;
  description: string;
  module: string;
};

type Module = {
  _id: string;
  id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
};

type Quiz = {
  _id: string;
  name: string;
  course: string;
  publish: boolean;
  assign_to: AssignTo[];
  details: QuizDetails;
  questions: QuizQuestion[];
  answers: QuizAnswer[];
}

type AssignTo = {
  first_name: string;
  last_name: string;
  email: string;
}

type QuizDetails = {
  quiz_type: 'Graded Quiz' | 'Practice Quiz' | 'Graded Survey' | 'Ungraded Survey';
  total_points: number;
  assignment_group: 'Quizzes' | 'Exams' | 'Assignments' | 'Project';
  shuffle_answers: boolean;
  time_limit: number;
  multiple_attempts: boolean;
  time_till_show_correct: number;
  access_code: string;
  one_question: boolean;
  webcam: boolean;
  lock_question: boolean;
  due_date: Date;
  available_date: Date;
  until_date: Date;
}

type QuizQuestion = {
  question_number: number;
  question_type: string;
  question_description: string;
  question_choices: string[];
}

type QuizAnswer = {
  question_number: number;
  answer: string;
}

export type { Course, Module, Lesson, Quiz };