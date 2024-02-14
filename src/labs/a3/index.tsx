import JavaScript from "./javascript";
import PathParameters from "./routing/PathParameters";
import Classes from "./classes";
import Styles from "./styles";
import ConditionalOutput from "./conditionalOutput";
import Highlight from "./Highlight";
import Add from "./Add";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div className="container">
      <h1>Assignment 3</h1>
      <TodoList/>
      <TodoItem/>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <PathParameters/>
      <JavaScript/>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>
     <Add a={3} b={4} />
    </div>
  );
}
export default Assignment3;