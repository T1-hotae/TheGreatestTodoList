import { useState, useCallback, useRef, useEffect } from "react";
import { create } from "../redux/todo";
import { useDispatch } from "react-redux";
import "./SearchBar.css";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  const dispatch = useDispatch();
  const { page, placeholder, buttonTag } = useSelector((state) => state.page);

  const onContentChange = useCallback((e) => {
    setContent(e.target.value);
  }, []);

  //createTodo
  const onCreateTodo = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }
    if (page === "todo") {
      dispatch(create(content));
      setContent("");
    }
  };

  //input UX 설정
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
            placeholder={placeholder}
            value={content}
            onChange={onContentChange}
            onKeyDown={onKeyDown}
          />
          <button onClick={onCreateTodo}>{buttonTag}</button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
