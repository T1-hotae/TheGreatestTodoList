import "./Header.css";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div className="Header">
      <div className="Header-container">
        <span>TodoList</span>
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

      {/*내 정보 팝업 이긴해*/}
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h3>내 정보</h3>
            <p>이름: 홍길동</p>
            <p>이메일: test@example.com</p>
            <button onClick={togglePopup}>닫기</button>
          </div>
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
