import { useEffect, useState } from "react";
import { client } from "../lib/SupabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { loadSession } from "../redux/login";

const PopupMyInfo = ({ onClose }) => {
  const [profile, setProfile] = useState(null); // true/false 대신 데이터 객체
  const dispatch = useDispatch();
  const { session, status } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!session && status === "idle") {
      dispatch(loadSession());
    }
  }, [dispatch, session, status]);

  useEffect(() => {
    const loadProfile = async () => {
      if (!session?.user?.id) return; // id까지 확인

      const { data, error } = await client
        .from("profiles")
        .select("*")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (error) {
        console.error("프로필 불러오기 실패:", error);
        setProfile(null);
        return;
      }

      setProfile(data);
    };

    loadProfile();
  }, [session]);

  return (
    <div className="bg-white p-5 border-grey-1 rounded-2xl w-80 h-50 flex flex-col justify-between">
      {!profile ? (
        <p className="flex justify-center items-center">
          프로필을 등록해주세요
        </p>
      ) : (
        <div>
          <h3 className="text-lg font-semibold mb-2 gap-1">내 정보</h3>
          <p>닉네임: {profile.nickname}</p>
          <p>생년월일: {profile.birthdate}</p>
          <p>학과: {profile.department}</p>
        </div>
      )}

      <button
        onClick={onClose}
        className="bg-indigo-500 text-white px-4 py-1 rounded-lg hover:bg-indigo-600 transition"
      >
        닫기
      </button>
    </div>
  );
};

export default PopupMyInfo;
