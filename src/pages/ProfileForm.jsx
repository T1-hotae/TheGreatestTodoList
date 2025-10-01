import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { client } from "../lib/SupabaseClient";
import { loadSession } from "../redux/login";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { session, status } = useSelector((state) => state.auth); // authSlice 이름 확인
  const [nickname, setNickname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [department, setDepartment] = useState("");

  // 세션이 없으면 불러오기
  if (!session && status === "idle") {
    dispatch(loadSession());
  }

  const saveProfile = async () => {
    // 안전하게 세션과 user.id 확인
    if (!session?.user?.id) {
      alert("로그인이 필요합니다.");
      return;
    }

    const { data, error } = await client.from("profiles").upsert({
      user_id: session.user.id,
      nickname,
      birthdate,
      department,
    });

    if (error) {
      console.error("프로필 저장 실패:", error);
      return;
    }

    alert("프로필 저장 완료!");
    nav("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col gap-4 w-80 p-6 bg-white rounded-xl shadow-md border border-gray-200">
        <input
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
        />
        <input
          type="date"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <input
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="학과"
        />
        <button
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          onClick={saveProfile}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
