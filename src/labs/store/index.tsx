import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../a4/reduxExamples/helloRedux/helloReducer";
import counterReducer from "../a4/reduxExamples/counterRedux/counterReducer";
import addReducer from "../a4/reduxExamples/addRedux/addReducer";
import todosReducer from "../a4/reduxExamples/todos/todosReducer";
export type TodoType = {
  id: string;
  title: string;
};

export interface LabState {
  helloReducer: { message: string; };
  counterReducer: {
    count: number;
  };
  addReducer: {
    sum: number;
  };
  todosReducer: {
    todos: TodoType[];
    todo: TodoType;
  };
}
const store = configureStore({
  reducer: {
    helloReducer,
    counterReducer,
    addReducer,
    todosReducer,
  },
});
export default store;