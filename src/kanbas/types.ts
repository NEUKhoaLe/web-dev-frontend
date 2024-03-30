type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  image: string;
}

type Lesson = {
  _id: string;
  name: string;
  description: string;
  module: string;
};
type Module = {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons: Lesson[];
};

export type { Course, Module, Lesson };