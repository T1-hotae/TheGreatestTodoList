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
    <div className="flex justify-center items-center h-auto my-4">
      <div className="flex items-center justify-between w-70 gap-2 border p-2 rounded-lg shadow-md transition duration-200 hover:bg-indigo-50">
        <div className="flex items-center gap-2 flex-1">
          <input type="checkbox" checked={isDone} onChange={onCheckChange} />
          <Link to={`/detail/${id}`} className="flex-1">
            <div>{content}</div>
          </Link>
        </div>
        <button
          className="border-0 rounded-2xl bg-indigo-500 text-white px-2 py-1 cursor-pointer transition duration-200 hover:bg-indigo-700"
          onClick={onDeleteClick}
        >
          삭제
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
