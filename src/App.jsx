import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useReducer, useRef, createContext } from "react";

const mockData = [
  { id: 0, isDone: false, content: "React공부하기" },
  { id: 1, isDone: false, content: "K-프로젝트" },
  { id: 2, isDone: false, content: "와이어프레임" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.data];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};
export const TodoStateContext = createContext();
export const TodoDispatchStateContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);
  console.log(todos);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };

  return (
    <>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchStateContext.Provider
          value={{ onCreate, onUpdate, onDelete }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </TodoDispatchStateContext.Provider>
      </TodoStateContext.Provider>
    </>
  );
}

export default App;
