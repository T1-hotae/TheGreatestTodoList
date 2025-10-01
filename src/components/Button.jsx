import "./Button.css";

const Button = ({ title, onClick }) => {
  const onClickBtn = () => {
    onClick();
  };

  return (
    <button
      className="flex-1 border-black border-1 rounded-2xl p-1 cursor-pointer transition duration-200 hover:border-indigo-300"
      onClick={onClickBtn}
    >
      {title}
    </button>
  );
};

export default Button;
