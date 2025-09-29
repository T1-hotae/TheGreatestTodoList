import "./PopupMyInfo.css";

const PopupMyInfo = ({ onClose }) => {
  return (
    <div className="popup-content">
      <h3>내 정보</h3>
      <p>이름: 황호태</p>
      <p>이메일: hotae0321@naver.com</p>
      <button onClick={onClose}>닫기</button>
    </div>
  );
};

export default PopupMyInfo;
