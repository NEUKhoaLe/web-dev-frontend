import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../courses/modules/modulesReducer";
import { Module } from "../types";

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