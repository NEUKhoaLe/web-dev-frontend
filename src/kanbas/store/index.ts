import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../courses/modules/modulesReducer";

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

export interface KanbasState {
  modulesReducer: {
    modules: Module[];
    module: Module;
  };
}
const store = configureStore({
  reducer: {
    modulesReducer
  }
});


export default store;