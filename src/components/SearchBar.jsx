import { useState, useContext, useCallback, useRef, useEffect } from "react";
import "./SearchBar.css";
import { TodoDispatchStateContext } from "../App";

const SearchBar = () => {
  const [content, setContent] = useState("");
  const { onCreate } = useContext(TodoDispatchStateContext);
  const inputRef = useRef();

  const onContentChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  const onCreateTodo = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onCreateTodo();
    }
  };

  // 화면 전체에서 Enter 누르면 input focus
  useEffect(() => {
    const handleGlobalEnter = (e) => {
      if (e.key === "Enter") {
        inputRef.current.focus();
      }
    };
    window.addEventListener("keydown", handleGlobalEnter);
    return () => {
      window.removeEventListener("keydown", handleGlobalEnter);
    };
  }, []);

  return (
    <>
      <div className="SearchBar">
        <div className="input-btn-container">
          <input
            ref={inputRef}
            type="text"
            placeholder="추가할 일을 입력하세요."
            value={content}
            onChange={onContentChange}
            onKeyDown={onKeyDown}
          />
          <button onClick={onCreateTodo}>추가</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
