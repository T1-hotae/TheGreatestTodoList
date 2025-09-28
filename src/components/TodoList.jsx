import { useContext } from "react";
import { TodoStateContext } from "../App";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useContext(TodoStateContext);
  return (
    <div className="TodoList">
      {todos.map((item) => {
        return <TodoItem id={item.id} {...item} />;
      })}
    </div>
  );
};

export default TodoList;
