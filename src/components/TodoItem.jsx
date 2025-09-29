import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { update, remove } from "../redux/todo";
import { Link } from "react-router-dom";

const TodoItem = ({ id, isDone, content }) => {
  const dispatch = useDispatch();

  const onCheckChange = () => {
    dispatch(update(id));
  };
  const onDeleteClick = () => {
    dispatch(remove(id));
  };
  return (
    <>
      <div className="TodoItem">
        <div className="TodoItem-container">
          <input type="checkbox" checked={isDone} onChange={onCheckChange} />
          <Link className="todo-link" to={`/${id}`}>
            <div className="content">{content}</div>
          </Link>
        </div>
        <button className="btnDel" onClick={onDeleteClick}>
          삭제
        </button>
      </div>
    </>
  );
};

export default TodoItem;
