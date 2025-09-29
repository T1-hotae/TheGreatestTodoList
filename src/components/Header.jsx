import "./Header.css";
import { useState, useEffect, useRef } from "react";
import PopupMyInfo from "./PopupMyInfo";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setPageToTodoList, setPageToSearch } from "../redux/page";

const Header = () => {
  // 내 정보
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // 내 설정
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);
  const btnRef = useRef(null);

  // 다른 곳 클릭 시 팝업 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // TodoList
  const nav = useNavigate();
  const onHandle = (e) => {
    const value = e.target.value;
    if (value === "todo") {
      dispatch(setPageToTodoList());
      nav("/");
    } else if (value === "search") {
      dispatch(setPageToSearch());
      nav("/Post");
    }
  };

  const { page } = useSelector((state) => state.page);

  return (
    <div className="Header">
      <div className="Header-container">
        {/* 토글을 통한 페이지 이동 */}
        <select
          className="siteName"
          name="title"
          onChange={onHandle}
          defaultValue={page}
        >
          <option value="todo">TodoList</option>
          <option value="search">Search</option>
        </select>
        {/* 팝업창  */}
        <div>
          <button className="my-info" onClick={togglePopup}>
            내 정보
          </button>
          <button
            className="my-option"
            ref={btnRef}
            onClick={() => setOpen((prev) => !prev)}
          >
            내 설정
          </button>
        </div>
      </div>

      {/*내 정보 팝업*/}
      {isOpen && (
        <div className="popup">
          <PopupMyInfo onClose={togglePopup} />
        </div>
      )}

      {/* 프로필 팝업 */}
      {open && (
        <div ref={popupRef} className="profile-Popup">
          <p className="profile">프로필 설정</p>
          <button className="account-manage">계정 관리</button>
          <button className="log-out">로그아웃</button>
        </div>
      )}
    </div>
  );
};

export default Header;
