import { useState, useCallback, useRef, useEffect } from "react";
import { create } from "../redux/todo";
import { useDispatch } from "react-redux";
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
      <div className="flex justify-center items-center my-5">
        <div className="flex items-center border-1 border-[rgb(103,122,246)] rounded focus-within:border-[rgb(140,92,245)] focus-within:shadow-[0_0_5px_rgb(173,141,242)] transition-all duration-200">
          <input
            ref={inputRef}
            type="text"
            placeholder={placeholder}
            value={content}
            onChange={onContentChange}
            onKeyDown={onKeyDown}
            className="focus:bg-[rgb(103, 122, 246)] outline-0 flex-1 p-2.5"
          />
          <button
            onClick={onCreateTodo}
            className="border-0 bg-[rgb(103,122,246)] text-white cursor-pointer p-2.5"
          >
            {buttonTag}
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
