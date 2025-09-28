import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="TodoList">
      {todos.map((item) => {
        return <TodoItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default TodoList;
