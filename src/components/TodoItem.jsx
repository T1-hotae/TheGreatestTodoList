import "./TodoItem.css";
import { useDispatch } from "react-redux";
import { update, remove } from "../store/store";

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
          <div className="content">{content}</div>
          <button className="btnDel" onClick={onDeleteClick}>
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
