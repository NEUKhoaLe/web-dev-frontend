import React from "react";
import HelloReducer from "./helloRedux/index";
import CounterReducer from "./counterRedux/index";
import AddReducer from "./addRedux/index";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloReducer/>
      <CounterReducer/>
      <AddReducer/>
    </div>
  );
};

export default ReduxExamples;