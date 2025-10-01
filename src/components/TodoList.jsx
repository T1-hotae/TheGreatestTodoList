import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const listRef = useRef(null);

  // todos가 변경될 때마다 스크롤을 맨 아래로
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [todos]);

  return (
    <div className="text-decoration-none color-inherit flex justify-center ">
      <div
        ref={listRef}
        className="max-h-70 overflow-y-auto custom-scrollbar rounded-2xl py-2 px-4 shadow-inner"
      >
        {todos.map((item) => {
          return <TodoItem key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default TodoList;
