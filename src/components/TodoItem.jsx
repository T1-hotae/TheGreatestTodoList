import { useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchStateContext } from "../App";

const TodoItem = ({ id, isDone, content }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchStateContext);
  const onCheckChange = () => {
    onUpdate(id);
  };
  const onDeleteClick = () => {
    onDelete(id);
  };
  return (
    <>
      <div className="TodoItem">
        <div className="TodoItem-container">
          <input type="checkbox" checked={isDone} onChange={onCheckChange} />
          <div className="content">{content}</div>
          <button onClick={onDeleteClick}>삭제</button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
