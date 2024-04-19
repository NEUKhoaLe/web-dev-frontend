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
}

type AssignTo = {
  first_name: string;
  last_name: string;
  email: string;
}

type QuizDetails = {
  quiz_type: QuizType;
  description: string;
  total_points: number;
  assignment_group: AssignmentGroup;
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

type QuizType = 'Graded Quiz' | 'Practice Quiz' | 'Graded Survey' | 'Ungraded Survey';
export type QuestionType = 'Boolean' | 'Short' | 'MCQ';
type AssignmentGroup = 'Quizzes' | 'Exams' | 'Assignments' | 'Project';

export type QuizQuestionAndChoices = {
  name: string;
  isCorrect: boolean;
}

type QuizQuestion = {
  question_number: number;
  question_type: QuestionType;
  question_description: string;
  question_choices: QuizQuestionAndChoices[];
  question_title: string;
  question_points: number;
}

export type { Course, Module, Lesson, Quiz, QuizType, QuizDetails, QuizQuestion, AssignmentGroup, AssignTo};