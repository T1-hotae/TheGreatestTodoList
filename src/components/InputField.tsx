// Props 타입 정의
interface InputFieldProps {
  label?: string; // 입력 필드 위에 표시할 라벨(optional)
  placeholder: string; // placeholder
  type?: "text" | "password" | "email"; // type 기본값 지정 가능
}

const InputField = ({ label, placeholder, type = "text" }: InputFieldProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 text-sm text-gray-700">{label}</label>}
      <input
        className="h-12 bg-gray-200 rounded px-3 w-full"
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default InputField;
