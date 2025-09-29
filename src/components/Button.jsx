import "./Button.css";

const Button = ({ title, onClick }) => {
  const onClickBtn = () => {
    onClick();
  };
  return (
    <button className="Button" onClick={onClickBtn}>
      {title}
    </button>
  );
};

export default Button;
